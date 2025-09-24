const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(Number);

let cnt = 0;
const set = new Set();
for (let i = 0; i < N; i++) {
  const s1 = input[i + 1];
  const s2 = [...s1].reverse().join('');

  if (!set.has(s1)) {
    cnt++;
    set.add(s1);
    set.add(s2);
  }
}
console.log(cnt);
