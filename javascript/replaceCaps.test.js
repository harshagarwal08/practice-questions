const {replaceCapitalization, replaceCapitalizationAF} = require('./question3')

test('testCaseOne', () => {
    expect(replaceCapitalization('hArSh')).toEqual('HaRsH');
  });
test('testCaseTwo', () => {
    expect(replaceCapitalization('')).toEqual('');
  });
test('testCaseThree', () => {
    expect(replaceCapitalizationAF('HARSH')).toEqual('harsh');
  });
test('testCaseFour', () => {
    expect(replaceCapitalizationAF('harsh')).toEqual('HARSH');
  });


  
