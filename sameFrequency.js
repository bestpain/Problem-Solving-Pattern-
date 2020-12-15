function getFrequencyOfNumber(n) {
  let frequency = {};
  while (n > 0) {
    let digit = n % 10;
    frequency[digit] = frequency.hasOwnProperty(digit)
      ? frequency[digit] + 1
      : 1;
    n = Math.trunc(n / 10);
  }
  return frequency;
}

function sameFrequency(a, b) {
  let freqOfA = getFrequencyOfNumber(a);
  let freqOfB = getFrequencyOfNumber(b);
  if (Object.keys(freqOfA).length !== Object.keys(freqOfB).length) return false;
  for (let key in freqOfA) {
    if (freqOfA[key] !== freqOfB[key]) return false;
  }
  return true;
}
