const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(BigInt);

const palindrome = (a) => {
  const s = String(a);
  return s === [...s].reverse().join('');
};

let ans = 1n;
for (let i = 1n; ; i += 1n) {
  const cur = i * i * i;
  if (cur > N) {
    break;
  }
  if (palindrome(cur)) {
    ans = cur;
  }
}
console.log(ans.toString());
