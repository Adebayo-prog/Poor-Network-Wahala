function hammingWeight(number) {
    let binaryDigit = 0;
    counter = 1
    while (number > 0 ) {
    let digit = number % 2;
    binaryDigit += digit;
    number = number/2;
    number = Math.floor(number);
    }
    return binaryDigit;
}
console.log(hammingWeight(11));
