import { Token } from 'src/highlight.service'
export type { ReadonlyPreProps }

interface ReadonlyPreProps {
    value: Token[][]
    exportClick: (tokens: Token[][]) => void
}