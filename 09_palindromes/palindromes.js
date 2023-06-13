const palindromes = function (phrase) {
    phrase = phrase.toLowerCase()
    let a = phrase.replace(/[^a-z]/g, "")
    let b = "";
    for (let i = a.length - 1; i >= 0; i--) {
        b += a[i]
    }
    return a == b
};

// Do not edit below this line
module.exports = palindromes;
