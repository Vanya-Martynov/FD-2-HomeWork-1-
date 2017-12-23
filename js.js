(function(){


	function printDuplicateNumbers(...args){
		let i;
		
		for(i=0; i < arguments.length; i++){
			let duplicate = 0,
				checkSameNumber = 0;
			
			for(let k = i; k < arguments.length; k++){
				if (arguments[i]===arguments[k]){
					duplicate+=1;		
					
				}
				
			}
			for(let j = i - 1; j >= 0; j--){
				if (arguments[j]===arguments[i]){
					checkSameNumber = 1;
					
				}
			}
			if (duplicate > 1 && checkSameNumber === 0){
					
					console.log(arguments[i]+ ' - ' + duplicate);
					
				}
		}

	}
	printDuplicateNumbers(1,34,67,1,5,34,1);
	


}());