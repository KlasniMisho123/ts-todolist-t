import './style.css'
import emailLogo from '../public/email.png'
// import { setupCounter } from './counter.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <img src="${emailLogo}" class="logo" alt="Vite logo" />
    <h1>Email Form</h1>
    <div class="card">
      <input class="email-from email-form-input " placeholder="From"/>
      <input class="email-header email-form-input" placeholder="Header"/>
      <input class="email-subject email-form-input" placeholder="Subject"/>
      <textarea class="email-text email-form-input" placeholder="text"> </textarea>

      <button id="counter" type="button">Send Email</button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`

const bodyElement = document.body as HTMLBodyElement;
const emailFromElement = document.querySelector<HTMLInputElement>(".email-from")
const emailHeaderElement = document.querySelector<HTMLInputElement>(".email-header")
const emailSubjectElement = document.querySelector<HTMLInputElement>(".email-subject")
const emailTextElement = document.querySelector<HTMLInputElement>(".email-text")

bodyElement.addEventListener("keypress", (e) => {
  if(e.key === "Enter") {

    if(emailFromElement && emailHeaderElement && emailSubjectElement && emailTextElement) {
      let emailFrom = emailFromElement.value
      let emailHeader = emailHeaderElement.value
      let emailSubject = emailSubjectElement.value
      let emailText = emailTextElement.value
      handleSubmit(emailFrom, emailHeader, emailSubject, emailText)
    }
  }
})

// setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)


async function handleSubmit(from: string, header:string, subject: string, text: string) {
  try {
    console.log(`
      Email Sent By ${from}
      Email Header: ${header}
      Email subject: ${subject}
      ${text}
      `)
  } catch(err) {
    console.log("Err: ", err)
  } finally {
    resetInputValues()
  }
  
}