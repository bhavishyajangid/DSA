// ***************************** DOUBLE LINKEDLIST ************************

// in the double linked list we have to access the previous node of the linked list or all things as same as linkedlist 


class Node{
    constructor(data){
        this.data = data
        this.next = null
        this.prev = null
    }
}

class doubleLinkedList{
    constructor(){
        this.head = null
    }

    addFirst(data){
        const newNode = new Node(data)   // make a new node
        newNode.next = this.head   // newnode next is head 
        if(this.head){
            this.head.prev = newNode     // the head prev is this newnode so add it 
        }

        this.head = newNode  // make the newnode to head      
    }

    addLast(data){
        const newNode = new Node(data)

        if(!this.head){
             this.head = newNode
             return
        }

        let current = this.head

        while(current.next){
            current = current.next
        }

        newNode.prev = current
        current.next = newNode


    }

    size() {
    let count = 0;
    let current = this.head;
    while (current) {
      // start from head and if the node.next value is null then return the count which count the node value
      count++;
      current = current.next;
    }
    return count;
  }

    addAt(index , data){
        if(index < 0 || index > this.size()){
            return
        }

        let newnode = new Node()

        if(index === 0){
            this.addFirst(data)
        }

        let current = this.head

        for (let i = 0; i < index ;i++) {
            current = current.next   
        }

        newnode.prev = current
        newnode.next = current.next

        if(current.next){
            current.next.pre = newnode
        }
        current.next = newnode
    }


    removeFirst(){
         if(!this.head){
            return
         }

         this.head = this.head.next

         if(this.head){
            this.head.prev = null
         }
    }

    removeLast(){
        if(!this.head){
            return
         }
        
         if(!this.head.next){
            this.head = null
            return 
          }

          let current = this.head

          while(current.next.next){
             current = current.next
          }

          current.next = null
    }
removeAt(index){
        if(index < 0 || index > this.size()){
            return
        }

        if(index === 0){
            this.removeFirst()
        }

        let current = this.head

        for (let i = 0; i < index -1;i++) {
            current = current.next   
        }


        if(current.next){
            current.next = current.next.next

            if(current.next){
                current.next.prev = current
            }
        }
        
    }

    print(){
        let current = this.head

        while(current){
            console.log(current.data);
            current =current.next
        }
    }



}

const doublelinked = new doubleLinkedList()
doublelinked.addLast(0)
doublelinked.addLast(1)
doublelinked.addLast(2)
    doublelinked.print()