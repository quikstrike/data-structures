var BinarySearchTree = function(val){
  //debugger
  var bst = Object.create(bstPrototype)
  bst.value = val;
  bst.right = null
  bst.left = null
  return bst
};
var bstPrototype = {};

bstPrototype.insert = function(val){
if(val > this.value){
   if(this.right === null){
    this.right = new BinarySearchTree(val)
    }else{
    this.right.insert(val)
    }
}else{
  if(this.left === null){
    this.left = new BinarySearchTree(val)
  }else{
    this.left.insert(val)
  }

}
};

bstPrototype.contains = function(val){
  var status = false
    if(val === this.value){
      status = true
    }else if(this.left === null && this.right === null){
      status = false
    }else{
      if(val > this.value){
        status = this.right.contains(val)
      }else{
        status = this.left.contains(val)
      }
    }
  return status

};

bstPrototype.depthFirstLog = function(callback){
  callback(this.value)
  if(this.left !== null){
    this.left.depthFirstLog(callback)
  }
  if(this.right !== null){
    this.right.depthFirstLog(callback)
  }
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
