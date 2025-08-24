const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [A] = input[0].split(' ').map(Number);
const [N] = input[1].split(' ').map(Number);

const test = (n) => {
  if (n > N) {
    return false;
  }
  let s = [];
  while (n > 0) {
    s.push(n % A);
    n = Math.trunc(n / A);
  }

  for (let i = 0; i < Math.trunc(s.length / 2); i++) {
    if (s[i] !== s[s.length - 1 - i]) {
      return false;
    }
  }
  return true;
};

// max = 10^12 = 13桁
// => 10^12 は回文ではない、実質 12 桁が max
// => 6桁 + 6桁の回文が max
let ans = 0;
for (let i = 1; i <= 999999; i++) {
  const s = String(i);

  const s1 = Number(s + [...s].reverse().join(''));
  const s2 = Number(s.slice(0, -1) + [...s].reverse().join(''));

  if (test(s1)) ans += s1;
  if (test(s2)) ans += s2;
}
console.log(ans);
