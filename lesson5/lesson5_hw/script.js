// Home Work


let result = 1;
const n = +prompt('Enter any natural number, please');
while (n <= 0 || n % 1 !== 0) {
            alert('You enter wrong number')
            break;
}
if (n === 1) {
            result = n;
}
else {
            for (let i = 1; i < n; i++) {
                        result += result * i;
                        console.log(result);

            }
}
console.log('Factorial', n, ' = ', result);
alert(`Factorial ${n}  =  ${result}`);