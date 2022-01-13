var arr = [1,2,3,4],
		sum=0,
        i;
for (i of arr) {
		if (i % 2 == 0) {
            sum += i;
        }    
}
console.log(sum)