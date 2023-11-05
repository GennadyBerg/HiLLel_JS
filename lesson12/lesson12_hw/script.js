// method first (very shot and easy, but not clear)

////  1 ////////

const isPalindrome = (str) => str.toLowerCase().replace(/[^a-z0-9]/g, '') === str.split('').reverse().join('');
console.log(isPalindrome(prompt('Enter any string to check isThisPalindrome?')));

// method second (most universal and as for me - most clear for data check)

//////  2   ///////
function isPalindrome1 (str) {
       const convertStr =  str.toLowerCase().replace(/[^a-z0-9]/g, '').split('');

for (let i = 0; j = convertStr.length-1, i<j; i++, j--) {
if(convertStr[i]===convertStr[j]){
            // console.log(convertStr[i],convertStr[j]);
            return true
}
else 
// console.log(i,j);
return false;

}
};

console.log(isPalindrome1(prompt('Enter any string to check isThisPalindrome?')));


