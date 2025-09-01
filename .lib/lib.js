const isqrt = (num) => {
  if (num < 0n) throw new RangeError();
  if (num < 2n) return num;
  let x = num / 2n;
  while (true) {
    const y = (x + num / x) / 2n;
    if (y >= x) return x;
    x = y;
  }
};

const lower_bound = (arr, n) => {
  let first = 0,
    last = arr.length - 1,
    middle;
  while (first <= last) {
    middle = Math.floor((first + last) / 2);
    if (arr[middle] < n) first = middle + 1;
    else last = middle - 1;
  }
  return first;
}

const upper_bound = (arr, n) => {
  let first = 0,
    last = arr.length - 1,
    middle;
  while (first <= last) {
    middle = Math.floor((first + last) / 2);
    if (arr[middle] <= n) first = middle + 1;
    else last = middle - 1;
  }
  return first;
};
