// HomeWork/////

function cityObj(properties) {
    const resultObject = {};

    properties.forEach(key => {
        resultObject[key] = undefined;
    });

    return resultObject;
}

const properties = ['name', 'area', 'population', 'main street', "mayor's name"];
const myCity = cityObj(properties);
myCity[properties[0]] = 'Kharkiv';
myCity[properties[1]] = '350 km sq';
myCity[properties[2]] = 1421125;
myCity[properties[3]] = 'Sumskaya';
myCity[properties[4]] = 'Terekhov';

console.table(myCity);




// function outer () {
//     const X='Hello World';
//     return function inner() {
//         console.log(X);
//     }
// }
// const callFunction = outer();

// callFunction();

// function makeCount() {
//     let counter = 0;
//     console.log(counter);
//     return function () {
//         return counter++;
//     }
// }
// // makeCount()


// const goCount = makeCount();
// console.log(goCount());
// console.log(goCount());
// console.log(goCount());
// console.log(goCount());
// console.log(goCount());
// console.log(goCount());
// console.log(goCount());

// function sum(a, b) {
//     console.log( a + b);
// }
// // sum (6,7);
// sum(7)(7);
// function sum(a){
//     return function (b){
//         console.log(a+b);
//     }

// }

//       const cat ={
//         name: 'es6',
//         color: 'black',
//         hadLunch: true,
//         // sayMeow: alert('meow'),
//         catGetBigData: [1345, 2345, 234, 2456],
//         sex: 'female',
//         children: {
//             1: 'Tom',
//             2: 'Corky',

//         }

//     };
// //     //

//     // console.log(cat["hadLunch"]);
//     // console.log(("name" in cat));

// for (let key in cat){
//     console.log(key);
//     const currentValue=cat[key];
//     console.log(currentValue);
// }



// const dog = {};
// dog.color = 'red';
// console.log(dog);

// dog.barks = true;


// return city;
// console.table(city);






