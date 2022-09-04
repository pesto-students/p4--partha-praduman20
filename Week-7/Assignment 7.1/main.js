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

// function to reverse the linked list - 

function reverseLinkedList(head){
    let prev = null , curr = head , after = null;
    while(curr.next !== null){
        after = curr.next;
        curr.next = prev;
        prev = curr;
        curr = after;
    }
    curr.next = prev;
    head = curr;
    return head;
}

let head = createSSL([1,2,3,4,5,6]);

traverseSSL(head);
console.log("The reverse linked list will be - ");
let head2 = reverseLinkedList(head);
traverseSSL(head2);