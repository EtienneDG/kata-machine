export class Node<T> {
    constructor(public val: T, public next?: Node<T>) {}
}
export default class SinglyLinkedList<T> {
    public length: number = 0;
    head: Node<T> | undefined;
    tail: Node<T> | undefined;

    constructor() {}

    init(item: T): void {
        const firstEntry = new Node<T>(item);
        this.head = firstEntry;
        this.tail = firstEntry;
    }

    prepend(item: T): void {
        if (this.head) {
            const currHead = this.head;
            this.head = new Node<T>(item, currHead);
        } else {
            this.init(item);
        }
        this.length++;
    }

    insertAt(item: T, idx: number): void {
        if (idx > this.length) throw new Error("Index error");
        switch (idx) {
            case 0:
                if (this.head) {
                    const newHead = new Node<T>(item, this.head);
                    this.head = newHead;
                } else {
                    this.init(item);
                }
                break;
            case this.length:
                if (!this.tail) throw new Error("Head should be defined here");

                const newTail = new Node<T>(item, this.head);
                this.tail.next = newTail;
                this.tail = newTail;
                break;
            default:
                if (!this.head) throw new Error("Head should be defined here");

                let i = 1;
                let curr: Node<T> | undefined = this.head.next;
                let prev: Node<T> | undefined = this.head;

                while (i < idx) {
                    prev = curr;
                    curr = curr?.next;
                    i++;
                }
                const newVal = new Node<T>(item, curr);

                if (!prev) throw new Error("Prev should be defined here");

                prev.next = newVal;
                break;
        }
        this.length++;
    }

    append(item: T): void {
        if (this.tail) {
            const newTail = new Node<T>(item);
            this.tail.next = newTail;
            this.tail = newTail;
        } else {
            this.init(item);
        }
        this.length++;
    }

    remove(item: T): T | undefined {
        let i = 0;

        if (!this.head) return undefined;

        let curr: Node<T> | undefined = this.head;
        while (i < this.length) {
            if (curr?.val === item) {
                return this.removeAt(i);
            }
            curr = curr?.next;
            i++;
        }
        return undefined;
    }

    get(idx: number): T | undefined {
        let currEntry = this.head;
        for (let i = 0; i < idx && currEntry; i++) {
            currEntry = currEntry.next;
        }
        return currEntry?.val;
    }

    removeAt(idx: number): T | undefined {
        if (idx > this.length || !this.head) return undefined;

        if (idx == 0) {
            const currHeadVal = this.head.val;
            this.head = this.head.next;
            this.length--;
            return currHeadVal;
        }

        let i = 1;
        let curr: Node<T> | undefined = this.head.next;
        let prev: Node<T> | undefined = this.head;
        while (i < idx) {
            prev = curr;
            curr = curr?.next;
            i++;
        }

        if (prev && curr) {
            prev.next = curr?.next;
            curr.next = undefined;
            this.length--;
            return curr.val;
        }
        return undefined;
    }
}
