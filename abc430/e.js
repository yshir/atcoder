let line = 0;
const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
let [T] = input[line++].split(' ').map(Number);

/**
 * Computes the Z-array of a string in O(n) time.
 *
 * @param {string} s - The input string to process.
 * @returns {number[]} The Z-array of `s`, where `z[i]` is the length of the
 *   longest substring starting at index `i` that is also a prefix of `s`.
 *
 * @example
 * z_algorithm("aabcaabxaaaz"); // => [12, 1, 0, 0, 3, 1, 0, 0, 2, 2, 1, 0]
 */
function z_algorithm(s) {
  const n = s.length;
  const z = new Array(n).fill(0);
  z[0] = n;
  let l = 0,
    r = 0;
  for (let i = 1; i < n; i++) {
    if (i < r) {
      z[i] = Math.min(r - i, z[i - l]);
    }
    while (i + z[i] < n && s[z[i]] === s[i + z[i]]) {
      z[i]++;
    }
    if (i + z[i] > r) {
      l = i;
      r = i + z[i];
    }
  }
  return z;
}

while (T--) {
  const A = input[line++];
  const B = input[line++];

  const s = `${B}:${A}${A}`;
  const z = z_algorithm(s);
  const p = B.length + 1;

  (() => {
    for (let i = p; i < z.length; i++) {
      if (z[i] === B.length) {
        console.log(i - p);
        return;
      }
    }
    console.log(-1);
  })();
}
