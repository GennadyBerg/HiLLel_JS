function main(a = 2, b = 3, cb) {
    if (typeof cb === "function") {
        cb(sum(a, b));
        return cb;
    } else {
        return sum(a, b);
    }
}

function sum(a, b) {
    return a + b;
}
console.log(main(4,8));