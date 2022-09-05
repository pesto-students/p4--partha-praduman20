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

// function to rotate the linked list by k nodes - 

function rotateByKNodes(head , k){
    let tail = head;
    let count = 1;
    while(tail.next){
        count++;
        tail=tail.next;
    }
    k %= count;
    if(k === 0){
        return head;
    }
    tail.next=head;
    let steps = count - k + 1;
    let newTail = tail;
    while(steps--){
        newTail=newTail.next;
    }
    let newHead = newTail.next;
    newTail.next = null; 
    return newHead;
}

let head = createSSL([2, 4, 7, 8, 9]);
traverseSSL(head);
console.log("After rotation");
let head2 = rotateByKNodes(head , 3);
traverseSSL(head2);