function sliceText(str, x, change) {
            if (str.length >= x) {
                        return str.slice(0, x) + change;
            }
            return str;
}
let x = 10;
const change = "..."
const str = "This is a very long text";
console.log(sliceText(str, x, change));