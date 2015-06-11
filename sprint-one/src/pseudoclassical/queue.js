var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.len = 0
  this.dequeueLen = 0
  this.storage = {}
};


Queue.prototype.size = function(){
  return this.len - this.dequeueLen
}

Queue.prototype.enqueue = function(value) {
  this.storage[this.len] = value
  this.len++

}

Queue.prototype.dequeue = function(){
  if(this.storage[this.dequeueLen] !== undefined) {
    var value;
    value = this.storage[this.dequeueLen]
    delete this.storage[this.dequeueLen]
    this.dequeueLen++
    return value
  }
}

