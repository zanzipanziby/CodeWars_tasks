function removeSmallest(numbers) {
    const newArr = numbers;
    let indexMinElem = indexOf(MAth.min(numbers));
    return indexMinElem;
  }

  console.log(removeSmallest([2,1,3]));