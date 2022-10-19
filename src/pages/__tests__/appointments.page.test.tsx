import { act, render } from '@testing-library/react';
import * as React from 'react';
import { AppointmentProvider } from '../../context/appointment.context';
import { AppointmentsPage } from '../appointments.page';
import userEvent from '@testing-library/user-event';
import { mockRequest } from '../../shared/testing/fetch.mock';

// 1 - Render
// 2 - Assertions
// 3 - Mock images import
// 4 - Add necessary context
// 5 - Interactions
// 6 - Re-rendering
// 7 - Mocking the API
// 8 - Using snapshots
// 9 - Extra assertions

jest.mock('../../assets', () => ({
  icons: {
    canine: new URL('http://test-assets.com/dog.png'),
    feline: new URL('http://test-assets.com/cat.png'),
  },
}));

jest.useFakeTimers();

async function rerender() {
  await act(async () => {
    const promise = new Promise((resolve) => setTimeout(resolve, 0));
    jest.runOnlyPendingTimers();
    await promise;
  });
}

const customers = [
  {
    id: '1',
    name: 'John Doe',
    avatar: 'img.png',
    pets: [
      {
        id: '1',
        name: 'Spot',
        sex: 'male',
        breed: 'Labrador',
        species: 'canine',
      },
      {
        id: '2',
        name: 'Lassie',
        sex: 'female',
        breed: 'Rough Collie',
        species: 'canine',
      },
    ],
  },
  {
    id: '2',
    name: 'Richard Doe',
    avatar: 'img.png',
    pets: [
      {
        id: '3',
        name: 'Sphinx',
        sex: 'male',
        breed: 'British Shorthair',
        species: 'feline',
      },
    ],
  },
];

describe('appointment listing page', () => {
  it('allows user to search for appointments based on name', async () => {
    const user = userEvent.setup({ delay: null });

    mockRequest(
      'GET',
      'http://localhost:7171/appointments?search=sam',
      {
        status: 200,
        body: [
          {
            id: '1',
            when: '2022-10-10',
            customer: customers[0],
            pet: customers[0].pets[0],
          },
          {
            id: '2',
            when: '2022-10-30',
            customer: customers[0],
            pet: customers[0].pets[1],
          },
          {
            id: '3',
            when: '2022-10-15',
            customer: customers[1],
            pet: customers[1].pets[0],
          },
        ],
      }
    );

    const { asFragment, getByLabelText } = render(
      <AppointmentProvider>
        <AppointmentsPage />
      </AppointmentProvider>
    );

    await user.type(getByLabelText('Search by customer or pet name'), 'sam');
    await rerender();

    expect(asFragment()).toMatchSnapshot();
  });
});
