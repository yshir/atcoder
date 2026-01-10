const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [K] = input[0].split(' ').map(Number);
const [A, B] = input[1].split(' ').map(Number);

const f = (n) => {
  const s = [...String(n)].map(Number);
  let cur = 0;
  for (let i = 0; i < s.length; i++) {
    cur += K ** i * s[s.length - i - 1];
  }
  return cur;
};

console.log(f(A) * f(B));
