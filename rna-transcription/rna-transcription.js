const dna = { 'C': 'G', 'G': 'C', 'A': 'U', 'T': 'A' };

class Transcriptor {
  toRna(letters) {
    let rna = '';
    for (let letter of letters) {
      rna += dna[letter];
    }
    return rna;
  }
}

export default Transcriptor;
