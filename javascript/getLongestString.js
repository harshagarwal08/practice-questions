// let array = ['hello', 'hi', 'hola', 'namaste']

function getLongestString(array){
    let maximumLengthString = '';
	array.forEach(string => string.length > maximumLengthString.length ? maximumLengthString = string : "");
	return maximumLengthString;
} 
const getLongestStringAF = (array) => {
    let maximumLengthString = '';
	array.forEach(string => string.length > maximumLengthString.length ? maximumLengthString = string : "");
	return maximumLengthString;
} 

// console.log(getLongestString(array))

module.exports = {getLongestString, getLongestStringAF}