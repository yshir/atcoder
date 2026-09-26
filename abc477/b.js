const input = require('fs').readFileSync(0, 'utf8').trim().split('\n');
const [N, D] = input[0].split(' ').map(Number);
const X = input[1].split(' ').map(Number);

const ans = [];
for (let i = 0; i < N; i++) {
  let ok = true;
  for (let j = 0; j < N; j++) {
    if (i === j) continue;
    if (Math.abs(X[i] - X[j]) < D) ok = false;
  }
  if (ok) ans.push(i + 1);
}

console.log(ans.length);
console.log(ans.join(' '));
