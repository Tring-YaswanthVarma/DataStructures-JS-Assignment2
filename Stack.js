class Node{
    constructor(data){
        this.data = data;
        this.nextNode = null;
    }
}

class Stack {
    top = null;
    push(data){
        let newNode = new Node(data);
        if(this.top == null){
            this.top = newNode;
        }
        else{
            newNode.nextNode = this.top;
            this.top = newNode;
        }
        console.log("Pushed " + data);
    }

    pop(){
        let data = this.top.data;
        this.top = this.top.nextNode;
        console.log("Popped " + data);
    }

    printElements(){
        let temp = this.top;
        while(temp != null){
            console.log(temp.data);
            temp = temp.nextNode;
        }
    }
}

s = new Stack();
s.push(1)
s.push(2)
s.push(3)
s.printElements();
s.pop();
s.pop();
s.printElements();