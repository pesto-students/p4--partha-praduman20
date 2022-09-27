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

function inorder(root, result = []){
    if(root === null)
        return result;
    else{
        inorder(root.left, result);
        result.push(root.data);
        inorder(root.right, result);
    }
    return result;
}

function isSorted(result){
    for(let i=0; i<result.length-1; i++){
        if(result[i] > result[i+1])
            return false;
    }
    return true;
}

function isValidBST(root){
    // find the inorder of BST if its sorted then its valid BST
    let inord = inorder(root);
    return isSorted(inord);
}

console.log(isValidBST(sampleBST.root));
sampleBST.root.right.data = -1;
console.log(isValidBST(sampleBST.root));


