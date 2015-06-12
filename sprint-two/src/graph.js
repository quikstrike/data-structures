

var Graph = function(){
  this.nodeList = {}


};

var _Node = function(value) {
  var newNode = {}
  newNode.edges = []
  newNode.val = value
  return newNode
}

Graph.prototype.addNode = function(node){
  this.nodeList[node] = _Node(node)

};

Graph.prototype.contains = function(node){
  if(this.nodeList[node] === undefined){
    return false
  }

  return (this.nodeList[node].val === node)
};

Graph.prototype.removeNode = function(node){
  if (this.contains(node)) {
    delete this.nodeList[node]
  }
};

Graph.prototype.hasEdge = function(fromNode, toNode){
  return (this.nodeList[fromNode].edges.indexOf(toNode) != -1 && this.nodeList[toNode].edges.indexOf(fromNode) != -1)

};

Graph.prototype.addEdge = function(fromNode, toNode){
  this.nodeList[fromNode].edges.push(toNode)
  this.nodeList[toNode].edges.push(fromNode)
};

Graph.prototype.removeEdge = function(fromNode, toNode){

  this.nodeList[fromNode].edges.pop(toNode)
  this.nodeList[toNode].edges.pop(fromNode)

};

Graph.prototype.forEachNode = function(cb){
  _.each(this.nodeList, function(n){
    cb(n.val);
  })
};

/*
 * Complexity: What is the time complexity of the above functions?
 */



