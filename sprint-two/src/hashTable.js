

var HashTable = function() {
  this._limit = 8;
  this._count = 0;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  
  if ( !bucket ) {
    this._storage.set(index,[[k, v]]);
    this._count++;
  } else {

    for (var i = 0; i < bucket.length; i++) {
      var tuple = bucket[i];

      if (tuple[0] === k) {
        tuple[1] = v;
      } else {
        bucket.push([k,v]);
        this._count++;
      }
    }
  }
  
  if (this._count / this._limit > .75) {
    this._limit = this._limit * 2;
    this.rehash();
  }
  
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);

  if (!bucket) {
    return undefined;
  } else {

    for (var i = 0; i < bucket.length; i++) {
      var tuple = bucket[i];

      if (tuple[0] === k) {
        return tuple[1];
      }
    }
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  
  if (!bucket) {
    return undefined;
  } else {
    var that = this;
    bucket = _.reject(bucket, function(tuple) {
      if (tuple[0] === k) {
        that._count--;
        return true;
      }
    });
    
    this._storage.set(index, bucket);
  }

  if (this._count / this._limit < .25) {
    this._limit = this._limit / 2;
    this.rehash();
  }
};

HashTable.prototype.rehash = function() {
  var oldHash = this._storage;

  var tupleArray = [];
  oldHash.each(function (bucket) {
    _.each(bucket, function (tuple) {
      tupleArray.push(tuple);
    })
  });

  this._storage = LimitedArray(this._limit);
  this._count = 0;
  
  for (var i = 0; i < tupleArray.length; i++) {
    var tuple = tupleArray[i];
    this.insert(tuple[0], tuple[1]);
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
insert: O(1)
retrieve: O(1)
remove: O(1)
 */


