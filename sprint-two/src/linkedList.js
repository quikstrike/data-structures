var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    if (list.head === null) { //assuming empty list
      list.head = Node(value)
      list.tail = list.head
    }
    else{ //1 or more exisiting items
      list.tail.next = Node(value)
      list.tail = Node(value)
    }

  };

  list.removeHead = function(){
  //delete list.head
  //set list.head to be previous list.head.next
    var value = list.head.value
    var storedNode = list.head
    list.head = list.head.next
    delete storedNode
    return value

  };

  list.contains = function(target){
    var doesContain = false
    var previousNode = list.head
    var checkedLast = false


    while (!checkedLast && !doesContain ){
      if(previousNode.next === null){
        checkedLast = true
      }

      if (previousNode.value !== target){
        previousNode = previousNode.next
      } else {
        doesContain = true
      }

    }
    return doesContain
  };

  return list;
};

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
