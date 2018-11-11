var swapPairs = function(head) {
    if(!head || !head.next) return head;
    let newHead = head.next;
    let curr = head;
    
    while(curr && curr.next){
        let twoNext = curr.next.next;
        curr.next.next= curr;
        curr.next = (twoNext && twoNext.next) ? twoNext.next: twoNext;
        curr = twoNext;
    }
    return newHead;
};