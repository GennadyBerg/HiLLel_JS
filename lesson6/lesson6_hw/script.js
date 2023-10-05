const arr = [false, 12, '23424', false, 324, null, 5, 0, 0, 9, undefined, NaN, 6, 7];
const result = arr.filter(x=>x);
console.log(result);

//iterator
// let i = 0;
// const result = [];
// arr.forEach(element => {
//             if (element) {
//                         result[i] = element;
//                         i++;
//             }
//             console.log(result);
// });
