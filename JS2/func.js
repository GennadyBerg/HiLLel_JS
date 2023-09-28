let userNum1 = +prompt("Enter number");
let userNum2 = +prompt("Enter easy number");
const calc= (userNum1, userNum2) => {
    for (let i = 1; i < userNum1; i++) {
        if (i % userNum2 === 0) {
            console.log(i );
        }
        else if( userNum1>userNum2 ){
            console.log("sorry, no number");
        }

    }
    return result;
}
console.log (calc( userNum1, userNum2))1;






















// const userNum1 = document.getElementById("num1");
// const userNum2 = document.getElementById("num2");

//         const button = document.getElementById("submitButton");
//         const resultDiv = document.querySelector(".result")

//         button.addEventListener("click", function () {
//             const value = Number(num1.value);
//             if (isNaN(value)) {
//                 resultDiv.textContent = "введено не число";
//                 return;
//             }
//             const n = Number(value);
//             let res = '';
//             for (let i = 1; i <= n; i++) {
//                 if (i % userNum2 === 0) {
//                     res += i + " ";
//                 }
//             }
//             resultDiv.textContent = res;


//         });
