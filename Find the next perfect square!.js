function findNextSquare(sq) {
    // Return the next square if sq is a perfect square, -1 otherwise
    let number = Math.sqrt(sq);
    if (Number.isInteger(number)) {
        number++;
        return number * number; 
    } else {
        return -1;
    }
  }