const {countVowels, countVowelsAF} = require('./question8')

test('testCaseOne', () => {
    expect(countVowels('namaste')).toBe(3);
});

test('testCaseTwo', () => {
    expect(countVowels('harshagarwal')).toBe(4);
});

test('testCaseThree', () => {
    expect(countVowelsAF('sdfghjkl')).toBe(0);
});

test('testCaseFour', () => {
    expect(countVowelsAF('aeiou')).toBe(5);
});