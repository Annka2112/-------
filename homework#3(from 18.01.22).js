var f = function(...tmp) {
    var i, 
        result = 0;
    for (i of tmp) {
      if (typeof i === 'number') {
        result = (tmp[0] - tmp[1])/tmp[2];
      } else {
        throw new Error('all parameters type should be a Number');
      }
    }
    return result;
  }

  console.log(f(9,3,2))
  console.log(f('s',9,3))