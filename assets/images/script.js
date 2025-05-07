document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault()

  const firstName = document.getElementById('firstName').value
  const lastName = document.getElementById('lastName').value
  const email = document.getElementById('email').value
  const message = document.getElementById('message').value

  const output = `
      <h3>Form Submission:</h3>
      <p><strong>First Name:</strong> ${firstName}</p>
      <p><strong>Last Name:</strong> ${lastName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong> ${message}</p>
    `

  document.getElementById('formOutput').innerHTML = output

  this.reset()
})
