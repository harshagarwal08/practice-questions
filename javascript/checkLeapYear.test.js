const {isLeapYear, isLeapYearAF} = require('./question5')

test('testCaseOne', () => {
    expect(isLeapYear(2020)).toBe(true);
  });
test('testCaseTwo', () => {
    expect(isLeapYear(2021)).toBe(false);
  });
test('testCaseThree', () => {
    expect(isLeapYearAF(2024)).toBe(true);
  });
test('testCaseFour', () => {
    expect(isLeapYearAF(2025)).toBe(false);
  });

