import { array, trimStart } from 'src/utils'
import './ReadonlyPre.styles.scss'
import type { SyntheticEvent, KeyboardEvent, FormEvent } from 'react'
import { useState, Fragment } from 'react'

interface ReadonlyPreProps { value: string }

export function ReadonlyPre(props: ReadonlyPreProps) {
    const [line, setLine] = useState<[string, string][]>([])
    const println = (value: string, color: string = 'wheat') => setLine((v) => [...v, [value, color]])

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
        const keyOutput = (isCanceled: boolean) => `{code: ${e.code}, key: ${e.key ?? null}, keyCode: ${e.keyCode}, isCanceled: ${isCanceled}}`

        if (!acceptableKeyCodes.includes(e.code)) {
            println(keyOutput(true), 'grey')
            return eventCancel(e)
        }

        println(keyOutput(false), 'wheat')
    }

    const onBeforeInput = (e: FormEvent<HTMLPreElement>) => {
        println(`event ${e.type} called!`, 'greenyellow')

        const selection = window.getSelection()!!
        const range = selection.getRangeAt(0)
        const offset = range.startOffset

        range.setStart(range.startContainer, offset)
        range.collapse(true)
        selection.removeAllRanges()
        selection.addRange(range)

        return eventCancel(e)
    }

    const onInput = (e: FormEvent<HTMLPreElement>) => {
        println(`event ${e.type} called!`, 'greenyellow')
        return eventCancel(e)
    }

    /* {`{
                kekw
            }\n`.split('\n').map((v) => trimStart(v, 12)).join('\n')}
            <span onClick={downloadPDF}>█████</span> */

    return (
        <pre
            className="container"
            spellCheck={false}
            onCut={eventCancel}
            onPaste={eventCancel}
            onBeforeInput={onBeforeInput}
            onInput={onInput}
            onKeyDown={onKeyDown}
            contentEditable
            suppressContentEditableWarning
        >
            6{props.value.split('\n').map((rawLine) => {
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
