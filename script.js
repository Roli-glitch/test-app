function handleSubmit(event) {
  event.preventDefault();
  const status = document.getElementById('form-status');
  const name = event.target.name.value.trim();
  const email = event.target.email.value.trim();
  const message = event.target.message.value.trim();

  if (!name || !email || !message) {
    status.textContent = 'Please complete all fields before submitting.';
    return;
  }

  status.textContent = 'Thanks, your inquiry has been received. We will contact you shortly.';
  event.target.reset();
}
