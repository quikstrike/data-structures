var Stack = function(){

  var someInstance = {};



  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value){
    someInstance[someInstance.size()] = value
    // console.log(someInstance.size())
    console.log(someInstance)
    // someInstance.size.len ++
  };

  someInstance.pop = function(){
    var popItem = someInstance[someInstance.size()-1]
    delete someInstance[someInstance.size() - 1]
    return popItem

  };

  someInstance.size = function(){
    // debugger;
    var len = 0
    for (var key in someInstance) {
      if (typeof someInstance[key] !== "function") {
        len++
      }
    }
    return len
  };

  return someInstance;
};
