const input = require('fs').readFileSync(0, 'utf8').trim().split('\n');
const [N, Q] = input[0].split(' ').map(Number);
const P = input[1].split(' ').map(Number);

for (let i = 0; i < Q; i++) {
  const [a] = input[2 + i].split(' ').map(Number);
  P.push(a);
}

const ans = [];
const set = new Set();
for (let i = P.length - 1; i >= 0; i--) {
  if (!set.has(P[i])) {
    set.add(P[i]);
    ans.push(P[i]);
  }
  if (set.size === N) break;
}
console.log(ans.reverse().join(' '));
