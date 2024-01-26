import { array, trimStart } from 'src/utils'
import './ReadonlyPre.styles.scss'
import { type SyntheticEvent, type KeyboardEvent, useState, useEffect, createRef, Fragment, type FormEvent } from 'react'

interface ReadonlyPreProps { value: string }

export function ReadonlyPre(props: ReadonlyPreProps) {
    const ref = createRef<HTMLPreElement>()
    const [keys, setKeys] = useState<string[]>([])
    const [events, setEvents] = useState<string[]>([])

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
        setKeys((v) => [...v, `{code: ${e.code}, key: ${e.key}, keyCode: ${e.keyCode}}`])
        console.log(e)
        if (!acceptableKeyCodes.includes(e.code)) return eventCancel(e)
    }

    const onBeforeInput = (e: FormEvent<HTMLPreElement>) => {
        setEvents((v) => [...v, e.type])
        return eventCancel(e)
    }

    const onInput = (e: FormEvent<HTMLPreElement>) => {
        setEvents((v) => [...v, e.type])

        const selection = window.getSelection()!!
        const range = selection.getRangeAt(0)
        const offset = range.startOffset

        range.setStart(range.startContainer, offset)
        range.collapse(true)
        selection.removeAllRanges()
        selection.addRange(range)

        return eventCancel(e)
    }

    useEffect(() => {
        const skipEvents = ['pointer', 'mouse', 'key', 'touch']

        Object.keys(window)
            .filter((key) => key.startsWith('on') && !skipEvents.some((v) => key.includes(v)))
            .forEach((event) => {
                //@ts-ignore
                if (!ref.current!![event]) {
                    //@ts-ignore
                    ref.current!![event] = (e: any) => {
                        console.log(e)
                        setEvents((v) => [...v, e.type])
                    }
                }
            })
    }, [])

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
            onBeforeInput={onBeforeInput}
            onInput={onInput}
            onKeyDown={onKeyDown}
            contentEditable
            suppressContentEditableWarning
        >
            4{props.value.split('\n').map((rawLine) => {
                const line = trimStart(rawLine, 4).split(' ')
                // console.log(line)
                return <span>{line}</span>
            })}

            <br />
            {keys.map((v, i) => (
                <Fragment key={v + i}>
                    <span className='key'>{v}</span>
                    <br />
                </Fragment>
            ))}
            
            <br />
            {events.map((v, i) => (
                <Fragment key={v + i}>
                    <span className='event'>{v}</span>
                    <br />
                </Fragment>
            ))}
        </pre>
    )
}
