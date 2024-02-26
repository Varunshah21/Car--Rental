const form = document.getElementById('car-form');

form.addEventListener('submit', (event) => {
  // Basic form validation (replace with your desired validations)
  if (!form.make.value || !form.model.value || !form.year.value || !form.location.value || !form.price.value) {
    alert('Please fill in all required fields.');
    event.preventDefault();
    return;
  }

  // Submit the form data (replace with your backend integration)
  // event.preventDefault(); // If submitting to backend
  console.log(new FormData(form));
});

const form = document.getElementById('car-form');

// Form validation
form.addEventListener('submit', (event) => {
  if (!form.checkValidity()) {
    event.preventDefault();
    event.stopPropagation();
  }
  form.classList.add('was-validated');
});

// Progress bar animation
let currentStep = 1;
form.addEventListener('change', () => {
  const progress = Math.floor((currentStep / 5) * 100);
  document.querySelector('.progress-bar').style.width = `${progress}%`;
});
