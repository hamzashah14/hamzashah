// Form Submission

const scriptURL = 'https://script.google.com/macros/s/AKfycbwpLH-gXlpOZdDdF5BPyGtrlRpowgaIXAwJ4IRr-x7xoGeWudpiw2PHj06EFlBN85Bx/exec'
const form = document.forms['submit-to-google-sheet']
  const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
      msg.innerHTML = "Message is sent  Successfully"
      setTimeout(function(){
          msg.innerHTML = ""
      }, 5000)
      form.reset()
    })
    .catch(error => console.error('Error!', error.message))
})