var Queue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance["dequeueCounter"] = 0;
  someInstance["enqueueCounter"] = 0;

  someInstance.enqueue = function(value){
    someInstance[someInstance["enqueueCounter"]] = value
    someInstance["enqueueCounter"] = someInstance["enqueueCounter"] + 1
    console.log(someInstance)

  };

  someInstance.dequeue = function(){

    if (someInstance[someInstance["dequeueCounter"]] !== undefined){
        var removedValue = someInstance[someInstance["dequeueCounter"]]
        delete someInstance[someInstance["dequeueCounter"]]
        someInstance["dequeueCounter"] = someInstance["dequeueCounter"] + 1
        return removedValue
      }

  };

  someInstance.size = function(){
    // debugger;
    // console.log(someInstance)
    // console.log(someInstance["enqueueCounter"] - someInstance["dequeueCounter"])
    return someInstance["enqueueCounter"] - someInstance["dequeueCounter"]
  };


  return someInstance;
};
