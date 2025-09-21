const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [M] = input[0].split(' ').map(Number);
const S = [];
for (let i = 0; i < 3; i++) {
  S[i] = input[i + 1];
}

const init = Number.MAX_SAFE_INTEGER;

const f = (S) => {
  let min = init;
  let a, b, c;
  for (let i = 0; i < M; i++) {
    a = S[0][i];
    for (let j = i + 1; j < i + 1 + M; j++) {
      b = S[1][j % M];
      for (let k = j + 1; k < j + 1 + M; k++) {
        c = S[2][k % M];
        if (a === b && b === c) {
          min = Math.min(min, k);
        }
      }
    }
  }
  return min;
};

const ans = Math.min(
  f([S[0], S[1], S[2]]),
  f([S[0], S[2], S[1]]),
  f([S[1], S[0], S[2]]),
  f([S[1], S[2], S[0]]),
  f([S[2], S[1], S[0]]),
  f([S[2], S[0], S[1]])
);

console.log(ans === init ? -1 : ans);
