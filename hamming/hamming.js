let countMatches = (stringOne, stringTwo) => {
  let i = 0;
  let total = 0;
  for (var letter of stringOne) {
    if (letter !== stringTwo[i]) {
      total++;
    }
    i++;
  }
  return total;
};

class Hamming {
  compute(stringOne, stringTwo) {
    if (stringOne.length !== stringTwo.length) {
      throw new Error('DNA strands must be of equal length.');
    }
    return countMatches(stringOne, stringTwo);
  }
}

export default Hamming;
