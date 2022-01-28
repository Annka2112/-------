function callback (item, i, arr) {
    var result = item * item;
        console.log("Квадрат числа " + item + " равен " + result );
        console.log("Елемент массива с индексом " + i + " равен " + item);
    
}

function forEach(arr, callback) {
    if (Array.isArray(arr)) {
        if (typeof callback == 'function') {
        var item, i;
        	 for (i in arr) {
           	item = arr[i];
            callback(item, i, arr)
           }
        } else {
            throw new Error('second parameter type should be a function');
        }
    } else {
        throw new Error('first parameter type should be a Array');
    }
}
const arr = [1,2,3];
forEach(arr, callback)