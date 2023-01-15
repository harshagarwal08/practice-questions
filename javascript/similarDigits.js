function hasSimilarDigit(num) {
    let lastDigit = num % 10;
    while (num) {
      if (num % 10 !== lastDigit) return false;
      num = Math.floor(num / 10);
    }
    return true
}
const hasSimilarDigitAF = (num) => {
    let lastDigit = num % 10;
    while (num) {
      if (num % 10 !== lastDigit) return false;
      num = Math.floor(num / 10);
    }
    return true
}

module.exports = {hasSimilarDigit, hasSimilarDigitAF}