import { array, trimStart } from 'src/utils'
import './ReadonlyPre.styles.scss'
import type { SyntheticEvent, KeyboardEvent } from 'react'

interface ReadonlyPreProps { value: string }

export function ReadonlyPre(props: ReadonlyPreProps) {
    const acceptableKeyCodes = [
        'Tab',
        'Home',
        'End',
        'PageUp',
        'PageDown',
        'ArrowUp',
        'ArrowLeft',
        'ArrowDown',
        'ArrowRight',
        ...array(12).map((v) => `F${v + 1}`)
    ]

    const preventDefault = (e: SyntheticEvent) => e.preventDefault()
    const onKeyDown = (e: KeyboardEvent) => {
        if (!acceptableKeyCodes.includes(e.code)) preventDefault(e)
    }

    /* {`{
                kekw
            }\n`.split('\n').map((v) => trimStart(v, 12)).join('\n')}
            <span onClick={downloadPDF}>█████</span> */

    return (
        <pre
            className="container"
            spellCheck={false}
            onCut={preventDefault}
            onPaste={preventDefault}
            onKeyDown={onKeyDown}
            contentEditable
            suppressContentEditableWarning
        >
            {props.value.split('\n').map((rawLine) => {
                const line = trimStart(rawLine, 4).split(' ')
                console.log(line)
                return <span>{line}</span>
            })}
        </pre>
    )
}
