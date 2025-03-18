import axios from "axios"
import math from "math"

export function setupCounter(element: HTMLButtonElement) {
  let counter = 0
  const setCounter = (count: number) => {
    counter = count
    element.innerHTML = `count is ${counter}`
  }
  element.addEventListener('click', () => setCounter(counter + 1))
  setCounter(0)
}


async function sendApiRequiest() {
  let randomNumber = Math.floor(Math.random() * 99)
  try {
    const apiAdress = "https://jsonplaceholder.typicode.com/posts"
    const response = await axios.get(apiAdress)
    const responseData = response.data

    return (responseData[randomNumber].title)

  } catch(err){
    return ("Api Err")
  }
}

export const randomTitle = sendApiRequiest()
