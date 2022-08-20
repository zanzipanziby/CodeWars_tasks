function sum (numbers) {
    "use strict";
    let sumNumber = 0;
    if (numbers.length > 0) {
        for (let i = 0; i < numbers.length; i++) {
            sumNumber += numbers[i] * numbers[i];
        }
        return sumNumber;
    } else {
        return 0;
    }
};
console.log(sum([1, 2, 2, 2]));