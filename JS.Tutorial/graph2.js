class Graph {
    constructor() {
        this.numberOfNodes = 0;
        this.adjacentList = {

        };
    }
    addVertex(node) {
    this.adjacentList[node] = [];
    this.numberOfNodes++;
    }
    addEdge(node1, node2) {
        // undirected Graph
        this.adjacentList[node1].push(node2);
        this.adjacentList[node2].push(node1);
        
    }
    showConnections() {      
       }
}

const myGraph = new Graph();
myGraph.addVertex('A');
myGraph.addVertex('B');
myGraph.addVertex('C');
myGraph.addVertex('D');
myGraph.addVertex('E');
myGraph.addEdge('A', 'B');
myGraph.addEdge('A', 'D');
myGraph.addEdge('B', 'D');
myGraph.addEdge('B', 'C');
myGraph.addEdge('C', 'E');
myGraph.addEdge('D', 'E');


myGraph.showConnections();
console.log(myGraph)               