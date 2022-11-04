class Graph{
    constructor(n){
        // create n*n adjacency matrix with no edges
        this.adj_matrix = [];
        for(let i=0; i<n; i++){
            this.adj_matrix.push([]);
            for(let j=0; j<n; j++){
                this.adj_matrix[i].push(0);
            }
        }
    }
    createGraph(arr){
        // for every edge in arr we modify the adjacency matrix
        for(let i=0; i<arr.length; i++){
            let u = arr[i][0], v = arr[i][1];
            this.adj_matrix[u][v] = 1;
            this.adj_matrix[v][u] = 1;
        }
    }
    createDirectedGraph(arr){
        // creating directed graph [u,v] indicate edge from u to v, 
        // but v to u may or may not exist
        for(let i=0; i<arr.length; i++){
            let u = arr[i][0], v = arr[i][1];
            this.adj_matrix[u][v] = 1;
        }
    }
    dfs(source, visited, path){
        let aux = [];
        visited.add(source);
        path.push(source)
        for(let i=0; i<this.adj_matrix.length; i++){
            if(!visited.has(i) && this.adj_matrix[source][i] == 1){
                aux.push(i);
            }
        }
        console.log(path);
        while(aux.length !=0 ){
            this.dfs(aux[aux.length-1], visited, path);
            aux.pop();
        }
    }
}

let sampleGraph = new Graph(6);
let edges = [[0,1],[3,5],[5,4],[4,3],[2,5]]

// created graph with given edges
sampleGraph.createGraph(edges);

// we want to find path from u to v
function isPath(adj_matrix, u, v, visited){
    if(adj_matrix[u][v] == 1)
        return true;
    
    let traverse = [];
    visited[u] = true;
    // we will push all the neighbours of u to a traverse array
    for(let i=0; i<adj_matrix.length; i++){
        if(visited[i] === false && adj_matrix[u][i] === 1)
            traverse.push(i);
    }
    
    // for each element in traverse array we try to find path from there to v
    while(traverse.length != 0){
        let result = isPath(adj_matrix, traverse[0], v, visited);
        if(result === true)
            return result
        traverse.shift();
    }
    return false;
}

let visited = [false, false, false, false, false, false,]
console.log(isPath(sampleGraph.adj_matrix, 5, 1, visited));