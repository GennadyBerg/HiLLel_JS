///example of array

const array = [512, 631, 791, 812, 248, 255, 958, 823, 211, 678, 432, 883, 961, 138, 397, 456, 615, 521, 742, 563, 981, 417, 123, 708, 367];
document.write(`${array}`);

// let item = +prompt('Enter new element \(item\)');

function removeElement(array, item, newElem) {
            for (let i = 0; i < array.length; i++) {
                        const element = array[i];
                        if (element === item) {
                                    array[i] = newElem;
                        }
           }
            return array;
}
removeElement(array, 812, 777);
console.log(array);

