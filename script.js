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
}
// 6. Form submission handler
  form.addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent default form submission
    
    // 7. Get form values
    const formData = {
      firstName: document.getElementById('firstName').value,
      lastName: document.getElementById('lastName').value,
      email: document.getElementById('email').value,
      message: document.getElementById('message').value,
      timestamp: new Date().toLocaleString()
    };

    // 8. Simple validation
    if (!formData.firstName || !formData.lastName || !formData.email) {
      alert('Please fill in all required fields');
      return;
    }

    // 9. Display results
    displayResults(formData);
    
    // 10. Reset form
    form.reset();
  });

  // 11. Function to display results
  function displayResults(data) {
    // Create HTML for results
    const resultHTML = `
      <li><strong>Name:</strong> ${data.firstName} ${data.lastName}</li>
      <li><strong>Email:</strong> ${data.email}</li>
      <li><strong>Message:</strong> ${data.message || 'No message provided'}</li>
      <li><strong>Submitted:</strong> ${data.timestamp}</li>
    `;
    
    // Insert results into DOM
    resultView.innerHTML = resultHTML;
    
    // Scroll to results
    resultView.scrollIntoView({ behavior: 'smooth' });
    
    // Console log for debugging
    console.log('Form submitted:', data);
  }

)
