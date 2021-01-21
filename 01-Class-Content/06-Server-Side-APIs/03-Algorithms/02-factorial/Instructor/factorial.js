// Write code to create a function that returns the factorial of `num`

var factorial = function(num) {
    // takes care of 0 && 1
    if(num === 0 || num === 1){
        return 1;
    }
    // 3
    // 1 * 2 * 3 --> 2 * 3 = 3! --> 6
    // 1 * 2 = 2 (i = 2) --> 2 * 3 = 6 (i = 3)

    // 4
    // 1 * 2 * 3 * 4 --> 2 * 3 * 4 = 4! --> 24
    var product = 1;
    // for(var i = 2; i <= num; i++){
    //     // testing to see what math we are actually doing
    //     console.log({product, i, num});
    //     console.log(`${product} * ${i} = ${product * i} (calculating ${num}!)`);
    //     // now calculate the first product
    //     product = product * i;
    // }

    for(var i = num; i >= 2; i--){
        console.log({product, i, num});
        console.log(`${product} * ${i} = ${product * i} (calculating ${num}!)`);

        product = product * i;
    }
    // 3
    // 4
    return product;
};
