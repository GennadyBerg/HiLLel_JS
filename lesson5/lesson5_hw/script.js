// Home Work


let result = 1;
const n = +prompt('Enter any natural number, please',1);
while (n < 0 || n % 1 !== 0 || n>50 ) {
            alert('You enter wrong \(or too big\) number');
            break;
            if (n===0 ) {
                       console.log(`n! = ${result}`);
                        
            }
}
if (n === 1) {
            result = n;
}
else {
            for (let i = 1; i < n; i++) {
                        result += result * i;
                        // console.log(result);

            }
}
console.log('Factorial', n, ' = ', result);
alert(`Factorial ${n}  =  ${result}`);
/// shot variant
// let counter = 1;
// while(n){
//             counter*=n;
//             n--;
// }
// console.log(counter);
