function createQueue() {
  let stack1 = [];
  let stack2 = [];

  // Pushing all the elements into stack1 by using push function - 
  function push(x) {
    stack1.push(x);
  }

  // Pushing all the elements from stack 1 into stack 2 and reversing the order and then popping from stack 2 - 
  function pop() {
    if (stack2.length === 0) {
      if (stack1.length === 0) {
        return "Queue is empty";
      }
      while (stack1.length > 0) {
        let element = stack1.pop();
        stack2.push(element);
      }
    }
    return stack2.pop();
  }
  return{push , pop , stack2};
}

let queue = new createQueue();
queue.push("a");
queue.push("b");
queue.push("c");
queue.pop();
console.log(queue.stack2);
