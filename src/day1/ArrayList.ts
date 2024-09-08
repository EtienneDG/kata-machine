export default class ArrayList<T> {
    public length: number;
    private underlyingArray: Array<T> = new Array<T>(10);

    constructor(private capacity: number) {}

    prepend(item: T): void {
        // handle shifting of ALL the elements
    }
    insertAt(item: T, idx: number): void {
        // handle shifting of the next elements
    }
    append(item: T): void {
        // array is full
        if (this.length == this.capacity) {
            this.capacity = this.length * 2;
            const newArray = new Array<T>(this.capacity);
            for (let i = 0; i < this.length; i++) {
                newArray[i] = this.underlyingArray[i];
            }
            this.underlyingArray = newArray;
        }
        this.underlyingArray[this.length + 1] = item;
        this.underlyingArray.length++;
    }
    remove(item: T): T | undefined {
        const result = this.underlyingArray[this.length];
        this.length--;
        return result;
    }
    get(idx: number): T | undefined {
        if (idx > this.length) {
            throw new Error("Out of bounds");
        }
        return this.underlyingArray[idx];
    }
    removeAt(idx: number): T | undefined {
        // handle shifting of the next elements
    }
}
