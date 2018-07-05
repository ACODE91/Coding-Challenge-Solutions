var addTwoNumbers = function(l1, l2) {
    let dummyHead = new ListNode(0);
    let p = l1, q = l2, curr = dummyHead;
    let carry = 0;

    while (p != null || q != null) {
        let x = (p != null) ? p.val : 0;
        let y = (q != null) ? q.val : 0;
        let sum = carry + x + y;
        
        if(sum >= 10) {
        carry = Math.floor(sum / 10);   
        } else {
        carry = 0;
        }
        //this line will keep building new nodes after dummyHead
        //new nodes will appear after the new curr after to continue making a linked list.
        //for the purpose of having left over carry and to NOT overwrite dummyHead's next you want to keep building on curr.
        curr.next = new ListNode(sum % 10);
        curr = curr.next;
        if (p != null) p = p.next;
        if (q != null) q = q.next;
    }
    if (carry > 0) {
        curr.next = new ListNode(carry);
    }
    return dummyHead.next;
};