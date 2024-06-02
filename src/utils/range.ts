export class Range {
    start: number
    end: number

    constructor(start: number, end: number) {
        this.start = start
        this.end = end
    }

    contains(index: number) { return this.start <= index && index <= this.end }
    containsRange(other: Range) { return this.start <= other.start && other.end <= this.end }
}