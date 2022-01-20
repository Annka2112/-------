var arr = [1,2,3];
var i = arr.length;
function f(arr) {
    if (Array.isArray(arr)) {
        if (i) {
            return getElem(arr, i);
        } else {
            throw new Error('Error: parameter cant be an empty') 
        }
    } else {
        throw new Error('Error: parameter type should be an array')
    }
}

var getElem = function (arr, i) {
    if (i = 0) {
        return arr[i]
    } else {
        return arr[i];
        getElem(arr, i- 1);
    }
}