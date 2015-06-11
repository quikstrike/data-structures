var Stack = function() {
  var newStack = {}
  newStack.len = 0
  newStack.storage = {}
  newStack = _.extend(newStack, stackMethods)
  return newStack

};

var stackMethods = {};

stackMethods.size = function(){
  return this.len
}

stackMethods.push = function(value) {
  this.storage[this.len] = value
  this.len++
}

stackMethods.pop = function() {
  if (this.storage[this.len - 1] !== undefined) {
    var removed;
    removed = this.storage[this.len - 1]
    delete this.storage[this.len-1]
    this.len--
    return removed
  }
}
