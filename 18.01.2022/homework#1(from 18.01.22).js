var f = function(n) {
    if (typeof n === 'number') {
        return n*n*n;
    } else {
        throw new Error('parameter type is not a Number');
    }
}

console.log(f(2))
console.log(f('Content'))