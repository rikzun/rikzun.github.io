import './App.style.scss'
import { Packer, Document } from "docx"
import { ReadonlyPre } from './components/ReadonlyPre/ReadonlyPre'
import { saveBlob } from './utils'

// function downloadPDF() {
//     const file = new Document({
//         sections: [],
//         background: { color: '#1e1e1e' }
//     })

//     Packer.toBlob(file).then((v) => saveBlob(v, "kekw.docx"))
// }

export function App() {
    return (
        <ReadonlyPre value='' />
    )
}
