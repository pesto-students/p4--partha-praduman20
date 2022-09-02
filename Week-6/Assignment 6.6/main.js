function threeSum(arr , target){
    if(arr.length < 3){
        return 0;
    }

    arr.sort(function(a,b){
        return a+b;
    })

    let i =0 ,min_diff = Number.MAX_VALUE;
    let sum;

    while(i<arr.length-2){
        let left = i+1;
        let right = arr.length-1;

        while(right > left){
            let temp = arr[i] + arr[left] + arr[right];
            let diff = Math.abs(temp-target);

            if(diff == 0){
                return target;
            }

            if(diff < min_diff){
                min_diff = diff;
                sum = temp;
            }

            if(temp < target){
                left++
            }
            else{
                right--;
            }
        }
        i++;
    }
    return sum;
}

console.log(threeSum([-1, 2, 1, -4] , 1));
console.log(threeSum([0,0,0] , 1));
