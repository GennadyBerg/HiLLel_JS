// const obj1 = {};
// console.log(obj1);
// const obj2={};
// console.log(obj2);


// const user = {
//     name:'Petro',
//     isLoggetIn: true,
// };
// console.log(user);
// const adminUser = user;
// console.log(adminUser);
// user.name = 'John';
// const admin = user;
// admin.name = 'Paul';

const ladder = {
    step: 0,
    goUpstairs: function () {
        this.step++;
    },
    goDownStairs: function(){
        this.step--;
    },
showCurrentStep: function() {
    console.log(this.step);
}
}
ladder.goDownStairs()

