const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [S] = input[0].split(' ');

const map = {};
for (let i = 0; i < S.length; i++) {
  map[S[i]] = (map[S[i]] || 0) + 1;
}

for (const k in map) {
  if (map[k] === 1) console.log(k);
}
