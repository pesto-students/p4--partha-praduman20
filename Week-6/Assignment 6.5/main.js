function pairDifference(arr , n){
    let randomSet = new Set();
    for(let a of arr){
        randomSet.add(a);
    }
    for(let i =0 ; i<arr.length ;i++){
        let num2 = n + arr[i];
        let num3 = n - arr[i];
        if(randomSet.has(num2) || randomSet.has(num3)){
            return 1;
        }
    }
    return 0;
}

console.log(pairDifference([5, 10, 3, 2, 50, 80],78));
console.log(pairDifference([-10, 20] , 30));
console.log(pairDifference([-10, 20] , 21));