function removeSmallest(numbers) {
   const newArr = numbers;
   let minIndex = newArr.indexOf(Math.min.apply(null, newArr));
   newArr.splice(minIndex, 1);
   return newArr;
  }

  console.log(removeSmallest([2, 1, 1, 1, 3]));