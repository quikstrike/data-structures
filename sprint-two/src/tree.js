var Tree = function(value){
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me
  newTree = _.extend(newTree, treeMethods);
  return newTree;
};





var treeMethods = {};

treeMethods.addChild = function(value){
  //set value as target of node, add node as child of tree

  this.children.push(Tree(value))


};

treeMethods.contains = function(target){
  //check if input is value of target node or any descendant node
  var foundStatus = false
  if (target === this.value) {
      foundStatus = true
  }
  debugger
   //while target has not been found
    //rerun contains on each item in array. if found, function ends.
  var recurse = function(collection){
    _.each(collection, function(item) {
      if (item.value === target) {
        foundStatus = true
      }
      if (item.children !== null && !foundStatus) {
        return recurse(item.children)
      }
    })
  }
  // console.log(this.children)
  recurse(this.children)
  return foundStatus
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
