function reverse(arr) {
    if (Array.isArray(arr)) {
        if (arr.length) {
            var i = arr.length - 1;
            var result = [];
            while (i >= 0) {
                result.push(arr[i]);
                i--;
            }
            console.log(result)
        } else {
        throw new Error('parameter arr should have one element');
    }
    } else {
        throw new Error('parameter arr type should be a array');
    }
}

const arr = [3,2,1];
reverse(arr); // [1,2,3]