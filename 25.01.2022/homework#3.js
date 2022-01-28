function every(arr, condition) {
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
    var result;
    for (i of arr) {
        if (i > 1) {
            result = true;
        } else {
            result = false; 
        }
        if (!result) {
            break;
        }
    }
    console.log(result);
}

const arr = [1,2,3];
every(arr, condition)