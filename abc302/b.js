const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
let [H, W] = input[0].split(' ').map(BigInt);
const S = [];
for (let i = 0; i < H; i++) {
  S[i] = input[i + 1].split('');
}

const T = 'snuke';

const di = [-1, -1, -1, +0, +0, +1, +1, +1];
const dj = [-1, +0, +1, -1, +1, -1, +0, +1];

for (let i = 0; i < H; i++) {
  for (let j = 0; j < W; j++) {
    for (let k = 0; k < di.length; k++) {
      let t = '';
      const ans = [];
      for (let l = 0; l < 5; l++) {
        const ai = i + di[k] * l;
        const aj = j + dj[k] * l;
        if (ai < 0 || aj < 0 || ai >= H || aj >= W) break;
        t += S[ai][aj];
        ans.push(`${ai + 1} ${aj + 1}`);
      }
      if (t === 'snuke') {
        console.log(ans.join('\n'));
      }
    }
  }
}
