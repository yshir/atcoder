const input = require('fs').readFileSync(0, 'utf8').trim().split('\n');
const [N, M] = input[0].split(' ').map(Number);

const A = new Array(N).fill(0);
for (let i = 0; i < M; i++) {
  A[i % N]++;
}
console.log(A.join('\n'));
