const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');
menuButton.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') !== 'true';
  menuButton.setAttribute('aria-expanded', String(open));
  navigation.classList.toggle('open', open);
});
navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  menuButton.setAttribute('aria-expanded', 'false');
  navigation.classList.remove('open');
}));
document.querySelector('#year').textContent = new Date().getFullYear();
document.querySelector('#contact-form').addEventListener('submit', event => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const message = `Name: ${data.get('name')}\nEmail: ${data.get('email')}\n\n${data.get('message')}`;
  const result = document.querySelector('#form-result');
  result.replaceChildren();
  const summary = document.createElement('div');
  summary.textContent = 'Your inquiry is ready to copy. It has not been sent.\n\n' + message;
  const button = document.createElement('button');
  button.type = 'button';
  button.textContent = 'Copy inquiry';
  button.addEventListener('click', async () => {
    try { await navigator.clipboard.writeText(message); button.textContent = 'Copied'; }
    catch { button.textContent = 'Select and copy the text above'; }
  });
  result.append(summary, button);
  result.hidden = false;
});
