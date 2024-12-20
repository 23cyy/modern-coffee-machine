const coffeeMachine = document.querySelector('.coffee-machine');
const button = document.querySelector('.machine-button');

// Only start brewing when the red button is clicked
button.addEventListener('click', (e) => {
  e.stopPropagation(); // prevent any bubbling if necessary
  if (coffeeMachine.classList.contains('brewing')) return;

  coffeeMachine.classList.add('brewing');

  // After a delay, stop brewing and reset
  setTimeout(() => {
    coffeeMachine.classList.remove('brewing');
  }, 4000);
});
