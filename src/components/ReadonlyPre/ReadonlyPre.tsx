import './ReadonlyPre.styles.scss'
import { array, eventCancel } from '@utils/utils'
import type { KeyboardEvent, FormEvent } from 'react'
import { Fragment, useState } from 'react'
import { ReadonlyPreProps } from './ReadonlyPre.types'

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
    ...array(12).map((v) => 'F' + (v + 1))
]

const unacceptableCtrlKeyCodes = [
    'KeyX', 'KeyV'
]

export function ReadonlyPre(props: ReadonlyPreProps) {
    const [
        key,
        setKey,
        updateKey = () => setKey(crypto.randomUUID())
    ] = useState(crypto.randomUUID())

    const onKeyDown = (e: KeyboardEvent) => {
        if (e.ctrlKey) {
            if (!unacceptableCtrlKeyCodes.includes(e.code)) return 
            return eventCancel(e)
        }
        else if (!acceptableKeyCodes.includes(e.code)) return eventCancel(e)
    }

    const onInput = (e: FormEvent<HTMLPreElement>) => {
        if (e.cancelable) return eventCancel(e)
        updateKey() // for android and firefox
    }

    const maxLineLendth = Math.max(
        ...props.value.map((line) =>
            line.reduce((acc, token) =>
                acc + token.content.length, 0
            )
        )
    ) + 1

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
            <div className="code" style={{maxWidth: `${maxLineLendth}ch`}}>
                {props.value.map((line, lineIndex) => (
                    <Fragment key={lineIndex}>
                        {line.map((token, tokenIndex) => {
                            const key = lineIndex + token.content + tokenIndex
                            const className = [token.type, token.type === 'reserved' ? token.type + '__' + token.content : null]
                                .filter(Boolean)
                                .join(' ')

                            if (token.link) return (
                                <span key={key} className={className}>
                                    '
                                    <a
                                        href={token.link}
                                        className={className}
                                        target={token.link.startsWith('mailto:') ? undefined : '_blank'}
                                        contentEditable={false}
                                    >
                                        {token.content.substring(1, token.content.length - 1)}
                                    </a>
                                    '
                                </span>
                            )

                            const exportClick = token.type === 'reserved2' && token.content === 'export'
                                ? () => props.exportClick(props.value)
                                : undefined

                            return (
                                <span key={key} className={className} onClick={exportClick}>
                                    {token.content}
                                </span>
                            )
                        })}
                        <br />
                    </Fragment>
                ))}
            </div>
        </pre>
    )
}
