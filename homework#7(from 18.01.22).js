var arr = [];
function getDivisors(n) {
    if (typeof n === 'number') {
        var i = 1;
        if (n > 0) {
            while (n % i == 0) {
                arr.push(i);
                i++;
            }
        } else {
            return ('Error: parameter cant be a 0')
        }
        return arr;
    } else {
        return ('all parameters type should be a Number');
    }
}
console.log(getDivisors(12))
console.log(getDivisors('Content'))
console.log(getDivisors(0))