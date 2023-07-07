const synth = window.speechSynthesis
let textInputField = document.querySelector("#text-input")
const utterThis = new SpeechSynthesisUtterance()
utterThis.lang = "en-US"

form.onsubmit = (event) => {
    event.preventDefault()
    ourText = textInputField.value
    utterThis.text = ourText
    synth.speak(utterThis)
    textInputField.value = ""
  }