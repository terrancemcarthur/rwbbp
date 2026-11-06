const signature = document.querySelector('#signature');
const status = document.querySelector('#status');
document.querySelector('#copy').addEventListener('click', async () => {
  try {
    await navigator.clipboard.write([new ClipboardItem({
      'text/html': new Blob([signature.innerHTML], {type: 'text/html'}),
      'text/plain': new Blob([signature.innerText], {type: 'text/plain'})
    })]);
    status.textContent = 'Signature copied. Paste it into Gmail’s signature editor.';
  } catch {
    const range = document.createRange();
    range.selectNodeContents(signature);
    const selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
    status.textContent = 'Signature selected. Press Ctrl+C (Windows) or Command+C (Mac), then paste into Gmail.';
  }
});
