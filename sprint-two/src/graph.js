// Instantiate a new graph
var Graph = function() {
  this.storage = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  var newNode = {
      value: node,
      edges: []
  }

  this.storage[node] = newNode;
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  if (this.storage[node] === undefined) {
    return false;
  } else if (this.storage[node].value === node) {
    return true;
  }
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  var nodeToRemove = this.storage[node];
  if (nodeToRemove.value === node && nodeToRemove.edges.length === 0) {
    delete this.storage[node];
  } else {
    for (var i = 0; i < nodeToRemove.edges.length; i++) {
      this.removeEdge(nodeToRemove.value, nodeToRemove.edges[i].value);
      delete this.storage[node];
    }
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  var edges = this.storage[fromNode].edges;
  var deletedVal = fromNode;
  
  return _.some(edges, function(node) {
    return node.value === toNode;
  });
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.storage[fromNode].edges.push(this.storage[toNode]);
  this.storage[toNode].edges.push(this.storage[fromNode]);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  this.storage[fromNode].edges = _.reject(this.storage[fromNode].edges, function(node) {
    return node.value === toNode;
  });
  this.storage[toNode].edges = _.reject(this.storage[toNode].edges, function(node) {
    return node.value === fromNode;
  });
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  console.log(this.storage);
  for (var node in this.storage) {
    console.log(this.storage);
    console.log(node);
    cb(this.storage[node].value);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


