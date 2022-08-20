function binarySearch(list, item) {
  let low = 0;
  let high = list.length - 1;

  while (high >= low) {
    let mid = Math.floor((low + high) / 2);
    let guess = list[mid];

    if (guess === item) {
      return mid;
    }

    if (guess > item) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return null;
}

const list = [1, 2, 3, 5];
console.log(binarySearch(list, 3) === 2); // true
console.log(binarySearch(list, 4) === null); // true
