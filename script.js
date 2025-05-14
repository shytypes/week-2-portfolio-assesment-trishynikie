document.addEventListener('DOMContentLoaded', function () {
  console.log('Script is connected!') // Should appear in console

  // 1. Get form elements
  const form = document.getElementById('contactForm')
  const inputs = form.querySelectorAll('input, textarea')
  const button = form.querySelector('button')

  // 2. Basic form styling
  form.style.display = 'flex'
  form.style.flexDirection = 'column'
  form.style.gap = '15px'
  form.style.maxWidth = '500px'
  form.style.margin = '0 auto'
  form.style.padding = '20px'

  // 3. Style all inputs and textarea
  inputs.forEach((input) => {
    input.style.padding = '10px'
    input.style.fontSize = '16px'
    input.style.border = '1px solid #ccc'
    input.style.borderRadius = '4px'
  })

  // 4. Make textarea larger
  const textarea = document.getElementById('message')
  textarea.style.minHeight = '100px'

  // 5. Style the submit button
  button.style.padding = '10px 15px'
  button.style.background = '#4CAF50'
  button.style.color = 'white'
  button.style.border = 'none'
  button.style.borderRadius = '4px'
  button.style.cursor = 'pointer'
})
