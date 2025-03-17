import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import { helloWorld } from './counter';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1 class="title-h1">Vite + TypeScript</h1>
    <div class="card">
      <button id="namedeclarator" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`

// setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)

let helloSentence = helloWorld("Misho")

console.log(helloSentence)
const nameDeclarator = document.querySelector<HTMLButtonElement>('#namedeclarator')
// const nameDisplay = document.querySelector<HTMLButtonElement>('.title-h1')
const nameDisplay = document.querySelector<HTMLHeadingElement>('.title-h1')

if(nameDeclarator && nameDisplay) {
  nameDeclarator.addEventListener("click",() => {
    nameDisplay.innerText = helloSentence
  })
} else {
  console.error("Button with ID #namedeclarator not found.");
}