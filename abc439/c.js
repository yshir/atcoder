const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(Number);

const candidate = {};

for (let x = 1; x * x <= N; x++) {
  for (let y = x + 1; y * y <= N; y++) {
    const n = x ** 2 + y ** 2;
    if (n > N) {
      break;
    }
    candidate[n] = (candidate[n] || 0) + 1;
  }
}

const ans = [];
for (const k in candidate) {
  if (candidate[k] === 1) {
    ans.push(Number(k));
  }
}

console.log(ans.length);
console.log(ans.sort((a, b) => a - b).join(' '));
