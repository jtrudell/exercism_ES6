export default class Gigasecond {
  constructor(startDate) {
    this.startDate = startDate;
    this.gigaseconds = 10**9;
  }

  date() {
    const startDateToSeconds = this.startDate.valueOf() / 1000;
    return new Date((this.gigaseconds + startDateToSeconds) * 1000);
  }
}
