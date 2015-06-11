var Queue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  var dequeueCounter = 0;
  var enqueueCounter = 0;

  someInstance.enqueue = function(value){
    storage[enqueueCounter] = value
    enqueueCounter++

  };

  someInstance.dequeue = function(){

    if (storage[dequeueCounter] !== undefined){
        var removedValue = storage[dequeueCounter]
        delete storage[dequeueCounter]
        dequeueCounter++
        return removedValue
      }

  };

  someInstance.size = function(){
    // debugger;
    // console.log(someInstance)
    // console.log(someInstance["enqueueCounter"] - someInstance["dequeueCounter"])
    return enqueueCounter - dequeueCounter
  };


  return someInstance;
};
