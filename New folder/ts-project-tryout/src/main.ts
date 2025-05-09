import './style.css'
import emailLogo from '../public/email.png'
import axios from "axios"


document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <img src="${emailLogo}" class="logo" alt="Vite logo" />
    <h1>Email Form</h1>
    <div class="card">
      <input class="email-from email-form-input " placeholder="From"/>
      <input class="email-subject email-form-input" placeholder="Subject"/>
      <textarea class="email-text email-form-input" placeholder="text"> </textarea>

      <button id="send-email-btn" type="button">Send Email</button>
    </div>
    <p class="read-the-docs"> 
    </p>
  </div>
`

const bodyElement = document.body as HTMLBodyElement;
const emailFromElement = document.querySelector<HTMLInputElement>(".email-from")
const emailSubjectElement = document.querySelector<HTMLInputElement>(".email-subject")
const emailTextElement = document.querySelector<HTMLInputElement>(".email-text")
const sendEmailBtnElement = document.querySelector<HTMLButtonElement>("#send-email-btn")


sendEmailBtnElement?.addEventListener("click", () => {
  if (emailFromElement && emailSubjectElement && emailTextElement) {
    let emailFrom = emailFromElement.value;
    let emailSubject = emailSubjectElement.value;
    let emailText = emailTextElement.value;

    handleSubmit(emailFrom, emailSubject, emailText);
  } else {
    console.error("Email input fields are not available.");
  }
});

bodyElement.addEventListener("keypress", (e) => {
  if(e.key === "Enter") {

    if(emailFromElement  && emailSubjectElement && emailTextElement) {
      let emailFrom = emailFromElement.value
      let emailSubject = emailSubjectElement.value
      let emailText = emailTextElement.value
      handleSubmit(emailFrom, emailSubject, emailText)
    }
  }
})

function resetInputValues() {
  if(emailFromElement  && emailSubjectElement && emailTextElement) {
    emailFromElement.value = ""
    emailSubjectElement.value = ""
    emailTextElement.value = ""
  }
}

async function handleSubmit(from: string, subject: string, text: string) {
  try {
    console.log(`
      Email Sent By ${from}
      Email subject: ${subject}
      ${text}
      `)
  } catch(err) {
    console.log("Err: ", err)
  } finally {
    resetInputValues()
  }
}

async function sendApiRequiest() {
  let randomNumber = Math.floor(Math.random() * 99)
  try {
    const apiAdress = "https://jsonplaceholder.typicode.com/posts"
    const response = await axios.get(apiAdress)
    const responseData = response.data


    const randomTitle =` Random Title: ${responseData[randomNumber].title}`
    const randomTitleElement = document.querySelector<HTMLParagraphElement>(".read-the-docs")

    if (randomTitleElement) {
      randomTitleElement.append(randomTitle);
    }
  } catch(err){
    return ("Api Err")
  }
}

sendApiRequiest()