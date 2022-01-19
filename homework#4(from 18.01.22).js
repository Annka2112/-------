var f = function(n) {
    if (typeof n === 'number') {
        switch(n) {
            case 1:
                return 'Воскресенье';
            break;
            case 2:
                return 'Понедельник';
            break;
            case 3:
                return 'Вторник';
            break;
            case 4:
                return 'Среда';
            break;
            case 5:
                return 'Четверг';
            break;
            case 6:
                return 'Пьятница';
            break;
            case 7:
                return 'Суббота';
            break;
            case 8:
                return('Error: parameter should be in the range of 1 to 7');
            break;
        }
    } else {
        throw Error ('parameter type is not a Number');
    }
}

console.log(f(1));
console.log(f(2));
console.log(f(8));
console.log(f('2'));