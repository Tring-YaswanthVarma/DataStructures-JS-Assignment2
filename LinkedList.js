class Node {
    constructor(value) {
        this.data = value
        this.nextNode = null;
    }
}

class LinkedList {
    rootNode = null;
    count = 0;
    addElement(value) {
        if (this.rootNode == null) {
            this.rootNode = new Node(value)
            this.count++;
        } else {
            let temp = this.rootNode;
            while (temp.nextNode != null) {
                temp = temp.nextNode;
            }
            temp.nextNode = new Node(value);
        }
    }

    addElements(value, index) {
        let new_node = new Node(value);
        if (index == 0 || this.rootNode == null) {
            new_node.nextNode = this.rootNode
            this.rootNode = new_node;
        }
        else {
            let flag = 0;
            let temp_index = 1;
            let temp = this.rootNode;
            while (temp.nextNode != null) {
                if (index == temp_index) {
                    new_node.nextNode = temp.nextNode;
                    temp.nextNode = new_node;
                    flag = 1;
                    break;
                }
                temp_index += 1;
                temp = temp.nextNode
            }
            if(temp_index == index && flag == 0){
                    new_node.nextNode = temp.nextNode;
                    temp.nextNode = new_node;
            }
        }
    }

    removeElement(index) {
        if(index == 0){
            this.rootNode = this.rootNode.nextNode
        }
        else{
            let temp_index = 1;
            let temp = this.rootNode
            while(temp.nextNode != null){
                if (index == temp_index) {
                    temp.nextNode = temp.nextNode.nextNode;
                    break;
                }
                temp_index += 1;
                temp = temp.nextNode;
            }
        }
    }

    printElements() {
        let temp = this.rootNode;
        if (temp == null) {
            console.log("Is empty!")
        } else {
            while (temp != null) {
                console.log(temp.data)
                temp = temp.nextNode;
            }
        }
    }
}


let list = new LinkedList()
list.addElement(10);
list.addElement(20);
list.addElements(1,0);
list.addElements(2,1);
list.addElements(3,1);
list.addElements(5,2)
list.printElements();
console.log("------")
list.removeElement(4);
list.printElements();