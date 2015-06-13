var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){ //k is the key, v is the value. they are both stored in this._storage[i]
  var i = getIndexBelowMaxForKey(k, this._limit);
  var oldBucket = this._storage.get(i) //null or []
  if (oldBucket === null || oldBucket === undefined) {
    var newBucket = []
    newBucket.push([k,v])
    this._storage.set(i, newBucket)

  }
  else {
    oldBucket.push([k,v])
    this._storage.set(i,oldBucket)

  }

};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit)
  var bucket = this._storage.get(i) //bucket [[k,v],[k1,v1]]
  if(bucket.length > 0){
    for (var j = 0; j < bucket.length; j++) {

        //debugger
      if (bucket[j][0] === k) {

        return bucket[j][1]
      }
    }
  }else{
      return null
  }

};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i)
  for (var j = 0; j < bucket.length; j++) {
    if (bucket[j][0] === k) {

      bucket.pop(bucket[j])

    }
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
