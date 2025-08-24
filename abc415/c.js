const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [T] = input[0].split(' ').map(Number);

for (let i = 0; i < T; i++) {
  const [N] = input[i * 2 + 1].split(' ').map(Number);
  const S = input[i * 2 + 2].split('').map(Number);

  const n2 = 2 ** N;

  const ok = [1];
  for (let j = 0; j < n2 - 1; j++) {
    if (!ok[j]) {
      continue;
    }
    for (let k = 0; k < N; k++) {
      const l = j | (1 << k);
      if (l !== k && !S[l - 1]) {
        ok[l] = 1;
      }
    }
  }
  console.log(ok[n2 - 1] ? 'Yes' : 'No');
}
