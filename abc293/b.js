const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(Number);
const A = input[1].split(' ').map(Number);

const set = new Set();
for (let i = 0; i < N; i++) {
  if (!set.has(i)) {
    set.add(A[i] - 1);
  }
}

const ans = [];
for (let i = 0; i < N; i++) {
  if (!set.has(i)) {
    ans.push(i + 1);
  }
}

console.log(ans.length);
console.log(ans.join(' '));
