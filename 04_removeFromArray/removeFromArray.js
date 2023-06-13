
// we have 2 solutions here, an easier one and a more advanced one.
// The easiest way to get an array of the rest of the arguments that are passed to a function
// is using the rest operator. If this is unfamiliar to you look it up!
const removeFromArray = function (array, ...args) {
    // create a new empty array
    const newArray = [];
    // use forEach to go through the array
    for (const item of array)  {
      
      if (args.indexOf(item) == -1) {
        newArray.push(item);
      }
    };
    // and return that array
    return newArray;
  };
  
  
  

  
// Do not edit below this line
module.exports = removeFromArray;
