function arrayFill(a, b) {
    if ((typeof a == 'number') || (typeof a == 'string') || (typeof a == 'object')) {
        if (typeof b == 'number') {
            var arr = Array(b);
            console.log(arr.fill(a))
        } else {
            throw new Error('parameter b type should be a number');
        }
    } else {
        throw new Error('parameter a type should be a number or string or object or array');
    }
}

arrayFill('x',5)