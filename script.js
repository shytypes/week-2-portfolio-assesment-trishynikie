document.addEventListener('DOMContentLoaded', function () {
  const contactForm = document.getElementById('contactForm')
  const resultView = document.getElementById('result-view')

  contactForm.addEventListener('submit', function (e) {
    e.preventDefault()

    // Get form values
    const firstName = document.getElementById('firstName').value
    const lastName = document.getElementById('lastName').value
    const email = document.getElementById('email').value
    const message = document.getElementById('message').value

    // Create result HTML
    const resultHTML = `
      <li><strong>Name:</strong> ${firstName} ${lastName}</li>
      <li><strong>Email:</strong> ${email}</li>
      <li><strong>Message:</strong> ${message}</li>
      <li><strong>Submitted:</strong> ${new Date().toLocaleString()}</li>
    `

    // Display results
    resultView.innerHTML = resultHTML

    // Reset form
    contactForm.reset()

    // Scroll to results
    resultView.scrollIntoView({ behavior: 'smooth' })

    // Optional: Send data to server here
    console.log('Form submitted:', { firstName, lastName, email, message })
  })
})
