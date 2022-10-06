import { PlainDate } from '../date';

describe('plainDate class', () => {
  it('throws error for invalid source string', () => {
    try {
      // eslint-disable-next-line no-new
      new PlainDate('82nbsi');
    } catch (error) {
      expect((error as Error).message).toBe('Malformed date string: 82nbsi');
    }
  });

  it('throws error for source string with > 12 month', () => {
    try {
      // eslint-disable-next-line no-new
      new PlainDate('2021-14-01');
    } catch (error) {
      expect((error as Error).message).toBe('Invalid month from source 2021-14-01: 14');
    }
  });

  it.each([
    ['ISO datetime', '2021-01-31T10:00:00'],
    ['ISO date', '2021-01-31'],
  ])('parses %s correctly', (label, source) => {
    const date = new PlainDate(source);
    expect(date.year).toBe(2021);
    expect(date.month).toBe(1);
    expect(date.day).toBe(31);
  });

  it('can convert date into readable format', () => {
    expect(new PlainDate('2019-12-31').format()).toBe('12/31/2019');
  });

  it('allows manipulating date', () => {
    const origin = new PlainDate('2020-02-01');

    expect(origin.add(1, 'day').format()).toBe('02/02/2020');
    expect(origin.add(7, 'day').format()).toBe('02/08/2020');
    expect(origin.add(1, 'month').format()).toBe('03/01/2020');

    // This tests the buggy paths
    expect(origin.add(12, 'month').format()).toBe('02/01/2021');
    expect(origin.sub(3, 'month').format()).toBe('12/01/2019');
    expect(origin.add(35, 'day').format()).toBe('03/07/2020');
  });
});
