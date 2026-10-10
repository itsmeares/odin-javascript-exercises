const findTheOldest = function(arr) {
    arr = arr.sort((a, b) => {
        if (!a.yearOfDeath) {
            a.yearOfDeath = new Date().getFullYear();
        } else if (!b.yearOfDeath) {
            b.yearOfDeath = new Date().getFullYear();
        }

        const aAge = a.yearOfDeath - a.yearOfBirth
        const bAge = b.yearOfDeath - b.yearOfBirth
        if (aAge > bAge) {
            return 1;
        } else {
            return -1;
        }
    }) 

    return arr[arr.length - 1]
};

// Do not edit below this line
module.exports = findTheOldest;
