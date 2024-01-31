import "./CodeHighlight.styles.scss"
import { Fragment, memo } from "react"
import { trimStart } from "src/utils/utils"
import { type CodeHighlightProps, Token } from "./CodeHighlight.types"
import { Range } from "src/utils/range"
import { CodeHighlightService } from "./CodeHightlight.service"

export const CodeHighlight = memo((props: CodeHighlightProps) => {
    const lines = props.value
        .split('\n')
        .map((line) => trimStart(line, 4))

    let maxLineLength = 0
    const nodes = lines.map((line, i) => {
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

        const nodes = CodeHighlightService.buildNodes(line, tokens)
        const lineLength = CodeHighlightService.getLineLength(nodes)
        if (lineLength > maxLineLength) maxLineLength = lineLength
        
        return (
            <Fragment key={line + i}>
                {nodes}
                <br />
            </Fragment>
        )
    })

    return (
        <div className="highlight" style={{maxWidth: `${maxLineLength}ch`}}>
            {nodes}
        </div>
    )
})
