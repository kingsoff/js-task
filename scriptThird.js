var numbers = [1,2,3,4]; //array 6

function getEven(arr) {
    return arr.filter(function(e) {
        return !(e & 1); // парные числа
    });
}

function sum(arr) {
    return getEven(arr).reduce(function(a, b){
        return a + b;
    });
}
console.log('Third task:',sum(numbers))
