function checkPerfectNumber(number){
    let total = 0;
	let counter=1;
	while(counter<number){
        if (number%counter==0){
            total+=counter;     
        }
        counter+=1;
    }                     
    if (total==number){
        return true;
   }
   else{
        return false;
   }
}
console.log(checkPerfectNumber(40))
