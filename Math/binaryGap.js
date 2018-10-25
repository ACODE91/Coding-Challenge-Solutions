var binaryGap = function(N) {
	let bin = N.toString(2), distance = 0;
	if(bin.length == 1) {
		return 0;
	}
    
	for(let i = 0; i < bin.length; i++) {
		//check if first pointer is 1
		if(bin[i] !== '1') {
			continue;
		}
		//search for next 1
		for(let j = i + 1; j < bin.length; j++) {
			if(bin[j] == '1') {
				if((j - i) > distance) {
					distance = j - i; 
				}
				i = j;
			}
		}        
	}
	return distance;
};