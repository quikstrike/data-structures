var Stack = function() {
  var newStack = Object.create(stackMethods)
  newStack.len = 0
  newStack.storage = {}
  return newStack
};

var stackMethods = {};

stackMethods.size = function(){
  return this.len

}

stackMethods.push = function(value){
  this.storage[this.len] = value
  this.len++
}

stackMethods.pop = function() {
  if (this.storage[this.len - 1] !== undefined) {
    var returnValue;
    returnValue = this.storage[this.len-1]
    delete this.storage[this.len-1]
    this.len--
    return returnValue
  }
}
