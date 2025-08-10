function add(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}
function divide(a, b) {
    if (b === 0) return "Cannot divide by zero";
    return a / b;
}

document.getElementById("add").addEventListener("click", function () {
    const num1 = parseFloat(document.getElementById("number1").value) || 0;
    const num2 = parseFloat(document.getElementById("number2").value) || 0;
    document.getElementById("calculation-result").textContent = add(num1, num2);
});

document.getElementById("subtract").addEventListener("click", function () {
    const num1 = parseFloat(document.getElementById("number1").value) || 0;
    const num2 = parseFloat(document.getElementById("number2").value) || 0;
    document.getElementById("calculation-result").textContent = subtract(num1, num2);
});

document.getElementById("multiply").addEventListener("click", function () {
    const num1 = parseFloat(document.getElementById("number1").value) || 0;
    const num2 = parseFloat(document.getElementById("number2").value) || 0;
    document.getElementById("calculation-result").textContent = multiply(num1, num2);
});

document.getElementById("divide").addEventListener("click", function () {
    const num1 = parseFloat(document.getElementById("number1").value) || 0;
    const num2 = parseFloat(document.getElementById("number2").value) || 0;
    document.getElementById("calculation-result").textContent = divide(num1, num2);
});
