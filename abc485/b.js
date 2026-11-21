const input = require('fs').readFileSync(0, 'utf8').trim().split('\n');
const [N, M] = input[0].split(' ').map(Number);
const S = [];
for (let i = 0; i < N; i++) {
  S[i] = input[i + 1];
}

for (let i = 0; i < N; i++) {
  let ng = 0;
  for (let j = 0; j < M; j++) {
    if (S[i][j] === 'x') ng++;
  }
  if (ng === M) {
    console.log(`Faucet ${i + 1}`);
    return;
  }
}

for (let j = 0; j < M; j++) {
  let ng = 0;
  for (let i = 0; i < N; i++) {
    if (S[i][j] === 'x') ng++;
  }
  if (ng === N) {
    console.log(`Drain ${j + 1}`);
    return;
  }
}
