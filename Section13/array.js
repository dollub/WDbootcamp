function printReverse(myArr) {
    for (i = myArr.length; i >= 0; i--){
        console.log(myArr[i]);
    }
}

function isUniform(myArr){
    var first = myArr[0];
    for (i = 1; i < myArr.length; i++){
        if (myArr[i] !== first){
            return false;
        }
    }
    return true;
}

function sumArray(myArr){
    var sum = 0;
    for (i = 0; i < myArr.length;i++){
        sum += myArr[i];
    }
    return sum;
}

function max(myArr){
    var max = 0;
    for (i = 1; i < myArr.length; i++){
        if (myArr[i] > max){
            max = myArr[i];
        }
    }
    return max;
}