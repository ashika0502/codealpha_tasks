let display = document.getElementById("display");

function append(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = "";
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = "Error";
  }
}

// Bonus: Keyboard support
document.addEventListener("keydown", function(event) {
  if ("0123456789+-*/.".includes(event.key)) {
    append(event.key);
  }
  if (event.key === "Enter") {
    calculate();
  }
  if (event.key === "Backspace") {
    display.value = display.value.slice(0, -1);
  }
});
