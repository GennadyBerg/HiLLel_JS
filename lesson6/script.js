//splice
// const arr = [1234, 34567, 678, 56, 8, 7865, 789, null, undefined];

// // const subArray = arr.splice(2,3);
// // const subArray = arr.splice(3, 2, "x", "r");
// const subArray = arr.slice(2,5);
// console.log(arr, subArray);


// const arr = [1, 3, 5, NaN, null, undefined, 3456, 768, '678i9', 2345, 467];
// const arr1 = [2,4,6];
// const d = ['f', 'ujh', 'erte'];
// console.log(arr);
// console.log(arr1);
// const c = arr.concat(arr1);
// console.log(c);
// console.log(c.concat(d));


// 

///split   Join

// const joined = arr.join('+');
// console.log(joined);
// const splited = joined.split('    ');
// console.log(splited);
// const array = [123,345,567,2345,5678,879,345]


// array.forEach((element,i) => {
//             // console.log(i);
//             // console.log(element);
//             console.table(i,element);
// });

// const result = arr.some((elem,i)){
//             return element === 23
// }

// console.log(result);

// const arr = [123, 345, 567, 2345, 5678, 879, 345];
// // const names = [
// //             { name: "Jimmy", friends: ["Sara", "Liza"] },
// //             { name: "Bob", friends: [] },
// //             { name: "Liza", friends: ["Jimmy"] },
// //             { name: "Sara", friends: ["Jimmy"] },]
// //             const joinedNames = names.join()
// //             console.log(joinedNames);
//             const result = arr.sort(function(a,b){
//                         if (a>b) return 1;
//                         if (a<b) return -1;
//                         if (a===b) return 0;
//             });
//             console.log(result);



// // console.log(arr);

// const arr = [1, 3, 5, 7, 9, 8];
// const arrMulti = [
//             [1, 3, 5],
//             [3, 45, 6],
//             [6, 7, 89]
// ];
// // 
// for (let i = 0; i < arrMulti.length; i++) {
//             console.log(arrMulti);
//             for (let k = 0; k< arrMulti[i].length; k++) {
//                       console.log(arrMulti[i][k]);
                   
//             }
            
// }
let res = '';
const str = 'my-short-string';
const str1 = str.split("-");
str1.forEach(function(str1,i){

            const chars = str1.split('');
            chars[0] = chars[0].toUpperCase();
            const res = chars.join('');
            const result = [...res];
            // console.log(chars); 
            console.log(res);
            return result;
            console.log(result);
})


