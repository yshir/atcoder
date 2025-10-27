const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [h1, h2, h3, w1, w2, w3] = input[0].split(' ').map(Number);

let cnt = 0;
for (let a = 1; a <= 30; a++) {
  for (let b = 1; b <= 30; b++) {
    for (let d = 1; d <= 30; d++) {
      for (let e = 1; e <= 30; e++) {
        const c = h1 - a - b;
        if (c <= 0) continue;
        const f = h2 - d - e;
        if (f <= 0) continue;
        const g = w1 - a - d;
        if (g <= 0) continue;
        const h = w2 - b - e;
        if (h <= 0) continue;
        const i = w3 - c - f;
        if (i <= 0) continue;

        if (
          a + b + c === h1 &&
          d + e + f === h2 &&
          g + h + i === h3 &&
          a + d + g === w1 &&
          b + e + h === w2 &&
          c + f + i === w3
        ) {
          cnt++;
        }
      }
    }
  }
}
console.log(cnt);
