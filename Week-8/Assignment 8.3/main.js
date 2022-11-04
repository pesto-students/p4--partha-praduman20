class Node{
    constructor(value){
        this.data = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree{
    constructor(){
        this.root = null;
    }

    insert(value){
        let newNode = new Node(value);
        // if no nodes in tree then newNode will be root 
        if(this.root == null){
            this.root = newNode;
            return this;
        }
        
        let temp = this.root;
        while(temp){
            if(value < temp.data){
                if(temp.left == null){
                    temp.left = newNode;
                    return this;
                }
                else{
                    temp = temp.left;
                }
            }
            else{
                if(temp.right == null){
                    temp.right = newNode;
                    return this;
                }
                else{
                    temp = temp.right;
                }
            }
        }
    }
    // Traversals 
    inorder(start = this.root){
        if(start === null)
            return;
        else{
            // left parent right
            this.inorder(start.left);
            process.stdout.write(`${start.data} `);
            this.inorder(start.right);
        }
    }

    preorder(start = this.root){
        if(start === null){
            return;
        }
        else{
            // parent left right
            process.stdout.write(`${start.data} `);
            this.preorder(start.left);
            this.preorder(start.right);
        }
    }
    
    postorder(start = this.root){
        if(start === null){
            return;
        }
        else{
            // left right parent 
            this.postorder(start.left);
            this.postorder(start.right);
            process.stdout.write(`${start.data} `);
        }
    }
}

let sampleBST = new BinarySearchTree();
sampleBST.insert(5);
sampleBST.insert(8);
sampleBST.insert(2);
sampleBST.insert(1);
sampleBST.insert(3);
sampleBST.insert(12);
sampleBST.insert(20);

function levelOrder(root){
    let q = [];
    let temp = root;

    // add current node to the queue 
    q.push(temp);
    while(q.length > 0){

        // If current node has left and right elements then add them to queue
        if(temp.left != null){
            q.push(temp.left);
        }
        if(temp.right != null){
            q.push(temp.right);
        }
        // pop the current element and mark it as visited
        process.stdout.write(`${temp.data} `);
        q.shift();
        // new current element will be first element from queue
        temp = q[0];
    }
}

levelOrder(sampleBST.root);


