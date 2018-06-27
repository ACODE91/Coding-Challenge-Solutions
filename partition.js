// Given a linked list and a value x, partition it such that all nodes less than x come before nodes greater than or equal to x.

// You should preserve the original relative order of the nodes in each of the two partitions.

// Example:

// Input: head = 1->4->3->2->5->2, x = 3
// Output: 1->2->2->4->3->5

// var partition = function(head, x) {
//     let target = findTarget(head, x);
    
//     while(findLesserNode(head, x) !== null) {
//         let foundNode = findLesserNode(head, x);
//         replace(head, foundNode);
//     }
    
//     return head;
// };

var findTarget = function(head, target, foundTarget = false) {
    if(head.val === target) {
        foundTarget = true;
    }
    
    if(head.val !== target && !foundTarget) {
        findTarget(head, target);
    }
    
    if(foundTarget) {
        return head;
    }    
}

var findLesserNode = function(head, x) {
    if(head.next.val < x) {
        return head.next
    } else if(head.next.val > x) {
        findLesserNode(head.next, x);
    } else if(!head.next.val) {
        return null;
    }    
}

var replace = function(head, newNode) {
    if(head.val <= newNode.val) {
        newNode.next = head.next;
        head.next = newNode;
    } else if(newNode.val > head.val) {
        replace(head.next, newNode);
    } 
    
}