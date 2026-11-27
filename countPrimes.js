function countPrimes(number) {
counter = 0;
for (counter1 = 1; counter1 <= number; counter1++) {
    let primeCounter = 0;
    for (counter2 = 1; counter2 <= counter1; counter2++) {
        if ( counter1 % counter2 == 0) {
            primeCounter++;
            }
        }
     if (primeCounter == 2) {
    counter++
    }  
    
}
	return counter;

}

console.log (countPrimes(10));
