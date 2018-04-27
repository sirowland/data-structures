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
  var bool = false;

  function search(nodeList) {
    for (var i = 0; i < nodeList.length; i++) {
      if (nodeList[i].value === target) {
        bool = true;
      } else if (nodeList[i].value !== target && nodeList[i].children.length > 0) {
        search(nodeList[i].children);
      }
    }
    return bool;
  }
  
  if (this.value === target) {
    bool = true; 
  } else {
    if (this.children.length > 0) {
      return search(this.children);
    }
  }

 return bool;
};


/*
 * Complexity: What is the time complexity of the above functions?
  addChild: O(1)
  contains: O(n)
 */
