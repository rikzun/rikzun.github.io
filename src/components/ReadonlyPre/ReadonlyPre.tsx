import { array, trimStart } from 'src/utils'
import './ReadonlyPre.styles.scss'
import { type SyntheticEvent, type KeyboardEvent, useState, useEffect, createRef, Fragment } from 'react'

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

    const preventDefault = (e: SyntheticEvent) => e.preventDefault()
    const onKeyDown = (e: KeyboardEvent) => {
        setKeys((v) => [...v, e.code])

        if (!acceptableKeyCodes.includes(e.code)) return preventDefault(e)
    }

    useEffect(() => {
        Object.keys(window)
            .filter((key) => key.startsWith('on'))
            .filter((event) => !event.includes("pointer") && !event.includes("mouse"))
            .forEach((event) => {
                //@ts-ignore
                ref.current!![event] = (e: any) => setEvents((v) => [...v, e.type])
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
            onCut={preventDefault}
            onPaste={preventDefault}
            onKeyDown={onKeyDown}
            contentEditable
            suppressContentEditableWarning
        >
            {props.value.split('\n').map((rawLine) => {
                const line = trimStart(rawLine, 4).split(' ')
                // console.log(line)
                return <span>{line}</span>
            })}

            <br></br>
            {keys.map((v) => (
                <Fragment key={v}>
                    <span className='key'>{v}</span>
                    <br></br>
                </Fragment>
            ))}
            
            <br></br>
            {events.map((v) => (
                <Fragment key={v}>
                    <span className='event'>{v}</span>
                    <br></br>
                </Fragment>
            ))}
        </pre>
    )
}
