export class PlainDate {
  year: number;
  month: number;
  day: number;

  constructor(source: string) {
    const segments = source.substring(0, 10).split('-').slice(0, 3).map(Number);
    if (segments.some(Number.isNaN)) {
      throw new Error(`Malformed date string: ${source}`);
    }

    const [year, month, day] = segments;
    if (month > 12) {
      throw new Error(`Invalid month from source ${source}: ${month}`);
    }

    this.year = year;
    this.month = month;
    this.day = day;
  }

  static today() {
    return new PlainDate(new Date().toISOString());
  }

  clone() {
    return new PlainDate(
      `${this.year}-${String(this.month).padStart(2, '0')}-${String(this.day).padStart(2, '0')}`
    );
  }

  add(value: number, unit: 'year' | 'month' | 'day') {
    const clone = this.clone();

    // FIXME: this does not cover >32 days or <=0 changes either
    if (unit === 'month' && clone.month === 12) {
      clone.month = 1;
      clone.year += 1;
    } else {
      clone[unit] += Math.floor(value);
    }

    return clone;
  }

  sub(value: number, unit: 'year' | 'month' | 'day') {
    return this.add(-value, unit);
  }

  isAfter(date: PlainDate) {
    return this.year > date.year
      || (this.year === date.year && this.month > date.month)
      || (this.year === date.year && this.month === date.month && this.day > date.day);
  }

  format() {
    return `${String(this.month).padStart(2, '0')}/${String(this.day).padStart(2, '0')}/${this.year}`;
  }
}
