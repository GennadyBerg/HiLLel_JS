let userNum1 = +prompt("enter num");
let userNum2 = +prompt("enter num");
let userNum3 = prompt("enter func");

const calculate = () => {
    switch (userNum3) {
        case "+": return userNum1 + userNum2;
        case "-": return userNum1 - userNum2;
        case "*": return userNum1 * userNum2;
        case "/": return userNum1 / userNum2;
        default: alert(`incorrect operator: ${userNum3}`)
    }
}

alert(calculate(userNum1, userNum2, userNum3))





// let userNum1 = +prompt("Enter number");
// let userNum2 = +prompt("Enter easy number");
// const calc= (userNum1, userNum2) => {
//     for (let i = 1; i < userNum1; i++) {
//         if (i % userNum2 === 0) {
//             console.log(i );
//         }
//         else if( userNum1<userNum2 ){
//             console.log("sorry, no number");
//             break
//         }

//     }
// }
// calc( userNum1, userNum2);