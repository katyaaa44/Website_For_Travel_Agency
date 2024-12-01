
const appendAlert = (message, type, placecholder) => {
  const wrapper = document.createElement('div')
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('')

  placecholder.append(wrapper)
}

function showAlert(message, type = 'success', duration = 5000, placecholder) {
  const alertPlaceholder = placecholder;

  // Creating a notification element
  const alertElement = document.createElement('div');
  alertElement.className = `alert alert-${type} alert-dismissible fade show`;
  alertElement.innerHTML = `
      ${message}
      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
  `;

  // Add a notification to the container
  alertPlaceholder.appendChild(alertElement);

  alertPlaceholder.style.display = 'block';

  // Showing the notification
  setTimeout(() => {
      alertElement.classList.remove('show');
      alertElement.classList.add('fade');
      setTimeout(() => {
          alertElement.remove();
          if (alertPlaceholder.childElementCount === 0) {
              alertPlaceholder.style.display = 'none';
          }
      }, 500);
  }, duration);
}