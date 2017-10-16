class Cipher {
  constructor(key='aaaaaaaaaa') {
    this.key = key;
    this.cipher = key.split('').map(ltr => ltr.charCodeAt() - 97);

    if (!this.key.match(/[a-z]+/)) {
      throw new Error('Bad key')
    }
  }

  encode(str) {
    let ary = str.split('').map(ltr => ltr.charCodeAt());
    let j = 0;

    for (let i=0; i < ary.length; i++) {
      ary[i] += this.cipher[j];
      if (ary[i] > 122) ary[i] -= 26;
      j < this.cipher.length - 1 ? j++ : j=0;
    }
    return ary.map(num => String.fromCharCode(num)).join('');
  }

  decode(str) {
    let ary = str.split('').map(ltr => ltr.charCodeAt());
    let j = 0;

    for (let i=0; i < ary.length; i++) {
      ary[i] -= this.cipher[j];
      if (ary[i] < 97) ary[i] += 26;
      j < this.cipher.length - 1 ? j++ : j=0;
    }
    return ary.map(num => String.fromCharCode(num)).join('');
  }
}

export default Cipher;
