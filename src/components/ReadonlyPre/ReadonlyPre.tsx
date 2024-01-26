import { array, trimStart } from 'src/utils'
import './ReadonlyPre.styles.scss'
import type { SyntheticEvent, KeyboardEvent, FormEvent } from 'react'
import { useState, createRef, Fragment } from 'react'

interface ReadonlyPreProps { value: string }

export function ReadonlyPre(props: ReadonlyPreProps) {
    const ref = createRef<HTMLPreElement>()
    const [line, setLine] = useState<[string, string][]>([])
    const println = (value: any, color: string = 'wheat') => setLine((v) => [...v, [value, color]])

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

    const eventCancel = (e: SyntheticEvent) => {
        e.preventDefault()
        e.stopPropagation()
        return false
    }

    const onKeyDown = (e: KeyboardEvent) => {
        if (e.keyCode == 229) {
            println(e.cancelable)
            const selection = window.getSelection()!
            const range = selection.getRangeAt(0)
            const offset = range.startOffset - 1

            if (offset) {
                range.setStart(range.startContainer, offset)
                range.collapse(true)
                selection.removeAllRanges()
                selection.addRange(range)
            }
        }

        if (!acceptableKeyCodes.includes(e.code)) return eventCancel(e)
    }

    const onInput = (e: FormEvent<HTMLPreElement>) => {
        if (e.cancelable) return eventCancel(e)
    }

    /* {`{
                kekw
            }\n`.split('\n').map((v) => trimStart(v, 12)).join('\n')}
            <span onClick={downloadPDF}>█████</span> */

    return (
        <pre
            ref={ref}
            className="container"
            spellCheck={false}
            onCut={eventCancel}
            onPaste={eventCancel}
            onBeforeInput={eventCancel}
            onInput={onInput}
            onKeyDown={onKeyDown}
            contentEditable
            suppressContentEditableWarning
        >
            14{props.value.split('\n').map((rawLine) => {
                const line = trimStart(rawLine, 4).split(' ')
                // console.log(line)
                return <span>{line}</span>
            })}
            <br />

            {line.map(([value, color], i) => (
                <Fragment key={value + color + i}>
                    <span style={{color}}>{value}</span>
                    <br />
                </Fragment>
            ))}
        </pre>
    )
}
