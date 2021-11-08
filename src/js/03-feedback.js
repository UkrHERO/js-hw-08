import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
form.addEventListener('input', throttle(onFormInput, 500));

const submitBtn = document.querySelector('[type="submit"]');
submitBtn.addEventListener('click', onFormSubmit);

localTextarea();

const formData = {};

function onFormInput(event) {
  formData[event.target.name] = event.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

function onFormSubmit(event) {
  event.preventDefault();
  form.reset();
  localStorage.removeItem('feedback-form-state');
  console.log(formData);
}

function localTextarea() {
  const savedInput = localStorage.getItem('feedback-form-state');
  const readyInput = JSON.parse(savedInput);
  if (readyInput) {
    document.querySelector('[name="email"]').value = readyInput.email;
    document.querySelector('[name="message"]').value = readyInput.message;
  }
}
