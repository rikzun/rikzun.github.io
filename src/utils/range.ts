export class Range {
    start: number
    end: number

    constructor(start: number, end: number) {
        this.start = start
        this.end = end
    }

    contains(other: Range) {
        return this.start <= other.start && this.end >= other.end
    }
}