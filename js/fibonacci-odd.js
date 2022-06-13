
valueFibo = [0,1];
newFibo = [];
max = 1000;

const fibonacciOdd = (a,b) => {
    
    if (newFibo[0] === undefined) newFibo.push(a);
    if (newFibo[1] === undefined) newFibo.push(b);

        sum = a + b;
        if( sum > max ) {
            console.log('All-Serie-odd :', newFibo);
            return valueFibo;
        } else if (sum % 2 !== 0){
            newFibo.push(sum);
        } 
        valueFibo.push(sum);
        fibonacciOdd(valueFibo[valueFibo.length-1] , valueFibo[valueFibo.length-2]);

}

fibonacciOdd(0,1);