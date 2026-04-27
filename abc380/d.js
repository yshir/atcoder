const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const S = input[0];
const [Q] = input[1].split(' ').map(Number);
const K = input[2].split(' ').map(BigInt);

const S_len = BigInt(S.length);

const bit_count = (N) => {
  let cur = N;
  let cnt = 0;
  while (cur > 0) {
    if ((cur & 1n) === 1n) {
      cnt++;
    }
    cur >>= 1n;
  }
  return cnt;
};

const flip = (c) => {
  if (c.toLowerCase() === c) {
    return c.toUpperCase();
  } else {
    return c.toLowerCase();
  }
};

const ans = [];
for (let i = 0; i < Q; i++) {
  const idx = (K[i] - 1n) / S_len;
  const off = K[i] - 1n - S_len * idx;
  const char = S[off];
  ans.push(bit_count(idx) % 2 === 0 ? char : flip(char));
}
console.log(ans.join(' '));
