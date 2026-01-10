const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [T] = input[0].split(' ').map(Number);

for (let i = 0; i < T; i++) {
  const [N, W] = input[i * 2 + 1].split(' ').map(Number);
  const C = input[i * 2 + 2].split(' ').map(Number);

  const G = [];
  for (let j = 0; j < 2 * W; j++) {
    G[j] = 0;
  }
  for (let j = 0; j < N; j++) {
    G[j % G.length] += C[j];
  }

  // init
  let cur = 0;
  for (let j = 0; j < W; j++) {
    cur += G[j];
  }
  let min = cur;

  // remain
  for (let j = 0; j < G.length; j++) {
    cur -= G[j];
    cur += G[(j + W) % G.length];
    min = Math.min(min, cur);
  }

  console.log(min);
}
