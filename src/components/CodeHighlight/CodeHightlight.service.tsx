import { Range } from "src/utils/range"
import { Token } from "./CodeHighlight.types"
import type { ReactNode } from "react"

export const CodeHighlightService = new class {
    regex = {
        string: /('(?:[^'\\]|\\.)*')/g,
        number: /(\d+)/g,
        reserved: /(const)/g,
        objectKey: /(\w+\s*:)/g,

        stringLink: /\[(.*)\]\((.*)\)/
    }

    matchAllRanges(string: string, regexp: RegExp): [Range, string][] {
        return [...string.matchAll(regexp)].map(({1: string, index}) => (
            [new Range(index!, index! + string.length), string]
        ))
    }

    matchAllNewRanges(string: string, regexp: RegExp, ranges: Range[]): [Range, string][] {
        return this.matchAllRanges(string, regexp).filter(([range, _]) => {
            return !ranges.some((v) => v.contains(range))
        })
    }

    matchVariable(string: string, range: Range) {
        const match = (' '.repeat(range.end) + string.substring(range.end)).match(/\w+/)
        return match ? new Range(match.index!, match.index! + match[0].length) : null
    }

    getStringSubtype(string: string) {
        if (this.regex.stringLink.test(string)) return 'link'
    }

    matchStringFormatting(string: string): [string, string] | null {
        const matchTitle = string.match(this.regex.stringLink)
        if (!matchTitle) return null

        return [matchTitle[1], matchTitle[2]]
    }

    buildNodes(line: string, tokens: Map<Range, Token>) {
        const nodeList: ReactNode[] = [...line.split('')]

        Array.from(tokens.entries())
            .sort((a, b) => a[0].start < b[0].start ? 1 : -1)
            .forEach(([range, token]) => {
                let element: ReactNode
                const string = nodeList.slice(range.start, range.end).join('')

                switch(token.subtype) {
                    default: {
                        element = (
                            <span className={token.toClassName()}>
                                {string}
                            </span>
                        )
                        break
                    }

                    case 'link': {
                        const [title, value] = this.matchStringFormatting(string)!

                        element = (
                            <a
                                className={token.toClassName()}
                                href={value}
                                target={value.startsWith('mailto:') ? undefined : '_blank'}
                                contentEditable={false}
                            >
                                {title}
                            </a>
                        )
                        break
                    }
                }

                nodeList.splice(range.start, string.length, element)
            })

        return nodeList
    }
}()