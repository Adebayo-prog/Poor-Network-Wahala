function isPowerOfTwo(number){
	isTrue = false
	for (let power = 1; power <= number; power++){
		result = 2 ** power
		if (result === number){
			isTrue = true;
		}
	}
	return isTrue;
}
result = isPowerOfTwo(20);
console.log (result)
