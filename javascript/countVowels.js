function countVowels(string) {
	let numOfVowels = 0;
    const vowels = ['a', 'e', 'i', 'o', 'u']
	string.split('').forEach(char => numOfVowels += vowels.includes(char))
	return numOfVowels;
}

const countVowelsAF = (string) => {
    let numOfVowels = 0;
    const vowels = ['a', 'e', 'i', 'o', 'u']
	string.split('').forEach(char => numOfVowels += vowels.includes(char))
	return numOfVowels;
}

// console.log(countVowels('harshagarwal'))

module.exports = {countVowels, countVowelsAF}