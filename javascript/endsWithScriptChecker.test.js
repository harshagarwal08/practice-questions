const {endsWithScriptChecker, endsWithScriptCheckerAF} = require('./question6')

test('testCaseOne', () => {
    expect(endsWithScriptChecker('javaScript')).toBe(true);
});

test('testCaseTwo', () => {
    expect(endsWithScriptChecker('javaScriptbasics')).toBe(false);
});

test('testCaseThree', () => {
    expect(endsWithScriptCheckerAF('harshagarwalScript')).toBe(true);
});

test('testCaseFour', () => {
    expect(endsWithScriptCheckerAF('harshagarwalScripts')).toBe(false);
});