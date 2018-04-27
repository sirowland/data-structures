var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  newTree.children = [];
  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

//adds a child as a node to the tree
treeMethods.addChild = function(value) {

  var newNode = {
    value: value,
    children: []
  };
  _.extend(newNode, treeMethods);

  this.children.push(newNode);
};

treeMethods.contains = function(target) {

  if (this.value === target) {
    return true;
  }

  for (var i = 0; i < this.children.length; i++) {
    if (this.children[i].contains(target)) {
      return true;
    }
  }

  return false;
};


/*
 * Complexity: What is the time complexity of the above functions?
  addChild: O(1)
  contains: O(n)
 */
