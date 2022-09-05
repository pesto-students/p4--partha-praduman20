class node{
    constructor(value){
        this.value=value;
        this.next=null;
    }
};

// function to create and traverse the linked list - 

function createSSL(arr){
    let head = new node(arr[0]);
    let curr = head;
    for(let i=1;i<arr.length;i++){
        curr.next=new node(arr[i]);
        curr=curr.next;
    }
    return head;
};

function traverseSSL(head){
    let curr = head;
    while(curr !== null){
        console.log(curr.value);
        curr=curr.next;
    }
}

// function to create a loop in the linked list - 

function createLoop(head , k){
    let curr = head , pivot = head;
    while(curr.next != null){
        curr = curr.next;
    }
    while(--k){
        pivot = pivot.next;
    }
    curr.next = pivot;
    return head;
}

function loopTraversal(head){
    let k =8;
    let curr = head;
    while(--k && curr){
        console.log(curr.value);
        curr = curr.next;
    }
}

// function to detect the loop in the linked list - 

function detectLoop(head){
    let slow = head , fast = head;
    while(fast && fast.next){
        slow = slow.next;
        fast = fast.next.next;
        if(slow === fast){
            slow = head;
            let count = 1;
            while(slow != fast){
                count++
                slow = slow.next;
                fast = fast.next;
            }
            return count;
        }
    }
    return null;
}

let head = createSSL([1,8,3,4]);
traverseSSL(head);
console.log("The same linked list with a loop - ");
let head2 = createLoop(head , 2);
loopTraversal(head2);
console.log("The loop is at position - ");
console.log(detectLoop(head2));
