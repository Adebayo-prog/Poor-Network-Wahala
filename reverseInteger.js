function reverseInteger(number){
	
	if (number >0){
	reverse = 0
	while (number>0) {
		reverseSingular = number % 10
		reverse =reverse * 10 + reverseSingular
		number = Math.floor(number/10)
	}
	}
	else {
	    reverseSingular = (number % 10)
	    reverse = reverseSingular
	    number = Math.floor(number/-10)
	    
	    while (number>0) {
		reverseSingular = number % 10
		reverse =reverse * 10 - reverseSingular
		number = Math.floor(number/10)
	}
	}
	return reverse
}
result = reverseInteger(765678)
console.log (result)
