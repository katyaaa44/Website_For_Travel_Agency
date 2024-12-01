
const reservation_form = document.getElementById('reservation_form');
const contact_form = document.getElementById('contact-form');
const tour_description = document.getElementById('tour_description');
const footer_description = document.getElementById('footer_description');

const tourDates = {
  Dubai: ['2024-12-05', '2024-12-10', '2024-12-20'],
  Paris: [ '2024-12-10', '2024-12-11', '2024-12-15'],
  Rome: [ '2024-12-15', '2024-12-18', '2024-12-20'],
  Cairo: ['2024-11-12', '2024-11-19', '2024-12-08'],
  NYC: [ '2024-12-12', '2024-12-15', '2024-12-19'],
  Tokyo: ['2024-12-15', '2024-12-20', '2024-12-26'],
};



function resetForm(){
  contact_form.reset();
  contact_form.classList.remove('was-validated');
  const inputs = contact_form.querySelectorAll('.is-valid, .is-invalid');
  inputs.forEach((input) => {
    input.classList.remove('is-valid', 'is-invalid');
  });
};

document.getElementById('reserve_option1').addEventListener('click', () => {
  resetForm();

  const selectElement = document.getElementById('tour_name');
  const options = selectElement.options; 
  for (let i = 0; i < options.length; i++) {
    options[i].removeAttribute('selected');
  }

  for (let i = 0; i < options.length; i++) {
    if (options[i].text === 'Dubai, UAE') {
      options[i].setAttribute('selected', 'selected');
      break;
    }
  }


  flatpickr('#tourDate', {
    enable: tourDates.Dubai, // Allow only available dates
    dateFormat: 'Y-m-d',
    disableMobile: true, // Use custom calendar on mobile devices
  });


});

document.getElementById('reserve_option2').addEventListener('click', () => {
  resetForm();

  const selectElement = document.getElementById('tour_name');
  const options = selectElement.options; 
  for (let i = 0; i < options.length; i++) {
    options[i].removeAttribute('selected');
  }

  for (let i = 0; i < options.length; i++) {
    if (options[i].text === 'Paris, France') {
      options[i].setAttribute('selected', 'selected');
      break;
    }
  }

  flatpickr('#tourDate', {
    enable: tourDates.Paris, // Allow only available dates
    dateFormat: 'Y-m-d',
    disableMobile: true, // Use custom calendar on mobile devices
  });
});

document.getElementById('reserve_option3').addEventListener('click', () => {
  resetForm();

  const selectElement = document.getElementById('tour_name');
  const options = selectElement.options; 
  for (let i = 0; i < options.length; i++) {
    options[i].removeAttribute('selected');
  }

  for (let i = 0; i < options.length; i++) {
    if (options[i].text === 'Rome, Italy') {
      options[i].setAttribute('selected', 'selected');
      break;
    }
  }


  flatpickr('#tourDate', {
    enable: tourDates.Rome, 
    dateFormat: 'Y-m-d',
    disableMobile: true, 
  });
});

document.getElementById('reserve_option4').addEventListener('click', () => {
  resetForm();

  const selectElement = document.getElementById('tour_name');
  const options = selectElement.options; 

  for (let i = 0; i < options.length; i++) {
    options[i].removeAttribute('selected');
  }

  for (let i = 0; i < options.length; i++) {
    if (options[i].text === 'Cairo, Egypt') {
      options[i].setAttribute('selected', 'selected');
      break;
    }
  }


  flatpickr('#tourDate', {
    enable: tourDates.Cairo,
    dateFormat: 'Y-m-d',
    disableMobile: true, 
  });
});

document.getElementById('reserve_option5').addEventListener('click', () => {
  resetForm();
  
  const selectElement = document.getElementById('tour_name');
  const options = selectElement.options; 

  for (let i = 0; i < options.length; i++) {
    options[i].removeAttribute('selected');
  }

  for (let i = 0; i < options.length; i++) {
    if (options[i].text === 'New York City, USA') {
      options[i].setAttribute('selected', 'selected');
      break;
    }
  }


  flatpickr('#tourDate', {
    enable: tourDates.NYC, 
    dateFormat: 'Y-m-d',
    disableMobile: true, 
  });
});

document.getElementById('reserve_option6').addEventListener('click', () => {
  resetForm();
  
  const selectElement = document.getElementById('tour_name');
  const options = selectElement.options; 

  for (let i = 0; i < options.length; i++) {
    options[i].removeAttribute('selected');
  }

  for (let i = 0; i < options.length; i++) {
    if (options[i].text === 'Tokyo, Japan') {
      options[i].setAttribute('selected', 'selected');
      break;
    }
  }


  flatpickr('#tourDate', {
    enable: tourDates.Tokyo, 
    dateFormat: 'Y-m-d',
    disableMobile: true, 
  });
});



document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contact-form');
  const firstNameInput = document.getElementById('First_name');
  const lastNameInput = document.getElementById('Last_name');
  const emailInput = document.getElementById('email');
  const tourNameSelect = document.getElementById('tour_name');
  const tourTypeInputs = document.getElementsByName('inlineRadioreserve_Options');
  const groupOptions = document.getElementById('groupOptions');
  const tourDateInput = document.getElementById('tourDate');

  // Updating the number of people when the slider is changed
  const groupSizeInput = document.getElementById('groupSize');
  const groupSizeValue = document.getElementById('groupSizeValue');
  if (groupSizeInput && groupSizeValue) {
    groupSizeInput.addEventListener('input', () => {
      groupSizeValue.textContent = `${groupSizeInput.value} People`;
    });
  }

  // Display the field for selecting the number of people for a group tour only
  Array.from(tourTypeInputs).forEach(input => {
    input.addEventListener('change', () => {
      if (input.value === 'Group') {
        groupOptions.style.display = 'block';
      } else {
        groupOptions.style.display = 'none';
      }
    });
  });

  // Validate input
  function validateInput(input, condition, errorMessage) {
    if (condition) {
      input.classList.remove('is-invalid');
      input.classList.add('is-valid');
      return true;
    } else {
      input.classList.remove('is-valid');
      input.classList.add('is-invalid');
      input.nextElementSibling.textContent = errorMessage;
      return false;
    }
  }

  // Validate name/surename 
  function validateName(input, minLength) {
    return validateInput(
      input,
      input.value.trim().length >= minLength,
      `This field should contain at least ${minLength} characters.`
    );
  }
  // Real-time validation
  firstNameInput.addEventListener('input', () => validateName(firstNameInput, 3));
  lastNameInput.addEventListener('input', () => validateName(lastNameInput, 3));

  // Validate email
  function validateEmail(input) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return validateInput(input, emailPattern.test(input.value), 'Please enter a valid email address.');
  }
  // Real-time validation
  emailInput.addEventListener('input', () => validateEmail(emailInput));

  // Validate selected tour
  function validateSelect(input) {
    return validateInput(input, input.value !== '', 'Please select a tour.');
  }
  

  // Validate tour type
  function validateTourType() {
    const selected = Array.from(tourTypeInputs).some(input => input.checked);
    const errorDiv = document.querySelector('.type-of-tour .invalid-feedback');
    if (selected) {
      errorDiv.style.display = 'none';
      return true;
    } else {
      errorDiv.style.display = 'block';
      return false;
    }
  }

  document.querySelectorAll('input[name="inlineRadioreserve_Options"]').forEach(radio => {
    radio.addEventListener('change', event => validateTourType());
  });

  // Check date
  function validateDate(input) {
    return validateInput(
      input,
      input.value !== '',
      'Please select a valid date.'
    );
  }
  
  // Real-time validation
  tourDateInput.addEventListener('input', () => validateDate(tourDateInput));

  function getTourDetails() {
    const selectedTourType = document.querySelector(
      'input[name="inlineRadioreserve_Options"]:checked'
    ).value;
  
    if (selectedTourType === "Individual") {
      return {
        tourType: "Individual",
        numP: 1, 
      };
    } else if (selectedTourType === "Group") {
      return {
        tourType: "Group",
        numP: groupSizeInput.value,
      };
    }
  }

  // Change avaliable dates if user changes TourName manualy
  tourNameSelect.addEventListener('change', function () {
    const selectedOption = this.options[this.selectedIndex].value;
    console.log('Selected Tour:', selectedOption);
    const dates = tourDates[selectedOption];
    flatpickr('#tourDate', {
      enable: dates, 
      dateFormat: 'Y-m-d',
      disableMobile: true, 
    });
  });

  // General form validation
  form.addEventListener('submit', event => {
    event.preventDefault();

    const isFirstNameValid = validateName(firstNameInput, 3);
    const isLastNameValid = validateName(lastNameInput, 3);
    const isEmailValid = validateEmail(emailInput);
    const isTourSelected = validateSelect(tourNameSelect);
    const isTourTypeValid = validateTourType();
    const isDateValid = validateDate(tourDateInput);


    // If all checks are true - send a message to the e-mail
    if (isFirstNameValid && isLastNameValid && isEmailValid && isTourSelected && isTourTypeValid && isDateValid) {
      const tourType = getTourDetails();
      // Send mail
      emailjs.init('SaejRlbYmYdu9OBun');
      emailjs.send("service_0vinied","template_6dykw96",{
        tour_name: tourNameSelect.value,
        first_name: firstNameInput.value,
        last_name: lastNameInput.value,
        email: emailInput.value,
        type : tourType.tourType,
        numP : tourType.numP,
        date: tourDateInput.value
       });
      
      const alertPlaceholder = document.getElementById('liveAlertPlaceholder2');
      showAlert('We have received your message and will contact you shortly!',  'success', 5000, alertPlaceholder) ;
     
      form.reset();
      document.querySelectorAll('.is-valid, .is-invalid').forEach(element => {
        element.classList.remove('is-valid', 'is-invalid');
      });
      groupOptions.style.display = 'none';

      document.getElementById('close').click();
    }
  });
  

});