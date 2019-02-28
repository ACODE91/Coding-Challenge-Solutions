const copyRandomList = function (head) {
  if (head == null) {
    return null;
  }

  // Creating a new weaved list of original and copied nodes.
  let weaveList = head;

  while (weaveList != null) {
    // Cloned node
    const newNode = new Node(weaveList.val);

    // Inserting the cloned node just next to the original node.
    // If A->B->C is the original linked list,
    // Linked list after weaving cloned nodes would be A->A'->B->B'->C->C'
    newNode.next = weaveList.next;
    weaveList.next = newNode;
    weaveList = newNode.next;
  }

  weaveList = head;

  // Now link the random pointers of the new nodes created.
  // Iterate the newly created list and use the original nodes' random pointers,
  // to assign references to random pointers for cloned nodes.
  while (weaveList != null) {
    weaveList.next.random = (weaveList.random != null) ? weaveList.random.next : null;
    weaveList = weaveList.next.next;
  }

  // Unweave the linked list to get back the original linked list and the cloned list.
  // i.e. A->A'->B->B'->C->C' would be broken to A->B->C and A'->B'->C'
  let unweavedList = head; // A->B->C
  let weavedList = head.next; // A'->B'->C'
  const result = head.next;

  while (unweavedList != null) {
    unweavedList.next = unweavedList.next.next;
    weavedList.next = (weavedList.next != null) ? weavedList.next.next : null;
    unweavedList = unweavedList.next;
    weavedList = weavedList.next;
  }

  return result;
};
