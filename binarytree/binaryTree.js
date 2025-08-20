// ****************************** BINARY TREE ***********************


// generic Tree : - in the tree data strucuture we store data in a tree like strucute in which has one root element and connected with we have more data and every root connect any amout of data every stored data called a node 

// binary tree only max store 2 nodes left or right it in this one parent store max two nodes as child


// branch : - connect with one node to another is know as branch 


// root node :  the first node or the parent of the tree is also knos as root node

// leaf node : - if any node dont contain any branc or child node in it then it called leaf node 

// sibling : - we have one node o it child node is a and b so these child node and siblings like brother and sister in real life because both as one parent o

// height : - distance between the root node from the last leaf node of the tree

// subtree : - all the right nodes of the tree is right subtree and all the left is left subtree


class Node{
    constructor(data){
        this.val = data;
        this.left = null;
        this.right = null;
    }
}

class BSTree{
    constructor(){
        this.root = null
    }

    isEmpty(){
        return this.root === null
    }

    makeTree(val){
        // make a new node
        let newNode = new Node(val)
        // if no root present then first make a root of the tree
        if(this.isEmpty()){
            // making root
             this.root = newNode
        }else{
            // insert the node
           this.insertNode(this.root , newNode) 
        }
    }

    insertNode(root , newNode){
        
        // if the val is bigger then the root value then it alsways store in the left side of the tree
         if(root.val > newNode.val){
            // if the left value is nul then store it
            if(root.left == null){
                root.left = newNode
            }else{
                // if the left valus is not null then going to its left node and store the node
                this.insertNode(root.left , newNode)
            }
         }else{

            // the bigger val is always stored in the right side of the root or node
            if(root.right === null){
                // if null then store
                root.right = newNode
            }else{
                // if not null going to its child node and again check 
                this.insertNode(root.right ,newNode)
            }
         }
    }

    searchNode(root , value){
        if(root == null) return false
        else if(root.val == value) return true
        else if(root.val > value) return this.searchNode(root.left , value)
        else return this.searchNode(root.right , value)
    }

    preOrder(root){
        if(root){
            console.log(root.val);
            this.preOrder(root.left)
            this.preOrder(root.right)
        }
    } 
    inOrder(root){
        if(root){
            this.preOrder(root.left)
            console.log(root.val);
            this.preOrder(root.right)
        }
    } 
     postOrder(root){
        if(root){
            this.preOrder(root.left)
            this.preOrder(root.right)
            console.log(root.val);
        }
    }
}

let bst = new BSTree()
bst.makeTree(20)
bst.makeTree(10)
bst.makeTree(30)
console.log(bst.searchNode(bst.root , 15));

console.log(bst);



// class Solution {
//     preorder(root) {
//         // code here
//         let result = []
//         this.preOrder(root , result)
//         return result
//     }
    
//     preOrder(root , result){
//         if(root == null) return
        
//         result.push(root.data)
//         this.preOrder(root.left , result)
//         this.preOrder(root.right , result)
//     }
    
    
// }

// const pi = new Node()
// console.log(pi.preOrder());  // return = [1, 4, 4, 2]
