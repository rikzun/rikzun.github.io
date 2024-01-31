import { array } from 'src/utils/utils'
import './ReadonlyPre.styles.scss'
import type { SyntheticEvent, KeyboardEvent, FormEvent } from 'react'
import { useState } from 'react'
import { CodeHighlight } from '../CodeHighlight'

interface ReadonlyPreProps { value: string }

export function ReadonlyPre(props: ReadonlyPreProps) {
    const [key, setKey] = useState("")
    const updateKey = () => setKey(crypto.randomUUID())

    const acceptableKeyCodes = [
        'Tab',
        'ShiftLeft',
        'ShiftRight',
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

    const acceptableCtrlKeyCodes = [
        'KeyA', 'KeyC'
    ]

    const eventCancel = (e: SyntheticEvent) => {
        e.preventDefault()
        e.stopPropagation()
        return false
    }

    const onKeyDown = (e: KeyboardEvent) => {
        if (e.ctrlKey && acceptableCtrlKeyCodes.includes(e.code)) return
        if (!acceptableKeyCodes.includes(e.code)) return eventCancel(e)
    }

    const onInput = (e: FormEvent<HTMLPreElement>) => {
        if (e.cancelable) return eventCancel(e)
        updateKey() // for fucking android and firefox
    }

    return (
        <pre
            className="container"
            spellCheck={false}
            onCut={eventCancel}
            onPaste={eventCancel}
            onBeforeInput={eventCancel}
            onInput={onInput}
            onKeyDown={onKeyDown}
            key={key}
            contentEditable
            suppressContentEditableWarning
        >
            <CodeHighlight value={props.value} />
        </pre>
    )
}
