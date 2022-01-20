var f = function(...tmp) {
    var i, 
        sum = 0;
    for (i of tmp) {
      if (typeof i === 'number') {
          sum += i;
      } else {
        throw new Error('all parameters type should be a Number');
      }
    }
    return sum;
  }

  console.log(f(1,2,3))
  console.log(f(1,1,1,1,1,1,1,1))
  console.log(f(1,2,'s',4))