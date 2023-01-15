function getLargestEvenNumber(array){
    let largestNumber = -1;
    array.forEach(element => {
        element%2 === 0 && largestNumber < element ? largestNumber = element : ""
    });
    return largestNumber
}
const getLargestEvenNumberAF = (array) => {
    let largestNumber = -1;
    array.forEach(element => {
        element%2 === 0 && largestNumber < element ? largestNumber = element : ""
    });
    return largestNumber
}
module.exports= {getLargestEvenNumber, getLargestEvenNumberAF}