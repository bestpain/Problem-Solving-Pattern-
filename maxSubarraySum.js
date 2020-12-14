function maxSubArraySum(arr, n) {
  if (arr.length === 0) return null;
  let max = -Infinity;
  for (let i = 0; i < arr.length-num+1; i++) {
    let sum = 0;
    for (let j = i; j < i + n; j++) {
      sum += arr[j];
    }
    if (sum > max) max = sum;
  }
  return max;
}
