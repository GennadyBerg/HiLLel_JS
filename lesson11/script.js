
function ConstructCity(square, cityName, shopCounts, sportClubCounts, lineRoads) {
    this.square = square,
        this.lineRoads = lineRoads,
        this.cityName = cityName,
        this.sportClubCounts = sportClubCounts,
        this.shopCounts = shopCounts
};

// ConstructCity.stadiumColor = 'green';
const myCity = new ConstructCity(
    40,
    prompt('Enter city name', 'newVasyuki'), prompt('Enter shops count', 50),
    prompt('Enter sports Club count', 5), 30

);
const myCity2 = new ConstructCity(
    40,
    prompt('Enter city name', 'newVasyuki'),
    prompt('Enter shops count', 50),
    prompt('Enter sports Club count', 5), 20

);
// console.log(myCity);
console.log(myCity2);
console.table(myCity);





// const a = {
//     y:3,
//     x:5,

// }
// const b = {
//     w:11,
// }
// const c = {
//     c: "stringstring",
// }
// // Object.assign(a,b);
// // console.log(a,b);

// // const newCloned = Object.assign({})
// const newObj = {...a,...b, ...c};
// console.log(newObj);
// console.table(newObj);
// const cat = {
//     legs: 4,
//     sayMeow: function () {
//         alert('sayMeow')
//     }
// }


// const catParent = {
//     secName: "sphinx",
//     color: "red",
//     name: 'ParentName',
//    sayMeow: function () {
//         alert(`My name is ${this.name}`)
//     }

// }

// const catChild = {
//     name: "Tom",
//     __proto__: catParent,
// };

// console.table(catChild);
// catChild.sayMeow();
// catParent.sayMeow();

// const catParent = {
//     secName: "sphinx",
//     color: "red",
//     name: 'ParentName',
//     sayMeow: function () {
//         alert(`My name is ${this.name}`)
//             // __proto__ : cat
//         }

// }

// const catChild1 = {
//     id: 1000,
//     // name: "Tom",
//     __proto__: catParent,
// };
// const catChild2 = {
//     id: 1001,
//     // name: "Tom",
//     __proto__: catParent,
// };
// const catChild3 = {
//     id: 1002,
//     // name: "Tom",
//     __proto__: catParent,
// };
// console.log(catChild1);
// console.log(catChild2);
// console.log(catChild3);

// 

// function MakeBuilding(floorsCount, appartmentsCount, name, street) {
//     this.floorsCount = floorsCount,
//         this.appartmentsCount = appartmentsCount,

//         this.name = name,
//         this.street = street
// };
// MakeBuilding.elevator = true;

// const firstBuilding = new MakeBuilding(
//     prompt('Enter floorsCount', 10),
//     40, "JK Gefest", "Soborna");
// console.log(firstBuilding);
