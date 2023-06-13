const fibonacci = function(n) {
    total = 1;
    let New;
    let Old = 1;
    if (n < 0) return "OOPS"
    for (let i = 1; i < n - 1; i++) {
        New = total + Old
        Old = total
        total = New
    }
    return total
};

// Do not edit below this line
module.exports = fibonacci;
