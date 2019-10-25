var numberArray = [40, 1, 5, 200, 400, 0, -1];
function compareNumbers(a, b) {
    setTimeout(compareNumbers, 3000);//need fix
    return a - b;
}

console.log('Fourth task: ', numberArray.sort(compareNumbers));
/*
var newArray = numberArray.sort(compareNumbers);
function intervalWait(a, b){
    setInterval( compareNumbers, 3000);
}
console.log('Fourth task 3second: ', newArray.sort(intervalWait));
//console.log('Fourth task:',aclean(array) );*/
