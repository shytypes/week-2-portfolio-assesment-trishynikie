let form = document.querySelector('#contactForm')

const handleFormSubmit = (e) => {
  let firstName = document.querySelector('#firstName').value
  let lastName = document.querySelector('#lastName').value
  let email = document.querySelector('#email').value
  let message = document.querySelector('#message').value
  let resultView = document.querySelector('#result-view')

  e.preventDefault()
  const userData = {
    firstName: firstName,
    lastName: lastName,
    email: email,
    message: Message,
  }

  const userDataAsJson = JSON.stringify(userData)

  console.log(userData)
  console.log(
    '================================================================='
  )
  console.log(userDataAsJson)

  resultView.innerHTML = `<li>First Name: ${userData.firstName}</li><li>Last Name: ${userData.lastName}</li><li>Email: ${userData.email}</li><li>Message: ${userData.message}</li>`
}
form.addEventListener('submit', handleFormSubmit)
