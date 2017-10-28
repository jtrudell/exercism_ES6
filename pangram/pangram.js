class Pangram {
  constructor(str) {
    this.str = str.toLowerCase();
  }

  isPangram() {
    if (this.str.length < 26) {
      return false;
    }

    for (let cp = 97; cp <= 122; cp++) {
      if (this.str.indexOf(String.fromCharCode(cp)) === -1) {
        return false;
      }
    }

    return true;
  }
}

export default Pangram;
