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

const slider = document.querySelector('.vehicle-slider');
if (slider) {
  const slides = [...slider.querySelectorAll('.vehicle-slide')];
  const dots = [...slider.querySelectorAll('[data-slide]')];
  const pauseButton = slider.querySelector('.slider-pause');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  let current = 0;
  let paused = reducedMotion.matches;
  let hovered = false;
  let focused = false;
  let timer;
  function schedule() {
    clearInterval(timer);
    if (!paused && !hovered && !focused && !document.hidden) {
      timer = setInterval(() => show(current + 1), 6000);
    }
  }
  function show(index) {
    current = (index + slides.length) % slides.length;
    slides.forEach((slide, i) => {
      slide.classList.toggle('is-active', i === current);
      slide.setAttribute('aria-hidden', String(i !== current));
      slide.inert = i !== current;
      dots[i].classList.toggle('is-active', i === current);
      dots[i].setAttribute('aria-pressed', String(i === current));
    });
  }
  function updatePause() {
    pauseButton.textContent = paused ? 'Play' : 'Pause';
    pauseButton.setAttribute('aria-label', paused ? 'Start automatic rotation' : 'Pause automatic rotation');
    schedule();
  }
  dots.forEach((dot, i) => dot.addEventListener('click', () => { show(i); schedule(); }));
  slider.querySelectorAll('[data-direction]').forEach(button => button.addEventListener('click', () => {
    show(current + Number(button.dataset.direction)); schedule();
  }));
  pauseButton.addEventListener('click', () => { paused = !paused; updatePause(); });
  slider.addEventListener('mouseenter', () => { hovered = true; schedule(); });
  slider.addEventListener('mouseleave', () => { hovered = false; schedule(); });
  slider.addEventListener('focusin', () => { focused = true; schedule(); });
  slider.addEventListener('focusout', event => { focused = slider.contains(event.relatedTarget); schedule(); });
  slider.addEventListener('keydown', event => {
    if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
      event.preventDefault(); show(current + (event.key === 'ArrowRight' ? 1 : -1)); schedule();
    }
  });
  reducedMotion.addEventListener('change', () => { paused = reducedMotion.matches; updatePause(); });
  document.addEventListener('visibilitychange', schedule);
  updatePause();
}
