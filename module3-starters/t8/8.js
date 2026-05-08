const button = document.getElementById("start");

button.addEventListener("click", function() {
  const num1 = Number(document.getElementById("num1").value);
  const num2 = Number(document.getElementById("num2").value);
  const operation = document.getElementById("operation").value;
  const result = document.getElementById("result");

  if (operation === "add") {
    result.textContent = "Result: " + (num1 + num2);
  } else if (operation === "sub") {
    result.textContent = "Result: " + (num1 - num2);
  } else if (operation === "multi") {
    result.textContent = "Result: " + (num1 * num2);
  } else if (operation === "div") {
    if (num2 === 0) {
      result.textContent = "Cannot divide by zero!";
    } else {
      result.textContent = "Result: " + (num1 / num2);
    }
  }
});