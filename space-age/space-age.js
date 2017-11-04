class SpaceAge {
  constructor(seconds) {
    this.seconds = seconds;
    this.calcAge = (earthAge, planet) => Math.round(earthAge / planet * 100) / 100;
    this.earth = this.calcAge(this.seconds, 31557600);
  }

  onEarth() {
    return this.earth;
  }

  onMercury() {
    return this.calcAge(this.earth, 0.2408467);
  }

  onVenus() {
    return this.calcAge(this.earth, 0.615197260);
  }

  onMars() {
    return this.calcAge(this.earth, 1.8808158);
  }

  onJupiter() {
    return this.calcAge(this.earth, 11.862615);
  }

  onSaturn() {
    return this.calcAge(this.earth, 29.447498);
  }

  onUranus() {
    return this.calcAge(this.earth, 84.016846);
  }

  onNeptune() {
    return this.calcAge(this.earth, 164.79132);
  }
}

export default SpaceAge;
