function filter(arr, condition) {
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
    var result = [];
        for (item of arr) {
            if (item > 1) {
                result.push(item);
            }
      }
     console.log(result)     
    }

const arr = [1,2,3];
filter(arr, condition)