function nextGreaterElement(arr)
{
	let s = [];
	let arr2 = [];
	s.push(arr[0])

	for(let i =1 ;i<arr.length;i++){
		if(s.length == 0){
			s.push(arr[i]);
			continue;
		}

		while(s.length == 0==false && s[s.length-1] < arr[i]){
			arr2.push(arr[i]);
			s.pop();
		}

		s.push(arr[i]);
	}

	while(s.length != 0){
		arr2.push(-1);
		s.pop();
	}

	return arr2;
}

var arr = [1 ,3, 2, 4];
var arr3 = [6 ,8 ,0 ,1 ,3];
console.log(nextGreaterElement(arr));
console.log(nextGreaterElement(arr3));