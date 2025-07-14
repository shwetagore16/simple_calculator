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

// Calculate and show result
function calculate() {
  try {
    if (display.value.trim() === "") return;
    display.value = eval(display.value);
  } catch (err) {
    display.value = "Error";
  }
}

// Toggle light/dark theme
function toggleTheme() {
  document.body.classList.toggle("light-mode");
}

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
