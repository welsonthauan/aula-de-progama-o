const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');

buttons.forEach(btn => {
  btn.addEventListener('click', () => handleInput(btn.innerText));
});

function handleInput(value) {
  if (value === 'C') {
    display.innerText = '0';
  } else if (value === '=') {
    try {
      display.innerText = eval(display.innerText
        .replace('×', '*')
        .replace('÷', '/'));
    } catch {
      display.innerText = 'Erro';
    }
  } else {
    if (display.innerText === '0') {
      display.innerText = value;
    } else {
      display.innerText += value;
    }
  }
}

// suporte ao teclado
document.addEventListener('keydown', (e) => {
  if (!isNaN(e.key) || ['+', '-', '*', '/'].includes(e.key)) {
    handleInput(e.key);
  } else if (e.key === 'Enter') {
    handleInput('=');
  } else if (e.key === 'Backspace') {
    display.innerText = display.innerText.slice(0, -1) || '0';
  } else if (e.key.toLowerCase() === 'c') {
    handleInput('C');
  }
});