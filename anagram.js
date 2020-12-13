//this function takes an array as arugment and returns a hashmap of frequency counter.
function createFrequencyCounter(a) {
  let frequencyCounter = {};
  for (let i = 0; i < a.length; i++) {
    frequencyCounter[a[i]] = frequencyCounter.hasOwnProperty(a[i])
      ? frequencyCounter[a[i]] + 1
      : 1;
  }
  return frequencyCounter;
}

function validAnagram(a, b) {
  if (a.length != b.length) return false;
  let frequencyOfA = createFrequencyCounter(a);
  let frequencyOfB = createFrequencyCounter(b);
  for (let key in frequencyOfA) {
    if (frequencyOfB[key] != frequencyOfA[key]) return false;
  }
  return true;
}
