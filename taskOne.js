function strLength(str) {
  if (str.length > 1 && str.length < 10) {
    return str.length;
  } else return 'Check if the string is at least 1 character long and not longer than 10 characters';
}

module.exports = strLength;
