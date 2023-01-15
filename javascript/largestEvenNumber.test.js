const {getLargestEvenNumber, getLargestEvenNumberAF} = require('./question1');
test('testCaseOne', () => {
    expect(getLargestEvenNumber([1,3,5,7,9])).toBe(-1);
  });
test('testCaseTwo' , () => {
    expect(getLargestEvenNumber([1,2,3,4,5,6])).toBe(6);
  });
test('testCaseThree' , () => {
    expect(getLargestEvenNumberAF([2,4,6,8,10])).toBe(10);
  });
test('testCaseFour' , () => {
    expect(getLargestEvenNumberAF([11,23,57,99])).toBe(-1);
  });