export interface CodeHighlightProps {
    value: string
}

export type TokenType = 'string' | 'numeric' | 'reserved' | 'variable' | 'object-key'
export type TokenSubtype = 'link'
export class Token {
    type: TokenType
    subtype: TokenSubtype | null
    rest: string | null

    constructor(type: TokenType, subtype: TokenSubtype | null = null, rest: string | null = null) {
        this.type = type
        this.subtype = subtype
        this.rest = rest
    }

    toClassName() {
        return [
            this.type,
            this.rest ? (this.type + '__' + this.rest) : null,
            this.subtype ? (this.type + '__' + this.subtype) : null
        ].filter(Boolean).join(' ')
    }
}