type Node<T> = { val: T; next?: Node<T> };

export default class Stack<T> {
    public length: number = 0;
    private head?: Node<T>;

    constructor() {}

    push(item: T): void {
        const newNode = { val: item, next: this.head };
        this.head = newNode;
        this.length++;
    }

    pop(): T | undefined {
        const currHeadVal = this.head?.val;

        if (!this.head) {
            return this.head;
        }

        this.head = this.head.next;
        this.length--;
        return currHeadVal;
    }

    peek(): T | undefined {
        return this.head?.val;
    }
}
