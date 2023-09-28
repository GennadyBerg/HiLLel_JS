function calculate() {
    const firstNumber = Number(document.getElementById("first").value);
    const secondNumber = Number(document.getElementById("second").value);
    const funSel = document.getElementById("funSel").value;
  
    switch (funSel) {
      case "+":
        return firstNumber + secondNumber;
      case "-":
        return firstNumber - secondNumber;
      case "*":
        return firstNumber * secondNumber;
      case "/":
        return firstNumber / secondNumber;
      default:
        return "Invalid function";
    }
  }
  
  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = calculate();


    

