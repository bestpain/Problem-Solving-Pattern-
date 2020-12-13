function countUniqueValues(arr) {
  if (arr.length === 0) return 0;
  let count = 1;
  let temp = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== temp) {
      count++;
      temp = arr[i];
    }
  }
  return count;
}
