var arr = [1,2,3,4,5,6];
var arr2= [] ;
var i = arr.length - 1;
while (i >= 0) {
    arr2.push(arr[i]);
    i--;
}

console.log(arr2);