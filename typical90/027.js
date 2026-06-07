const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(Number);

const seen = new Set();
for (let i = 0; i < N; i++) {
  const s = input[i + 1];
  if (!seen.has(s)) {
    seen.add(s);
    console.log(i + 1);
  }
}
