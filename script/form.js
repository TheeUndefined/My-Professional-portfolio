// Contact Form Submission (dynamic)
document.getElementById('contact-form').onsubmit = function(e) {
  e.preventDefault(); // Prevent default form submission
  
  // Send form data via Formspree
  const form = document.getElementById('contact-form');
  const formData = new FormData(form);

  fetch(form.action, {
    method: 'POST',
    body: formData,
    headers: {
      'Accept': 'application/json'
    }
  })
  .then(response => {
    if (response.ok) {
      document.getElementById('thank-you-message').style.display = 'block'; // Show thank-you message
      form.reset(); // Clear the form fields after submission
    } else {
      alert('Oops! There was a problem submitting your form.');
    }
  })
  .catch(error => {
    alert('Error: ' + error.message);
  });
};


