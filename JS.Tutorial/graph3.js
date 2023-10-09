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
myGraph.addVertex('F');
myGraph.addVertex('G');
myGraph.addEdge('A', 'B');
myGraph.addEdge('A', 'C');
myGraph.addEdge('A', 'E');
myGraph.addEdge('B', 'E');
myGraph.addEdge('B', 'D');
myGraph.addEdge('C', 'F');
myGraph.addEdge('C', 'G');
myGraph.addEdge('D', 'E');

myGraph.showConnections();
console.log(myGraph)               