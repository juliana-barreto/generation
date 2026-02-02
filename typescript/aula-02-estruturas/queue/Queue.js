export default class Queue {
    constructor() {
        this.QueueData = [];
    }
    isEmpty() {
        let result = this.QueueData.length <= 0;
        return result;
    }
    enqueue(dataItem) {
        this.QueueData.push(dataItem);
    }
    dequeue() {
        if (this.isEmpty()) {
            console.log("A fila está vazia");
            return;
        }
        else {
            var element = this.QueueData.shift();
            return element;
        }
    }
    count() {
        let len = this.QueueData.length;
        return len;
    }
    printQueue() {
        for (let i = 0; i < this.QueueData.length; i++) {
            console.log(this.QueueData[i]);
        }
    }
    peek() {
        if (this.isEmpty()) {
            console.log("A fila está vazia");
            return;
        }
        else {
            var element = this.QueueData[0];
            return element;
        }
    }
    contains(dataItem) {
        if (this.QueueData.includes(dataItem)) {
            return true;
        }
        else {
            return false;
        }
    }
    clear() {
        this.QueueData.length = 0;
    }
}
