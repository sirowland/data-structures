var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    
    var newNode = new Node(value);
    //base case: head and tail need to be assigned
    if(list.head === null){
        list.head = newNode;
        list.tail = newNode;
    } else {
        list.tail.next = newNode;
        list.tail = newNode;
      // var currentNode = list.tail;
      // currentNode.next = newNode;
      // list.tail = newNode;
    }
  };

  list.removeHead = function() {
    var toDelete = list.head;
    list.head = list.head.next;
    
    // delete list[toDelete];
    delete toDelete;
    return toDelete.value;
    
  };

  list.contains = function(target) {
    var isFound = false;
    var currentNode = list.head;
    
    while(isFound === false){
      if(currentNode === null) {
        return isFound;
      } else if (currentNode.value === target){
        isFound = true;
      } else {
        currentNode = currentNode.next;
      }
    }
  
  return isFound;

  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
addToTail: O(1)
removeHead: O(1)
contains: O(n)
 */
