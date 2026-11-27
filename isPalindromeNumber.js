function isPalindromeNumber(number){
    reverse =0;
    while (number>0){
        reverseSingular = number % 10;
        reverse = reverse*10 +reverseSingular;
        number = number/10;
        number = Math.floor(number);
    }
    if(number==reverse){
        return true;
    }
	else {
	    return false;
	}
}

console.log(isPalindromeNumber(345));

