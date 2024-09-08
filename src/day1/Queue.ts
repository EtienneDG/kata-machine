type Node<T> = { val: T; next?: Node<T> };

export default class Queue<T> {
    public length: number = 0;
    private head?: Node<T>;
    private tail?: Node<T>;

    constructor() {}

    enqueue(item: T): void {
        const newTail = { val: item };
        this.length++;

        if (!this.tail) {
            this.head = this.tail = newTail;
            return;
        }

        this.tail.next = newTail;
        this.tail = newTail;
    }

    deque(): T | undefined {
        if (!this.head) return undefined;
        const currHeadVal = this.head.val;
        this.head = this.head.next;
        this.length--;

        // when we deque the last item from the queue
        if (this.length === 0) this.tail = undefined;

        return currHeadVal;
    }

    peek(): T | undefined {
        return this.head?.val;
    }
}
