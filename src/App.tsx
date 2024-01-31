import './App.style.scss'
import { Packer, Document } from "docx"
import { ReadonlyPre } from './components/ReadonlyPre'
import { saveBlob } from './utils/utils'

// function downloadPDF() {
//     const file = new Document({
//         sections: [],
//         background: { color: '#1e1e1e' }
//     })

//     Packer.toBlob(file).then((v) => saveBlob(v, "kekw.docx"))
// }

export function App() {
    const text = `const me = {
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

    return <ReadonlyPre value={text} />
}