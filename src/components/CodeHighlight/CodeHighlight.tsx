import "./CodeHighlight.styles.scss"
import { Fragment, memo } from "react"
import { trimStart } from "src/utils/utils"
import { type CodeHighlightProps, Token } from "./CodeHighlight.types"
import { Range } from "src/utils/range"
import { CodeHighlightService } from "./CodeHightlight.service"

export const CodeHighlight = memo((props: CodeHighlightProps) => (
    <div className="highlight">
        {props.value.split('\n').map((rawLine, i) => {
            const line = trimStart(rawLine, 4)
            const tokens: Map<Range, Token> = new Map()

            CodeHighlightService.matchAllRanges(line, CodeHighlightService.regex.string)
                .forEach(([range, string]) => tokens.set(range, new Token('string', CodeHighlightService.getStringSubtype(string))))

            CodeHighlightService.matchAllNewRanges(line, CodeHighlightService.regex.number, [...tokens.keys()])
                .forEach(([range, _]) => tokens.set(range, new Token('numeric')))

            CodeHighlightService.matchAllNewRanges(line, CodeHighlightService.regex.objectKey, [...tokens.keys()])
                .forEach(([range, _]) => tokens.set(range, new Token('object-key')))

            CodeHighlightService.matchAllNewRanges(line, CodeHighlightService.regex.reserved, [...tokens.keys()])
                .forEach(([range, string]) => {
                    tokens.set(range, new Token('reserved'))

                    if (string === 'const') {
                        const variableRange = CodeHighlightService.matchVariable(line, range)
                        if (variableRange) tokens.set(variableRange, new Token('variable'))
                    }
                })

            return (
                <Fragment key={rawLine + i}>
                    {CodeHighlightService.buildNodes(line, tokens)}
                    <br />
                </Fragment>
            )
        })}
    </div>
))
