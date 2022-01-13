var arr = [1,2,3,-5,-2,1,-4],
		sum=0,
        i;
for (i of arr) {
		if (i > 0) {
            sum += i;
        }    
}
console.log(sum)