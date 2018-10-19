let mergeTwoLists = function(l1, l2) {
	//when the recursive function stops, it finally gives the l1.next the correct 
	// .next plugs
	if(l1 == null) return l2;
	if(l2 == null) return l1;
    
	if(l1.val < l2.val){
		l1.next = mergeTwoLists(l1.next, l2);
		//you reassign all of l1's next node's recursively before returning.
		return l1;
	} else{
		l2.next = mergeTwoLists(l1, l2.next);
		//you reassign l2's next first recursively before returning.
		return l2;
	}
};
