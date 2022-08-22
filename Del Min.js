function removeSmallest(numbers) {
    let newArr = Array.from(numbers);
    if(numbers !== []) {
        let minIndex = newArr.indexOf(Math.min.apply(null, newArr));
        newArr.splice(minIndex, 1);
        return newArr;
    }  else {
        return [];
  }
}



  console.log(removeSmallest([2, 1, 1, 1, 3]));