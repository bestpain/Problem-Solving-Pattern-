//following functional programmming pattern

function createFrequencyCounter(a) {
  let frequencyCounter = {};
  for (let i = 0; i < a.length; i++) {
    frequencyCounter[a[i]] = frequencyCounter.hasOwnProperty(a[i])
      ? frequencyCounter[a[i]] + 1
      : 1;
  }
  return frequencyCounter;
}

function same(a, b) {
  let frequencyCounter = createFrequencyCounter(b);
  for (let i = 0; i < a.length; i++) {
    if (
      !frequencyCounter.hasOwnProperty(a[i] ** 2) &&
      !frequencyCounter[a[i] ** 2] > 0
    ) {
      return false;
    }
    frequencyCounter[a[i] ** 2] = frequencyCounter[a[i] ** 2] - 1;
  }
  return true;
}
