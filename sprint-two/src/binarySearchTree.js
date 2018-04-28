var BinarySearchTree = function(value) {
  this.value = value;
  this.left = null;
  this.right = null;
  // this.count = 0;
  // this.values = [];
};

BinarySearchTree.prototype.insert = function(value) {
  var newTree = new BinarySearchTree(value);

  if (value < this.value && this.left === null) {
    this.left = newTree;
  } else if (value > this.value && this.right === null) {
    this.right = newTree;
  } else if (value < this.value) {
    this.left.insert(value);
  } else {
    this.right.insert(value);
  }

  // this.values.push(value);
  // this.count++;
  // checkIfNeedtoRebalance();
}

// BinarySearchTree.prototype.checkIfNeedtoRebalance = function() {

//   if (this.count > thatFormula) {
//     //run all those steps to rebalance
//   }
  
  
// }

// BinarySearchTree.prototype.rebalance  = function() {
//   var values = this.values  
//   // sort values
//   // pick a middle point
//   // get an array of left over values
//   // initialize new tree (middlePoint)
//   // run a bunch of inserts

//   return function () {

//   }
// }

BinarySearchTree.prototype.contains = function(value) {
  if (this.value === value) {
    return true;
  } else if (value < this.value && this.left === null) {
    return false;
  } else if (value > this.value && this.right === null) {
    return false;
  } else if (value < this.value) {
    return this.left.contains(value);
  } else {
    return this.right.contains(value);
  }
}

BinarySearchTree.prototype.depthFirstLog = function(cb) {
  cb(this.value);
    
  if (this.left !== null) {
    this.left.depthFirstLog(cb);
  }

  if (this.right !== null) {
    this.right.depthFirstLog(cb);
  }
}

/*
 * Complexity: What is the time complexity of the above functions?
insert: O(log n)
contains: O(log n)
depthFirstLog: O(n)
 */
