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
        this.data = data;
        this.left = null;
        this.right = null;
    }
}


class Solution {
    preorder(root) {
        // code here
        let result = []
        this.preOrder(root , result)
        return result
    }
    
    preOrder(root , result){
        if(root == null) return
        
        result.push(root.data)
        this.preOrder(root.left , result)
        this.preOrder(root.right , result)
    }
    
    
}

const pi = new Node()
console.log(pi.preOrder());  // return = [1, 4, 4, 2]
