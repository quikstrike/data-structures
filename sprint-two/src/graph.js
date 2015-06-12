

var Graph = function(){
  this.nodes = {}
  this.lastNodeName = 0

};
var _Node = function(val) {
  this.value = val
  this.edges = []
  this.name = Graph.prototype.namingFunc()
}

Graph.prototype.namingFunc = function() {
  var nodeName = this.lastNodeName
  this.lastNodeName++
  return nodeName

}
Graph.prototype.addNode = function(node){
  //just adds it to list of nodes
  this.nodes[_Node(node)]
  console.log(_Node[node])

};

Graph.prototype.contains = function(node){
  var foundStatus = false
  _.each(this.nodes, function(item){
    if (item === node) {
      foundStatus = true
    }
  })
  return foundStatus
};

Graph.prototype.removeNode = function(node){
  this.nodes.pop(node)
};

Graph.prototype.hasEdge = function(fromNode, toNode){

};

Graph.prototype.addEdge = function(fromNode, toNode){
};

Graph.prototype.removeEdge = function(fromNode, toNode){
};

Graph.prototype.forEachNode = function(cb){
};

/*
 * Complexity: What is the time complexity of the above functions?
 */



