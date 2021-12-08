
let nodes = new vis.DataSet([
]);

// create an array with edges
let edges = new vis.DataSet([
]);

// create a network
let container = document.getElementById("mynetwork");
let data = {
  nodes,
  edges
};
var options = {};
var network = new vis.Network(container, data, options);

const edgeFactory = (from, to) => {
  return { from, to }
}

const nodeFactory = (id, label) => {
  return {
    id,
    label
  }
}

const addNode = () => {
  const nodeId = document.getElementById('node-id').value;
  const nodeLabel = document.getElementById('node-label').value

  

  const newNode = nodeFactory(Number(nodeId), nodeLabel);

  nodes.add(newNode);

}
function updateNode() {

}

function removeNode() {

}

const addEdge = () => {
  const edgeFrom = document.getElementById('edge-from').value
  const edgeTo = document.getElementById('edge-to').value

  const newEdge = edgeFactory(edgeFrom, edgeTo);
  edges.add(newEdge)
}

function updateEdge() {

}

function removeEdge() {

}