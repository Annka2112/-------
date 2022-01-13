var arr = [6,5,4,3,2,1];
var arr2= [] ;
var i =  0;
do {
	arr2.unshift(arr[i]);
  i++
}
while (i < arr.length);

console.log(arr2);