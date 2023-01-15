function replaceCapitalization(string) {
	let letters = string.split('').map(
        char => char === char.toUpperCase() ? char.toLowerCase(): char.toUpperCase());
	return letters.join('');
}
const replaceCapitalizationAF = (string) => {
	let letters = string.split('').map(
        char => char === char.toUpperCase() ? char.toLowerCase(): char.toUpperCase());
	return letters.join('');
}

// console.log(replaceCapitalization('HaRsH'))

module.exports = {replaceCapitalization, replaceCapitalizationAF}