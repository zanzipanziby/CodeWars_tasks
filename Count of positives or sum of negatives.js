/**Given an array of integers.

Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

If the input is an empty array or is null, return an empty array. */
function countPositivesSumNegatives(input) {
    let total = 0;
    let sum = 0;
    if (input.length > 0 && input != null ) {
      for (let i = 0; i < input.length; i++) {
        if (input[i] > 0) {
          total += 1;
        } else if (input[i] == 0) {
          total += 0;
        } else if (input[i] < 0) {
          sum += input[i];
        }
      }
    }
    return [total, sum];
  }
  console.log(countPositivesSumNegatives([1,2,3,4,-5,-6,-7,-3]));