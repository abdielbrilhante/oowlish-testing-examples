type ResponseSet = Record<string, MockedResponse | MockedResponseGenerator>;

export interface MockedResponse {
  status: number
  body: unknown
}

type MockedResponseGenerator =
  (endpoint: string, config: RequestInit | undefined, responses: ResponseSet) => MockedResponse

const responses: ResponseSet = {};

export function mockRequest(
  method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE',
  endpoint: string,
  result: MockedResponse | MockedResponseGenerator
) {
  responses[`${method} ${endpoint}`] = result;
}

export function clearRequestMocks() {
  for (const key of Object.keys(responses)) {
    delete responses[key];
  }

  return responses;
}

// @ts-ignore: Mocked global Fetch.
global.fetch = jest.fn((endpoint: string, config?: RequestInit) => {
  const method = config?.method ?? 'GET';
  const key = `${method} ${endpoint}`;

  if (!{}.propertyIsEnumerable.call(responses, key)) {
    const paths = Object.keys(responses).map((path) => `  ${path}`);
    throw new Error(`${method} request to ${endpoint} was not mocked. Found (${paths.length}):\n${paths.join('\n')}`);
  }

  const mocked = responses[key];
  const result = typeof mocked === 'function' ? mocked(endpoint, config, responses) : mocked;

  if (!result) {
    throw new Error(`${method} request to ${endpoint} was mocked but no data was provided`);
  }

  return {
    ok: result.status < 400,
    status: result.status,
    json() {
      if (result.status === 204) {
        throw new Error('Cannot call .json() on 204 responses');
      }

      return new Promise((resolve) => resolve(result.body));
    },
  };
});
