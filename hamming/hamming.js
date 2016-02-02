class Hamming {
  compute(stringOne, stringTwo) {
    if (stringOne.length !== stringTwo.length) {
      throw new Error('DNA strands must be of equal length.');
    }
    
    let i = 0;
    let total = 0;
    for (let letter of stringOne) {
      if (letter !== stringTwo[i]) {
        total++;
      }
      i++;
    }
    return total;
  }
}

export default Hamming;
