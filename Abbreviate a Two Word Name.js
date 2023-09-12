/**Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

The output should be two capital letters with a dot separating them.

It should look like this:

Sam Harris => S.H
patrick feeney => P.F */
function abbrevName(name) {
    let nameArr = name.split(' ');
    let firstLetter = nameArr[0][0];
    let secondLetter = nameArr[1][0];
    return firstLetter.toUpperCase() + '.' + secondLetter.toUpperCase();
}

console.log(abbrevName('John Wick'));
