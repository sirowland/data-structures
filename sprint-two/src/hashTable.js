

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  var first = [];
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  
  if (this._storage.get(index) === undefined) {
    this._storage.set(index,[[k, v]]);
  } else {
    var array = this._storage.get(index);

    for (var i = 0; i < array.length; i++) {
      var key = array[i][0];
      if (key === k) {
        array[i][1] = v;
      } else {
        array.push([k,v]);
      }
    }
    this._storage.set(index, array);
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var array = this._storage.get(index);

  if (array === undefined) {
    return;
  } else {
    for (var i = 0; i < array.length; i++) {
      var key = array[i][0];
      var value = array[i][1];
      if (key === k) {
        return value;
      }
    }
  }
  
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var array = this._storage.get(index);
  
  if (array.length === 1) {
    this._storage.set(index, undefined);
  } else {
    array = _.reject(array, function(tuple) {
      if (tuple[0] === k) {
        return true;
      }
    });
    this._storage.set(index, array);
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


