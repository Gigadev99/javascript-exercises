const repeatString = function(string, number) {
    let x="";
    if (number==0) {
        return "";
    } else if (number<0){
        return "ERROR";
    } else
    for (let i=0;i<number;i++){
        x+=string;
    }
    return x;
};

// Do not edit below this line
module.exports = repeatString;
