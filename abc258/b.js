const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(Number);
const A = [];
for (let i = 0; i < N; i++) A[i] = input[i + 1].split('').map(Number);

let ans = 0;

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    for (const [dx, dy] of [
      [-1, 1],
      [-1, 0],
      [-1, -1],
      [0, 1],
      [0, -1],
      [1, 1],
      [1, 0],
      [1, -1],
    ]) {
      const num = [];
      for (let k = 0; k < N; k++) {
        const nx = (i + dx * k + N) % N;
        const ny = (j + dy * k + N) % N;
        num.push(A[nx][ny]);
      }
      ans = Math.max(ans, Number(num.map((x) => x.toString()).join('')));
    }
  }
}

console.log(ans);
