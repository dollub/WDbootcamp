function isEven(num){
    return (num % 2 === 0)
}

function factorial(num) {
    if (num === 0) {
        return 1
    } else {
        var result =1;
        while (num > 0) {
            result *= num;
            num -=1;
        }
        return result;
    }
}

function kebabToSnake(myStr) {
   return myStr.replace(/-/g, '_');
}

