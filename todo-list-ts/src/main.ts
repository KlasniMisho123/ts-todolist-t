import './style.css'
import { helloWorld } from './counter';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1 class="title-h1">TodoList With TypeScript</h1>
    <div 
    class="add-to-list-div"> 
      <input
       id="todoInput" 
       placeholder="New todo"
      />
      <button id="addToList"> Add </button>
    </div>
    <div class="card">
      <button id="namedeclarator" type="button"> Hello </button>
    </div>
    <p class="read-the-docs">
    </p>
  </div>
`

// setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)

let helloSentence = helloWorld("Misho")

console.log(helloSentence)
const nameDeclarator = document.querySelector<HTMLButtonElement>('#namedeclarator')
const nameDisplay = document.querySelector<HTMLHeadingElement>('.title-h1')
const todoDiv = document.querySelector<HTMLDivElement>(".add-to-list-div")

if(nameDeclarator && nameDisplay) {
  nameDeclarator.addEventListener("click",() => {
    nameDisplay.innerText = helloSentence
    nameDeclarator.style.display = "none"
  })
} else {
  console.error("Button with ID #namedeclarator not found.");
}

