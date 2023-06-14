const findTheOldest = function(persons) {

    const oldest = persons.sort((a, b) => {
        var adeath = a.yearOfDeath
        var bdeath = b.yearOfDeath
        if (a.yearOfDeath == undefined) {
            adeath = new Date().getFullYear()
        }
        if (b.yearOfDeath == undefined) {
            bdeath = new Date().getFullYear()
        }
        return bdeath - b.yearOfBirth - adeath + a.yearOfBirth
    })
    return oldest[0]
};

// Do not edit below this line
module.exports = findTheOldest;
