var BinarySearchTree = function(value) {
  this.value = value;
  this.left = null;
  this.right = null;
};

BinarySearchTree.prototype.insert = function(value) {
  var newTree = new BinarySearchTree(value);

  if (value < this.value && this.left === null) {
    this.left = newTree;
  } else if (value > this.value && this.right === null) {
    this.right = newTree;
  } else if (value < this.value) {
    var searchTree = this.left;
    searchTree.insert(value);
  } else {
    var searchTree = this.right;
    searchTree.insert(value);
  }
}

BinarySearchTree.prototype.contains = function(value) {
  if (this.value === value) {
    return true;
  } else if (value < this.value && this.left === null) {
    return false;
  } else if (value > this.value && this.right === null) {
    return false;
  } else if (value < this.value) {
    var searchTree = this.left
    return searchTree.contains(value);
  } else {
    var searchTree = this.right
    return searchTree.contains(value);
  }
}

BinarySearchTree.prototype.depthFirstLog = function(cb) {
  cb(this.value);
    
  if (this.left !== null) {
    var searchTree = this.left;
    searchTree.depthFirstLog(cb);
  }

  if (this.right !== null) {
    var searchTree = this.right;
    searchTree.depthFirstLog(cb);
  }
}

/*
 * Complexity: What is the time complexity of the above functions?
insert: O(log n)
contains: O(log n)
depthFirstLog: O(n)
 */
