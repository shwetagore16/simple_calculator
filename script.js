const display = document.getElementById("display");

// Append clicked value to display
function appendValue(value) {
  display.value += value;
}

// Clear full display
function clearDisplay() {
  display.value = "";
}

// Delete last character
function backspace() {
  display.value = display.value.slice(0, -1);
}

// Handle percent (%) button
function percent() {
  if (display.value !== "") {
    try {
      display.value = (parseFloat(display.value) / 100).toString();
    } catch (err) {
      display.value = "Error";
    }
  }
}

// Calculate and show result
function calculate() {
  try {
    if (display.value.trim() === "") return;
    display.value = eval(display.value);
  } catch (err) {
    display.value = "Error";
  }
}

// Toggle light/dark theme using the switch
function toggleTheme() {
  const isLight = document.getElementById('theme-toggle').checked;
  if (isLight) {
    document.body.classList.add('light-mode');
  } else {
    document.body.classList.remove('light-mode');
  }
}

// Ensure toggle reflects current theme on load
window.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('theme-toggle');
  if (document.body.classList.contains('light-mode')) {
    toggle.checked = true;
  } else {
    toggle.checked = false;
  }
});

// Keyboard input support
document.addEventListener("keydown", (e) => {
  const allowedKeys = "0123456789/*-+.";
  if (allowedKeys.includes(e.key)) {
    appendValue(e.key);
  } else if (e.key === "Enter") {
    calculate();
  } else if (e.key === "Backspace") {
    backspace();
  } else if (e.key === "Escape") {
    clearDisplay();
  }
});
