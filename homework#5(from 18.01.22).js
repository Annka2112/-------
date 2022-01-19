var n = [1, 2, -4, 3, -9, -1, 7];
var arr = [];
var i;
for (i of n) {
    if (isPositive(i)) {
        arr.push(i);
    }
}

function isPositive() {
    if (typeof i === 'number') {
        if (i > 0) {
            return true;
        } else {
            return false;
        }
    } else {
        return ('all parameters type should be a Number');
    }
}

console.log(isPositive('s'))
console.log(isPositive(3))
console.log(isPositive(-3))
console.log(arr)