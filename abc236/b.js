const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(Number);
const A = input[1].split(' ').map(Number);

const map = {};
for (let i = 0; i < A.length; i++) {
  map[A[i]] = (map[A[i]] || 0) + 1;
}

for (const k in map) {
  if (map[k] === 3) {
    console.log(k);
    return;
  }
}
