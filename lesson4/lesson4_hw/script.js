const userYear = +prompt('Please, enter any year');
if (userYear <= 0) {
            console.log(userYear , "is not a correct value");
}
else if (userYear % 400 === 0 || (userYear % 4 === 0 && userYear % 100 !== 0)) {
            console.log("year is leap");
            alert('Its leap year number')
}
else {
            alert('Its not a leap Year number');
}
