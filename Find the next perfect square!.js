function findNextSquare(sq) {
    // Return the next square if sq is a perfect square, -1 otherwise
    
    const number = Math.sqrt(sq);
    return Number.isInteger(number) ? Math.pow(number + 1, 2) : -1;
  }

console.log(findNextSquare(144));

  

 
