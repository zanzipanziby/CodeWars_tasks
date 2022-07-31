/**Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.
Note: input will never be an empty string */
function fakeBin(x) {
    let xArr = x.split('');
    let binArr = [];
    for (let i = 0; i < xArr.length; i++) {
        if (xArr[i] < 5) {
            binArr.push(0);
        } else {
            binArr.push(1);
        }
    }
    return binArr.join('');
}
console.log(fakeBin('321654987654321654987'));