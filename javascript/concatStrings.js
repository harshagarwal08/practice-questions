function concatWithoutFirstCharacter(array) {
	let finalString = '';
	array.forEach(string => {
		finalString += string.slice(1);
	});
	return finalString;
}

const concatWithoutFirstCharacterAF = (array) => {
	let finalString = '';
	array.forEach(string => {
		finalString += string.slice(1);
	});
	return finalString;
}

// console.log(concatWithoutFirstCharacter(['harsh', 'agarwal']))
module.exports = {concatWithoutFirstCharacter, concatWithoutFirstCharacterAF}