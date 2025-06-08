import type { SyntheticEvent } from "react"

export function array(length: number) {
    return Array.from(Array(length).keys())
}

export function saveBlob(blob: Blob, fileName: string = 'undefined') {
    const url = window.URL.createObjectURL(blob)
    const element = document.createElement('a')

    element.style.display = 'none'
    element.href = url
    element.download = fileName
    
    document.body.appendChild(element)
    element.click()

    document.body.removeChild(element)
    window.URL.revokeObjectURL(url)
}

export function trimStart(str: string, length: number): string {
    let index = 0
    while (index < str.length && index < length && str[index] === ' ') index++
    
    return str.slice(index)
}

export function eventCancel(e: SyntheticEvent) {
    e.preventDefault()
    e.stopPropagation()
    return false
}