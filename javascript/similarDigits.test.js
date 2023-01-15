const {hasSimilarDigit, hasSimilarDigitAF} = require('./question2')

test('testCaseOne', () => {
    expect(hasSimilarDigit(22)).toBe(true);
  });
test('testCaseTwo', () => {
    expect(hasSimilarDigit(21)).toBe(false);
  });
test('testCaseThree', () => {
    expect(hasSimilarDigitAF(2222)).toBe(true);
  });
test('testCaseFour', () => {
    expect(hasSimilarDigitAF(2221)).toBe(false);
  });


  
