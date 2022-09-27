function townJudge(edges, n){
    
    let degree = Array(n+1).fill(0);

    for(let i=0; i<edges.length; i++){
        degree[edges[i][0]]--;
        degree[edges[i][1]]++;
    }
    let judge = -1;
    
    degree.shift();
   
    for(let i=0; i<degree.length; i++){
        if(n-1 === degree[i])
            judge = i+1;
    }
    return judge;
}

let trust1 = [[1,3], [2,3]];
let trust2 = [[1,3], [2,3], [3,1]];
let trust3 = [[1,2]];

console.log(townJudge(trust1, 3));
console.log(townJudge(trust2, 4));
console.log(townJudge(trust3, 2));
