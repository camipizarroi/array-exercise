
valueFibo = [0,1];
newFibo = [];
max = 1000;

const fibonacciEven = (a,b) => {
    
    if (newFibo[0] === undefined) newFibo.push(a);

        sum = a + b;
        if( sum > max ) {
            console.log('All-Serie-even :', newFibo);
            return valueFibo;
        } else if (sum % 2 == 0){
            newFibo.push(sum);
        } 
        valueFibo.push(sum);
        fibonacciEven(valueFibo[valueFibo.length-1] , valueFibo[valueFibo.length-2]);

}

fibonacciEven(0,1);