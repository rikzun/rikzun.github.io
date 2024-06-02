import { Range } from "./utils/range"
import { trimStart } from "./utils/utils"

export type TokenType = 'string' | 'numeric' | 'reserved' | 'reserved2' | 'variable' | 'object-key'
export class Token {
    content: string
    type: TokenType | null
    link: string | null

    constructor(content: string, type: TokenType | null = null, link: string | null = null) {
        this.content = content
        this.type = type
        this.link = link
    }
}

export class TokenList {
    private data: Map<Range, Token>
    constructor() { this.data = new Map() }

    collect(range: Range, token: Token) { this.data.set(range, token) }

    getEntries() { return [...this.data.entries()] }
    getRanges() { return [...this.data.keys()] }
    getRangeByEntry(number: number) { return this.getRanges().find((v) => v.contains(number)) ?? null }

    getSortedTokens() {
        return this.getEntries()
            .sort((a, b) => a[0].start > b[0].start ? 1 : -1) 
            .map(([_, token]) => token)
    }
}

export const HighlightService = new class {
    regex = {
        string: /('(?:[^'\\]|\\.)*')/g,
        numeric: /(\d+)/g,
        objectKey: /(\w+\s*:)/g,
        reserved: /(const|export)/g,

        stringLink: /\[(.*)\]\((.*)\)/
    }

    matchTokens(text: string, regexp: RegExp): [Range, string][] {
        return [...text.matchAll(regexp)].map(({1: string, index}) => (
            [new Range(index!, index! + string.length - 1), string]
        ))
    }

    matchNewTokens(text: string, regexp: RegExp, ranges: Range[]): [Range, string][] {
        return this.matchTokens(text, regexp).filter(([range, _]) => (
            !ranges.some((v) => v.containsRange(range))
        ))
    }

    testLinkString(text: string) {
        return this.regex.stringLink.test(text)
    }

    /** @returns [newTitle, link] */
    takeLinkFromString(text: string): [string, string | null] {
        const matchTitle = text.match(this.regex.stringLink)
        if (!matchTitle) return [text, null]

        return [matchTitle[1], matchTitle[2]]
    }

    /** @returns [range, variable] */
    takeVariable(text: string, range: Range): [Range, string] | [] {
        const match = (' '.repeat(range.end + 1) + text.substring(range.end + 1)).match(/\w+/)
        return match ? [new Range(match.index!, match.index! + match[0].length - 1), match[0]] : []
    }

    textToTokens(rawText: string): Token[][] {
        const tokens = rawText.split('\n').map((rawLine) => {
            const line = trimStart(rawLine, 4)
            const tokenList = new TokenList()

            this.matchTokens(line, this.regex.string)
                .forEach(([range, content]) => tokenList.collect(range, new Token(content, 'string')))

            this.matchNewTokens(line, this.regex.numeric, tokenList.getRanges())
                .forEach(([range, content]) => tokenList.collect(range, new Token(content, 'numeric')))

            this.matchNewTokens(line, this.regex.objectKey, tokenList.getRanges())
                .forEach(([range, content]) => tokenList.collect(range, new Token(content, 'object-key')))

            this.matchNewTokens(line, this.regex.reserved, tokenList.getRanges()).forEach(([range, content]) => {
                const type = content === 'export' ? 'reserved2' : 'reserved'
                tokenList.collect(range, new Token(content, type))

                if (content === 'const') {
                    const [varRange, varContent] = this.takeVariable(line, range)
                    if (varRange && varContent) tokenList.collect(varRange, new Token(varContent, 'variable'))
                }
            })

            // collect unexpected tokens
            line.split('').forEach((ch, index) => {
                if (tokenList.getRangeByEntry(index)) return
                tokenList.collect(new Range(index, index), new Token(ch))
            })

            tokenList.getEntries()
                .filter(([range, token]) => token.type === 'string' && this.testLinkString(token.content))
                .forEach(([range, token]) => {
                    const [content, link] = this.takeLinkFromString(token.content)

                    token.content = `'${content}'`
                    token.link = link
                    range.end = range.start + token.content.length - 1
                })

            return tokenList.getSortedTokens()
        })

        return tokens
    }
}()