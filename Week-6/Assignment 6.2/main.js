function spiralOrder(arr,rows,col){
    let top =0 , left =0 , bottom = rows -1 , right = col-1;
    let dir = 1;
    let spiralArray=[];

    while(top <= bottom && left <= right){
        if(dir == 1){
            for(let i=left;i<=right;++i){
                spiralArray.push(arr[top][i]);
            }
            ++top;
            dir = 2;
        }
        else if(dir == 2){
            for(let i = top;i<= bottom ;++i){
                spiralArray.push(arr[i][right]);
            }
            --right;
            dir=3;
        }
        else if(dir == 3){
            for(let i=right; i >= left ; --i){
                spiralArray.push(arr[bottom][i]);
            }

            --bottom;
            dir=4;
        }
        else if(dir == 4){
            for(let i=bottom;i>=top;--i){
                spiralArray.push(arr[i][left]);
            }
            ++left;
            dir=1;
        }
    }

    return(spiralArray);
}

var items = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

let result = spiralOrder(items,3,3);

console.log(result);