var Queue = function() {
  var newQueue = Object.create(queueMethods)
  newQueue.len = 0
  newQueue.dequeueLen = 0
  newQueue.storage = {}
  return newQueue
};

var queueMethods = {};


queueMethods.size = function(){
  return this.len - this.dequeueLen
}

queueMethods.enqueue = function(value){
  this.storage[this.len] = value
  this.len++
}

queueMethods.dequeue = function(){
    if(this.storage[this.dequeueLen] !== undefined){
      var value;
      value = this.storage[this.dequeueLen];
      delete this.storage[this.dequeueLen];
      this.dequeueLen++
      return value
  }
}
