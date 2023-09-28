// 1-st release             /////////////////////////////



let fingerNum = +prompt('Enter any finger number? please', '');
const fingerArr = ['Thumb', 'Index', 'Middle', 'Ring', 'Pinky_or_little'];
if (fingerArr < 1 || fingerNum > 5 || fingerNum === 0 || !fingerNum) {
            alert(`Please, enter correct value, or our respect to You, m-r(miss) Arrival! `);
}
else {
            alert(`
      You mean a ${fingerArr[fingerNum - 1]} finger
      `);
}
console.log('End of code\)\)\)');


// 2-nd release ////////////////////////////


let fingerNum1 = +prompt('Enter any finger number? please', '');
if (fingerNum1 < 1 || fingerNum1 > 5 || fingerNum1 === 0 || !fingerNum1) {
            alert(`Please, enter correct value, or our respect to You, m-r(miss) Arrival! `);
}
else if (fingerNum1 === 1) {
            alert(`You mean a THUMB finger `);
}

else if (fingerNum1 === 2) {
            alert(`You mean a INDEX finger `);
}
else if (fingerNum1 === 3) {
            alert(`You mean a MIDDLE finger `);
}
else if (fingerNum1 === 4) {
            alert(`You mean a RING finger `);
}
else if (fingerNum1 === 5) {
            alert(`You mean a PINKY or LITTLE finger `);
}
console.log('End of code\)\)\)');
