const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [Q] = input[0].split(' ').map(Number);

let cur = 0;
let state = 0; // pause
for (let i = 0; i < Q; i++) {
  const [A] = input[i + 1].split(' ').map(Number);
  if (A === 1) cur++;
  if (A === 2) {
    if (cur >= 1) {
      cur--;
    }
  }
  if (A === 3) {
    if (state === 0) {
      state = 1;
    } else {
      state = 0;
    }
  }
  console.log(state && cur >= 3 ? 'Yes' : 'No');
}
