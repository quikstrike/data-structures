var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){ //k is the key, v is the value. they are both stored in this._storage[i]
  var i = getIndexBelowMaxForKey(k, this._limit);
  //this._storage[i] = k
  // console.log(k)
    this._storage.set(i, v)
};

HashTable.prototype.retrieve = function(k){ //searches up the "first name", retrieves the last name
  var i = getIndexBelowMaxForKey(k, this._limit);
  // console.log(i)
  // console.log(this._storage)
  // console.log(this._storage.get(i))

  return this._storage.get(i)
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);

  this._storage.set(i,null)
  // console.log(this)

};



/*
 * Complexity: What is the time complexity of the above functions?
 */
