document.addEventListener('DOMContentLoaded', function () {
  // DOM Elements
  const contactForm = document.getElementById('contactForm')
  const resultContainer = document.getElementById('result-view')
  const formInputs = {
    firstName: document.getElementById('firstName'),
    lastName: document.getElementById('lastName'),
    email: document.getElementById('email'),
    message: document.getElementById('message'),
  }

  // Create result list element if it doesn't exist
  if (!resultContainer) {
    const newResultContainer = document.createElement('ul')
    newResultContainer.id = 'result-view'
    document.querySelector('main').appendChild(newResultContainer)
  }

  // Form submission handler
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault()

    // Validate form
    if (!validateForm()) {
      return
    }

    // Create and display results
    displayResults(getFormData())

    // Reset form
    resetForm()

    // Optional: Send data to server
    logFormData()
  })

  // Helper functions
  function getFormData() {
    return {
      firstName: formInputs.firstName.value.trim(),
      lastName: formInputs.lastName.value.trim(),
      email: formInputs.email.value.trim(),
      message: formInputs.message.value.trim(),
      submissionTime: new Date(),
    }
  }

  function validateForm() {
    let isValid = true

    // Clear previous error messages
    document.querySelectorAll('.error-message').forEach((el) => el.remove())

    // Validate each field
    Object.entries(formInputs).forEach(([key, input]) => {
      if (!input.value.trim()) {
        isValid = false
        const errorMsg = document.createElement('span')
        errorMsg.className = 'error-message'
        errorMsg.textContent = `Please enter your ${key}`
        errorMsg.style.color = 'red'
        errorMsg.style.display = 'block'
        input.insertAdjacentElement('afterend', errorMsg)
      }
    })

    // Additional email validation
    if (
      formInputs.email.value.trim() &&
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formInputs.email.value)
    ) {
      isValid = false
      const emailError = document.createElement('span')
      emailError.className = 'error-message'
      emailError.textContent = 'Please enter a valid email address'
      emailError.style.color = 'red'
      emailError.style.display = 'block'
      formInputs.email.insertAdjacentElement('afterend', emailError)
    }

    return isValid
  }

  function displayResults(data) {
    // Create DOM elements
    const resultList = document.createElement('ul')

    // Add result items
    const resultItems = [
      { label: 'Name', value: `${data.firstName} ${data.lastName}` },
      { label: 'Email', value: data.email },
      { label: 'Message', value: data.message },
      { label: 'Submitted', value: data.submissionTime.toLocaleString() },
    ]

    resultItems.forEach((item) => {
      const listItem = document.createElement('li')
      const strong = document.createElement('strong')
      strong.textContent = `${item.label}: `
      listItem.appendChild(strong)
      listItem.appendChild(document.createTextNode(item.value))
      resultList.appendChild(listItem)
    })

    // Clear previous results and add new ones
    resultContainer.innerHTML = ''
    resultContainer.appendChild(resultList)

    // Add success message
    const successMsg = document.createElement('p')
    successMsg.textContent = 'Form submitted successfully!'
    successMsg.style.color = 'green'
    successMsg.style.fontWeight = 'bold'
    resultContainer.insertAdjacentElement('beforebegin', successMsg)

    // Scroll to results
    resultContainer.scrollIntoView({ behavior: 'smooth' })
  }

  function resetForm() {
    contactForm.reset()
    // Clear any remaining error messages
    document.querySelectorAll('.error-message').forEach((el) => el.remove())
  }

  function logFormData() {
    const formData = getFormData()
    console.log('Form submitted:', {
      name: `${formData.firstName} ${formData.lastName}`,
      email: formData.email,
      message: formData.message,
      timestamp: formData.submissionTime,
    })
  }
})
