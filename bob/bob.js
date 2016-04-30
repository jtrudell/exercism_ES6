
export default class Bob {
  hey(message) {
    message = clean(message);
    if (message.trim() === '') {
      return 'Fine. Be that way!';
    } else if (message === message.toUpperCase()) {
      return 'Whoa, chill out!';
    } else if (message.endsWith('?')) {
      return 'Sure.';
    } else {
      return 'Whatever.';
    }
  }
}

function clean(message) {
  const letters = message.match(/\w/g);
  const numbers = message.match(/\d/g);

  if (letters === null || numbers === null) {
    return message;
  }

  const allCaps = () => {
    return letters.join('') === message.toUpperCase();
  };

  if (letters.join('') === numbers.join('')) {
    if (message.endsWith('?') && !allCaps()) {
      return 'number?';
    } else {
      return allCaps() ? "SHOUTING" : 'yo';
    }
  }
  return message;
}
