const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const S = input[0];

const map = {};
for (let i = 0; i < S.length; i++) {
  map[S[i]] = (map[S[i]] || 0) + 1;
}

const freq = {};
for (const k in map) {
  freq[map[k]] = (freq[map[k]] || 0) + 1;
}

if (Object.values(freq).every((x) => x === 2)) {
  console.log('Yes');
} else {
  console.log('No');
}
