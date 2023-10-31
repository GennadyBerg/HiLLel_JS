// class CatClass {
//     constructor(catColor, catSecondName) {
//         this.color = catColor;
//         this.catSecondName = catSecondName;
//         this.eyes = 2;
//     }
//     sayMeow = function () {
//         alert('meow')
//     };
//     howManyEyes() {
//         console.log(`I have ${this.eyes}`);
//     }
// }

// const cat2 = new CatClass('black', 'fine');
// console.log(cat2);
// sayMeow();

// CatClass.prototype.howManyEyes = function () {
//     console.log(`${this.eyes}`);
// }
////////////////////////////////////////
// class Animal{};
// class Dog{};
// class Car{};
// const weather = good;
// let MyClass = nill;
// if (weather){
//     MyClass = class{

//     }
//     else {
//         Cat
//     }
// };




// console.log(result2);



// class Animal{
//     constructor(legsNumber, speed){
// this.legs = legsNumber;
// this.speed = speed;
//     }
// say(){
//     console.log('I am Animal');
// }

// }

// class Cat extends Animal {
//     constructor(catColor, catSecondName) {
//         super(legsNumber, speed)
//         this.color = catColor;
//         this.catSecondName = catSecondName;
//         this.eyes = 2;
//     }
//     sayMeow() {
//         alert('meow')
//     };
//     get eyesGetSet() {
//         return this.eyes;
//     }
//     set eyesGetSet(eyesNumber) {
// this.eyes = eyesNumber;
//     }
// }
// const cat3 = new CatClass('red', 'red');
// console.log(cat3);
// const result = cat3.eyesGetter;
// cat3.eyesGetSet = 5;
// const result2 = cat3.eyesGetSet;

// const cat6 = new Cat (4,200,'yellow', 'switch');
// console.log(cat6);





class Thermostat {
    constructor(F) {
        this.F = F;
    }
    get temp() {
        return 5 / 9 * (this.F - 32);
    }
    set temp(C) {
        this.F = (C * 9 / 5) + 32;
    }
    newProperty = 'I am New'
coolMethod()
{
    console.log(this.newProperty);
}
}
const thermos = new Thermostat(56);
console.log(thermos.F);
const celsius = thermos.temp;
console.log(celsius);
console.log(thermos.newProperty);
thermos.coolMethod();

