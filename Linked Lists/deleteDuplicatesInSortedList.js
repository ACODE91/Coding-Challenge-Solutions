//iterative
var deleteDuplicates = function(head) {
	if(!head || !head.next) {
		return head;
	} 
    
	let curr = head;
	while(curr && curr.next) {
		if(curr.next.val == curr.val) {
			curr.next = curr.next.next;
		} else {
			curr = curr.next;
		}
	}
	return head;
};