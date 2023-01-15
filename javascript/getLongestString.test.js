const {getLongestString, getLongestStringAF} = require('./question4')

test('testCaseOne', () => {
    expect(getLongestString(['hi', 'hello', 'namaste'])).toEqual('namaste');
});

test('testCaseTwo', () => {
    expect(getLongestString(['harsh', 'harshag', 'harshagarwal'])).toEqual('harshagarwal');
});

test('testCaseThree', () => {
    expect(getLongestStringAF(['harshagarwal', 'harshag', 'harsh'])).toEqual('harshagarwal');
});

test('testCaseFour', () => {
    expect(getLongestStringAF(['harsh', 'harshag', 'harshagarwal', 'harshagarwalcodes'])).toEqual('harshagarwalcodes');
});