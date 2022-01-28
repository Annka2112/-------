function some(arr, condition) {
    if (Array.isArray(arr)) {
        if (typeof condition == 'function') {
        var item, i;
                condition(item, i, arr)
        } else {
            throw new Error('second parameter type should be a function');
        }
    } else {
        throw new Error('first parameter type should be a Array');
    }
}

function condition(item, i, arr) {
    var result = false;
    for (i of arr) {
        if (i > 2) {
            result = true;
        }
    }
    console.log(result);
}

const arr = [1,2,3];
some(arr, condition)