
valueFibo = [];
max = 1000;

const fibonacci = (a,b) => {
    
    if (valueFibo[0] === undefined) valueFibo.push(a);
    if (valueFibo[1] === undefined) valueFibo.push(b);

        sum = a + b;
        if( sum > max ) {
            console.log('All-Serie : ', valueFibo);
            return valueFibo;
        } else {
            valueFibo.push(sum);
            fibonacci(valueFibo[valueFibo.length-1] , valueFibo[valueFibo.length-2]);
        }
        
}

fibonacci(0,1);