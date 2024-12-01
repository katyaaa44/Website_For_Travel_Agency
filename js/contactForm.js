const contact_form = document.getElementById('contacts_form');
const iframes = document.querySelectorAll('iframe');
emailjs.init('SaejRlbYmYdu9OBun');


contact_form.addEventListener('submit', (event) => {
  event.preventDefault();
  event.stopPropagation();

  // If all fields are valid, the form is submitted
  if (contact_form.checkValidity() ) {
    const alertPlaceholder = document.getElementById('liveAlertPlaceholder');
    showAlert('We have received your message and will contact you shortly!',  'success', 5000, alertPlaceholder) ;
    
    // Send a message
    emailjs.send("service_0vinied","template_hipraf1",{
      name : document.getElementById('name').value,
      email: document.getElementById('contact_email').value,
      message : document.getElementById('message').value
    });

    // Reset the form
    contact_form.reset(); 
    contact_form.classList.remove('was-validated');

  } else {
    contact_form.classList.add('was-validated');
    appendAlert('Error occured', 'danger');
  }
});


