function isEven(i) {
    if (typeof i === 'number') {
        if (i % 2 == 0) {
            return true;
        } else {
            return false;
        }
    } else {
        return ('all parameters type should be a Number');
    }
}
console.log(isEven(3))
console.log(isEven(4))
console.log(isEven('Content'))