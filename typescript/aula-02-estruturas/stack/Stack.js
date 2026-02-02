export default class Stack {
    constructor() {
        this.StackData = [];
    }
    isEmpty() {
        let result = this.StackData.length <= 0;
        return result;
    }
    push(dataItem) {
        this.StackData.push(dataItem);
    }
    pop() {
        if (this.isEmpty()) {
            console.log("A fila está vazia");
            return;
        }
        else {
            var element = this.StackData.pop();
            return element;
        }
    }
    count() {
        let len = this.StackData.length;
        return len;
    }
    printStack() {
        for (let i = this.StackData.length - 1; i >= 0; i--) {
            console.log(this.StackData[i]);
        }
    }
    peek() {
        if (this.isEmpty()) {
            console.log("A fila está vazia");
            return;
        }
        else {
            var element = this.StackData[this.StackData.length - 1];
            return element;
        }
    }
    contains(dataItem) {
        if (this.StackData.includes(dataItem)) {
            return true;
        }
        else {
            return false;
        }
    }
    clear() {
        this.StackData.length = 0;
    }
}
