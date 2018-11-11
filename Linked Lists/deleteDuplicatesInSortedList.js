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
//recursive solutions
function deleteDuplicates(head) {
    if(head == null || head.next == null)return head;
    head.next = deleteDuplicates(head.next);
    return head.val == head.next.val ? head.next : head;
}