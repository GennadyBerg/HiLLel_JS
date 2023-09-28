// switch


// const fingerNumber = +prompt('Enter finger number', 0);

// switch (fingerNumber) {
//             case 1:
//                         alert("Thomb");
//                         break
//             case 2:
//                         alert("Indexed");
//                         break
//             case 3:
//                         alert("Middle");
//                         break
//             case 4:
//                         alert("Ring");
//                         break
//             case 5:
//                         alert("Pinky");
//                         break

//                         default:
//                                     alert('Entered wrong value')
//             };


// short  math operator

// const price = 0
// const applePrice = 10;
// const orangePrice = 12
// const kiwiPrice = 15;
// const disare = confirm("do You want fruits?");
// if (!desire){
//             alert ("Go away");
// }
// else {
//             const desireApples = confirm("Do you want apples?");
//             if(desireApples) {
//                         const amountApples = +prompt("How many apples do You want");
//                         price = price + amountApples * applePrice;
//             }
//             const desireOrange = confirm("Do you want orange?");
//             if(desireOrange) {
//                         const amountOrange = +prompt("How many oranges do You want");
//                         price = price + amountOrange * orangePricePrice;
//             }const desireKiwi = confirm("Do you want kiwi?");
//             if(desireKiwi) {
//                         const amountKiwi = +prompt("How many kiwi do You want");
//                         price = price + amountKiwi * kiwiPricePrice;
//             }

// }
// alert(price);


//ternary operator


// const numberToConvert = prompt('Enter number>', 0);

// if (numberToConvert >= 0) {
//             console.log(
//                         'ABS>',
//                         numberToConvert
//             );

// }
// else {
//             console.log(
//                         'ABS>',
//                         -numberToConvert)
// }

// const num = (numberToConvert >= 0) ? numberToConvert : -numberToConvert;
// console.log(num);

///lOGICAL OPERATORS

// const ok = true;
// const no = false;
// const maybeOk = true;
// const result = ok && maybeOk;
// //inverse   
// //  !
// console.log(
//             '&&>',result
// );

let currentHours = new Date().getHours();
console.log(currentHours);
if (currentHours >= 19 && currentHours < 21) {
            console.log('Time to learn');
}
else {
            console.log('FRee time');
}
