 (function() {
    var numberArray = [40, 1, 5, 200, 400, 0, -1];
    function compareNumbers(a, b) {
        return a - b;
    }
    var arr = numberArray.sort(compareNumbers);
                i = -1;
            return function stepByStep() {
                if ( ++i < arr.length ) {
                    console.log('Fourth task',arr[i]);
                    document.querySelector('#task4').innerHTML += arr[ i ] +'<br/>';
                    setTimeout(stepByStep, 3000 );
                }
            }();
        })();