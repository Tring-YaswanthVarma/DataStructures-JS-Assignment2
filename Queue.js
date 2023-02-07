class Node {
    constructor(data) {
        this.data = data;
        this.nextNode = null;
    }
}

class Queue {
    front = null;
    rear = null;
    enqueue(data) {
        let newNode = new Node(data);
        if (this.front == null) {
            this.front = newNode;
            this.rear = this.front;
        }
        else {
            this.rear.nextNode = newNode;
            this.rear = newNode;
        }
        console.log("Enqueued : " + data);
    }

    dequeue() {
        if (this.front == null) {
            console.log("Queue is empty");
        }
        else {
            let data = this.front.data;
            this.front = this.front.nextNode;
            console.log("dequeued : " + data);
        }

    }

    printElements() {
        let temp = this.front;
        while (temp != null) {
            console.log(temp.data);
            temp = temp.nextNode;
        }
    }
}

let q = new Queue()
q.enqueue(10);
q.enqueue(20);
q.enqueue(30);
q.enqueue(40);
q.printElements();
q.dequeue()
q.printElements();
