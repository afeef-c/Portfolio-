// public/contact.js

// Fetch credentials from the server
fetch('/config')
  .then(response => response.json())
  .then(config => {
    // Initialize EmailJS with the fetched user ID
    emailjs.init(config.userID);
    
    document.getElementById('contact-form').addEventListener('submit', function(event) {
      event.preventDefault();

      // Show loading message
      document.querySelector('.loading').style.display = 'block';
      document.querySelector('.error-message').style.display = 'none';
      document.querySelector('.sent-message').style.display = 'none';

      // Get form data
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const subject = document.getElementById('subject').value;
      const message = document.querySelector('textarea[name="message"]').value;

      // Prepare the email parameters for EmailJS
      const templateParams = {
        name: name,
        email: email,
        subject: subject,
        message: message,
      };

      // Send the form data using EmailJS
      emailjs.send(config.serviceID, config.templateID, templateParams)
        .then(function(response) {
          console.log('SUCCESS!', response.status, response.text);

          // Show the success message
          document.querySelector('.loading').style.display = 'none';
          document.querySelector('.sent-message').style.display = 'block';

          // Reset the form
          document.getElementById('contact-form').reset();
        }, function(error) {
          console.error('FAILED...', error);

          // Show the error message
          document.querySelector('.loading').style.display = 'none';
          document.querySelector('.error-message').style.display = 'block';
        });
    });
  })
  .catch(error => console.error('Error fetching config:', error));
