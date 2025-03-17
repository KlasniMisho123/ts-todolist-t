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
    <div class="list-display-div"> 
      
    </div> 
    
  </div>
`

// setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)

let helloSentence = helloWorld("Misho")

console.log(helloSentence)
const nameDeclarator = document.querySelector<HTMLButtonElement>('#namedeclarator')
const nameDisplay = document.querySelector<HTMLHeadingElement>('.title-h1')
const todoDiv = document.querySelector<HTMLDivElement>(".add-to-list-div")
const addBtn = document.querySelector<HTMLButtonElement>('#addToList')
const newTodo = document.querySelector<HTMLInputElement>('#todoInput')


if(nameDeclarator && nameDisplay && todoDiv) {
  nameDeclarator.addEventListener("click",() => {
    nameDisplay.innerText = helloSentence
    nameDeclarator.style.display = "none"
    todoDiv.style.display = "flex"
  })
} else {
  console.error("Button with ID #namedeclarator not found.");
}


if (addBtn && newTodo) {
  addBtn.addEventListener("click", () => handleListAddition(newTodo.value));
}

function handleListAddition(todo: string): void{
  const listDisplayDiv = document.querySelector<HTMLDivElement>(".list-display-div ")

  if (listDisplayDiv && todo) {
    const newTodoElement = document.createElement("p");
    newTodoElement.innerText = 1 + " "+ todo;

    newTodoElement.classList.add("todoItem");

    listDisplayDiv?.appendChild(newTodoElement);
  }
  
  console.log(todo)
}

