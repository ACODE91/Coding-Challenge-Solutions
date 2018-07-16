//Brute Force
let ListNode = function(val) {
    this.val = val;
    this.next = null;
}

var reverseList = function(head) {
  let array = [];
  let curr = head;
    
  while(curr) {
      array.push(curr.val);
      curr = curr.next;
  }
    
  let i = array.length - 1;
  curr = head;
    
  while(curr) {
      curr.val = array[i];
      i--;
      curr = curr.next;
  }
 return head
};

//Solution
let reverseList = function(head) {
    let prev = null;
    let curr = head;
    while (curr != null) {
        let nextTemp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = nextTemp;
    }
    return prev;
}