//naive two hash map solution
var uncommonFromSentences = function(A, B) {
	let store = {}, deleteMap = {}, result = [];
	A = A.split(' ');
	B = B.split(' ');
        
	for(let i = 0; i < A.length; i++) {
		if(!store[A[i]]) {
			store[A[i]] = 1;  
		} else {
			deleteMap[A[i]] = 1;
		}
	}
        
	for(let i = 0; i < B.length; i++) {
		if(!store[B[i]]) {
			store[B[i]] = 1;  
		} else {
			deleteMap[B[i]] = 1;
		}
	}
    
	for(let key in deleteMap) {
		delete store[key];
	}
        
	return Object.keys(store);
};