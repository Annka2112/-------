const arr = [1,2,3];
const acc = 2;


function reduce(arr, callback, acc) {
    if (Array.isArray(arr)) {
        if (typeof callback == 'function') {
            if ((typeof acc == 'number') || (typeof acc == 'string')) {
            var initial = Number(acc); // если строка или пустая строка преобразуем в число
            callback(arr, initial)
            } else {
                throw new Error('third parameter type should be a string or number');
            }
        } else {
            throw new Error('second parameter type should be a function');
        }
    } else {
        throw new Error('first parameter type should be a Array');
    }
}

function callback(arr, initial) {
    var i, result,
        sum = 0;
    for (i of arr) {
        sum += i;
        result = initial + sum;
        console.log("Вызов " + i + " равен " + result)
    }
    console.log(result)
}

reduce(arr, callback, acc);
