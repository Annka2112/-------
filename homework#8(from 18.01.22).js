function f(arr) {
	var index = 0;
    if (Array.isArray(arr)) {
        if (arr.length) {
            return getElem(arr, index);
        } else {
            throw new Error('Error: parameter cant be an empty') 
        }
    } else {
        throw new Error('Error: parameter type should be an array')
    }
}

function getElem(arr, index) {
    if (index < arr.length) {
        console.log(arr[index]);
        getElem(arr, index + 1)
    }
}

f([1,2,3])
f('Content')
f(1,2,3)
f([])