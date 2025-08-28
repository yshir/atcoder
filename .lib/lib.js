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
