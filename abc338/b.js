const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const S = input[0];

const map = {};
for (let i = 0; i < S.length; i++) {
  map[S[i]] = (map[S[i]] || 0) + 1;
}

let max = 0;
let max_s = '';
for (const k in map) {
  if (map[k] > max || (map[k] === max && max_s.charCodeAt(0) > k.charCodeAt(0))) {
    max = map[k];
    max_s = k;
  }
}
console.log(max_s);
