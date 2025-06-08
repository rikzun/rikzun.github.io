import type { Token } from 'src/highlight'

export interface ReadonlyPreProps {
    value: Token[][]
    exportClick: (tokens: Token[][]) => void
}