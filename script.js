// Switches between the Home / Brain Babies / Blog / Say Hey! panels
// without reloading the page.

const buttons = document.querySelectorAll('.tab-button');
const panels = document.querySelectorAll('.tab-panel');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const target = button.dataset.tab;

    buttons.forEach(b => b.classList.remove('active'));
    panels.forEach(p => p.classList.remove('active'));

    button.classList.add('active');
    document.getElementById(target).classList.add('active');
  });
});
