const {concatWithoutFirstCharacter, concatWithoutFirstCharacterAF} = require('./question7')

test('testCaseOne', () => {
    expect(concatWithoutFirstCharacter(['hi', 'hello'])).toEqual('iello');
});

test('testCaseTwo', () => {
    expect(concatWithoutFirstCharacter(['harsh', 'agarwal'])).toEqual('arshgarwal');
});

test('testCaseThree', () => {
    expect(concatWithoutFirstCharacterAF(['this', 'is', 'a', 'test'])).toEqual('hissest');
});

test('testCaseFour', () => {
    expect(concatWithoutFirstCharacterAF(['code', 'academy', '2023'])).toEqual('odecademy023');
});