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

export function trimStart(string: string, length: number) {
    const regex = new RegExp(`^\\s{1,${length}}`)
    return string.replace(regex, '')
}

export const eventCancel = (e: SyntheticEvent) => {
    e.preventDefault()
    e.stopPropagation()
    return false
}