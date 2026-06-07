const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [H, W, K] = input[0].split(' ').map(Number);

const S = [];
for (let i = 0; i < H; i++) {
  S[i] = input[i + 1].split('').map(Number);
}

const f = (L) => {
  if (L === -1) return 0;

  let cnt = 0;

  for (let h1 = 0; h1 < H; h1++) {
    const T = [];
    for (let w = 0; w < W; w++) {
      T[w] = 0;
    }

    for (let h2 = h1; h2 < H; h2++) {
      for (let w = 0; w < W; w++) {
        T[w] += S[h2][w];
      }

      let sum = 0;
      let w1 = 0;
      for (let w2 = 0; w2 < W; w2++) {
        sum += T[w2];
        while (sum > L) {
          sum -= T[w1];
          w1++;
        }
        cnt += w2 - w1 + 1;
      }
    }
  }

  return cnt;
};

console.log(f(K) - f(K - 1));
