var Queue = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newStack = {}
  newStack.len = 0
  newStack.dequeueLen = 0
  newStack.storage = {}
  newStack = _.extend(newStack, queueMethods)
  return newStack
};

var queueMethods = {};

queueMethods.size = function(){
  return this.len - this.dequeueLen
}

queueMethods.enqueue = function(string){
  this.storage[this.len] = string;
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



