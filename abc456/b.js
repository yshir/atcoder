const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
// const [a11, a12, a13, a14, a15, a16] = input[0].split(' ').map(Number);
// const [a21, a22, a23, a24, a25, a26] = input[1].split(' ').map(Number);
// const [a31, a32, a33, a34, a35, a36] = input[2].split(' ').map(Number);
const A = input[0].split(' ').map(Number);
const B = input[1].split(' ').map(Number);
const C = input[2].split(' ').map(Number);

let total = 0;
let ok = 0;

for (const x of A) {
  for (const y of B) {
    for (const z of C) {
      total++;
      const arr = [x, y, z].sort((a, b) => a - b);
      if (arr[0] === 4 && arr[1] === 5 && arr[2] === 6) ok++;
    }
  }
}

console.log(ok / total);
