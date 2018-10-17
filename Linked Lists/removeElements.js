var removeElements = function(head, val) {
    if (head == null) return null;
    //recursively opens up all call stacks until the last node
    //if current node matches the val then the previous node will point to the next node
    //for example if you had 1 - 2 - 6 - 3 - 6 - 6 - null, the previous 2 (6) nodes will reassign
    //previous nodes in the previous call stacks to null.
    head.next = removeElements(head.next, val);
	return head.val == val ? head.next : head;
};