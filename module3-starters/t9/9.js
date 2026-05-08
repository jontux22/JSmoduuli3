const button = document.getElementById("start");

button.addEventListener("click", function() {
  const input = document.getElementById("calculation").value;
  const result = document.getElementById("result");

  let num1, num2;

  if (input.includes("+")) {
    const parts = input.split("+");
    num1 = Number(parts[0]);
    num2 = Number(parts[1]);
    result.textContent = "Result: " + (num1 + num2);
  } else if (input.includes("-")) {
    const parts = input.split("-");
    num1 = Number(parts[0]);
    num2 = Number(parts[1]);
    result.textContent = "Result: " + (num1 - num2);
  } else if (input.includes("*")) {
    const parts = input.split("*");
    num1 = Number(parts[0]);
    num2 = Number(parts[1]);
    result.textContent = "Result: " + (num1 * num2);
  } else if (input.includes("/")) {
    const parts = input.split("/");
    num1 = Number(parts[0]);
    num2 = Number(parts[1]);
    if (num2 === 0) {
      result.textContent = "Cannot divide by zero!";
    } else {
      result.textContent = "Result: " + (num1 / num2);
    }
  } else {
    result.textContent = "Invalid input!";
  }
});