const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [a, b, c, d, e] = input[0].split(' ').map(Number);

const result = [];

for (let i = 0; i < 2; i++) {
  for (let j = 0; j < 2; j++) {
    for (let k = 0; k < 2; k++) {
      for (let l = 0; l < 2; l++) {
        for (let m = 0; m < 2; m++) {
          const name = 'A'.repeat(i) + 'B'.repeat(j) + 'C'.repeat(k) + 'D'.repeat(l) + 'E'.repeat(m);
          const score = i * a + j * b + k * c + l * d + m * e;
          if (name !== '') {
            result.push({ name, score });
          }
        }
      }
    }
  }
}

console.log(
  result
    .sort((a, b) => {
      if (a.score !== b.score) {
        return b.score - a.score;
      }
      return a.name.localeCompare(b.name);
    })
    .map((x) => x.name)
    .join('\n')
);
