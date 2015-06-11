var Stack = function() {
  var newStack = {}
  newStack.len = 0
  newStack = _.extend(newStack, Stack.stackMethods)
  return newStack

};

Stack.stackMethods = {};

Stack.stackMethods.size = function(){
  return this.len
}

Stack.stackMethods.push = function(value) {
  this[this.size()] = value
  this.len++
}

Stack.stackMethods.pop = function() {
  if (this[this.len - 1] !== undefined) {
    var removed;
    removed = this[this.len - 1]
    delete this[this.len-1]
    this.len--
    return removed
  }
}
