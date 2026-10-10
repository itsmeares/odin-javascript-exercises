const fibonacci = function(n) {

    if (n >= 0 && typeof n === "number") {

        // 1st = 1, 
        // i(2)-1st + i(2)-2nd = 1,
        // 1st = 1, 2nd = 0,
        // i(3)-1st + i(3)-2nd = 2,
        // 1st = 1, 2nd = 1,
        // i(4)-1st + i(4)-2nd = 3,
        // 1st 2, 2nd = 1
        // i(5)-1st + i(5)-2nd = 5,
        // 1st 3, 2nd 2


        // i'll use the 0, 1 as baseline
        let fibonacci = [0, 1];

        for (let i = 0; i < n; i++) {
            // this is probably not the best way but i'll do it lol.
            fibonacci.push(fibonacci[fibonacci.length-1] + fibonacci[fibonacci.length-2]);
        } return fibonacci[fibonacci.length-2];
        
    } else {
        return "OOPS";
    }
};

// Do not edit below this line
module.exports = fibonacci;
