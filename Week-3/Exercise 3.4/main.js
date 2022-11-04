function createStack() {
    let items=[];

    function push(item){
        items.push(item);
    };

    function pop(){
        items.pop();
    };

    return{pop , push };
}

const stack = new createStack();
stack.push(10);
stack.push(5);
stack.pop();
console.log(stack.items);// => undefined

// The ouput is undefined because we have returned pop and push methods so they are in global scope and
// are accessible globally .But the items array is in the scope of function createStack so it is locally
// scoped to that function and cannot be accessed directly.