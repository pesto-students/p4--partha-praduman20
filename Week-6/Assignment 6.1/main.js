function maxSumContiguousSubarray(arr){
    let sum=0;
    let maxSum=Number.MIN_SAFE_INTEGER;
    for(let i=0;i<arr.length;i++){
        sum += arr[i];
        if(sum > maxSum){
            maxSum=sum;
        }
        if(sum<0){
            sum=0;
        }
    }
    return maxSum;
}

console.log(maxSumContiguousSubarray( [-2, 1, -3, 4, -1, 2, 1, -5, 4]));