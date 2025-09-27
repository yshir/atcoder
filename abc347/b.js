const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const S = input[0];

const set = new Set();
for (let i = 0; i < S.length; i++) {
  for (let j = i; j < S.length; j++) {
    set.add(S.substring(i, j + 1));
  }
}
console.log(set.size);
