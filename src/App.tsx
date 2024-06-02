import './App.style.scss'
import { Packer, Document as DocxDocument, TextRun, Paragraph, ExternalHyperlink } from "docx"
import { ReadonlyPre } from './components/ReadonlyPre'
import { saveBlob } from './utils/utils'
import { HighlightService, Token } from './highlight.service'


export function App() {
    const rawText = `export const me = {
      firstName: 'Mihail',
      lastName: 'Yakimenko',
      age: ${Math.floor((Date.now() - Date.parse('2000-12-11')) / 3154e7)},
      sex: 'male',
      address: 'Russia, Novorossiysk',
    
      languages: {
        russian: 'native',
        english: 'b1'
      },
    
      technicalSkills: [
        'JavaScript', 'TypeScript', 'Kotlin',
        'HTML', 'CSS', 'CSS preprocessors',
        'React', 'Vue', 'Svelte',
        'Webpack', 'Node.js', 'Git'
      ],
    
      familiarWith: [
        'Figma',
        'C++', 'C#',
        'Python', 'APL'
      ],
    
      workExperience: [
        {
          company: '7Winds',
          time: '${Math.floor((Date.now() - Date.parse('2021-06-07')) / 864e5)} days',
          positions: [
            'Frontend Developer (React)',
            'Fullstack Developer (React, Kotlin)'
          ]
        }
      ],
    
      desiredPositions: [
        'Frontend Developer (React, Vue, Svelte, Vanilla)',
        'Backend Developer (Kotlin, JavaScript, TypeScript, C#)',
        'Fullstack Developer'
      ],
    
      discord: 'rikzun',
      mail: '[rik.zunqq@gmail.com](mailto:rik.zunqq@gmail.com)',
      github: '[https://github.com/rikzun](https://github.com/rikzun)'
    }`

    const downloadPDF = (tokens: Token[][]) => {
        const colors = {
            'string': '#CE9178',
            'numeric': '#B5CEA8',
            'reserved': '#569CD6',
            'reserved2': '#C586C0',
            'variable': '#4FC1FF',
            'object-key': '#9CDCFE'
        }

        const file = new DocxDocument({
            sections: [{
                children: tokens.map((line) => (
                    new Paragraph({
                        children: line.map((token) => {
                            const color = token.type ? colors[token.type] : undefined

                            if (token.link) {
                                const textMark = new TextRun({text: '\'', color})
                                const text = new TextRun({
                                    text: token.content.substring(1, token.content.length - 1),
                                    font: 'Courier New',
                                    noProof: true,
                                    underline: { color: color, type: 'single' },
                                    color
                                })

                                return new ExternalHyperlink({
                                    children: [textMark, text, textMark],
                                    link: token.link
                                })
                            }

                            return new TextRun({
                                text: token.content,
                                font: 'Courier New',
                                noProof: true,
                                color
                            })
                        })
                    })
                ))
            }],
            background: { color: '#1e1e1e' }
        })
    
        Packer.toBlob(file).then((blob) =>
            saveBlob(blob, 'resume.docx')
        )
    }

    return (
        <ReadonlyPre
            value={HighlightService.textToTokens(rawText)}
            exportClick={downloadPDF}
        />
    )
}