function maxSubArraySum(arr, n) {
  if (arr.length === 0) return null;
  let max = -Infinity;
  for (let i = 0; i < arr.length - num + 1; i++) {
    let sum = 0;
    for (let j = i; j < i + n; j++) {
      sum += arr[j];
    }
    if (sum > max) max = sum;
  }
  return max;
}

//second solution
function maxSubarraySum(arr, n) {
  if (arr.length === 0) return null;
  let maxSum = 0;
  let tempSum = 0;
  for (let i = 0; i < n; i++) {
    tempSum += arr[i];
  }
  maxSum = tempSum;
  for (let j = n; j < arr.length; j++) {
    tempSum = tempSum + arr[j] - arr[j - n];
    if (tempSum > maxSum) maxSum = tempSum;
  }
  return maxSum;
}

//maxSubArraySum([1,2,5,2,8,1,5],4)
