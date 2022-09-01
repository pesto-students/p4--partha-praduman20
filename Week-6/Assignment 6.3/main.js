function sortArray(arr){
    let low=0;
    let high=arr.length-1;
    let mid=0;
    let temp;

    while(mid <= high){
        if(arr[mid] == 0){
            temp = arr[mid];
            arr[mid] = arr[low];
            arr[low] = temp;
            low++;
            mid++;
        }
        else if(arr[mid] == 1){
            mid++;
        }
        else{
            temp = arr[high];
            arr[high] = arr[mid];
            arr[mid] =temp;
            high--;
        }
    }
    return(arr);
} 

let answer = sortArray([0,2,1,2,0]);
console.log(answer);
