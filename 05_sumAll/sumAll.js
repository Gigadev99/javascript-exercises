const sumAll = function(a, b) {
    let num = 0;
    if (!Number.isInteger(a) || !Number.isInteger(b) || a < 0 || b < 0) {
        return "ERROR"
    }
    // this loop will sum from a to b, or b to a if a is larger.
    if (b > a) {
        for (let i = a; i <= b; i++) {
            num += i
        }
    }
    else    {
        for (let i = b; i <= a; i++) {
            num += i
        }
    }
    return num;
};
//Simpler method using formula of consecutive sum
const sumAll2 = function(a,b) {
    if (!Number.isInteger(a) || !Number.isInteger(b) || a < 0 || b < 0) {
        return "ERROR"
    }
    
    return (a + b)/2 * (Math.abs(b - a) + 1)
    
    
}

// Do not edit below this line
module.exports = sumAll2;

