const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [A] = input[0].split(' ').map(Number);
const [B] = input[1].split(' ').map(Number);
const [C] = input[2].split(' ').map(Number);
const [X] = input[3].split(' ').map(Number);

let cnt = 0;
for (let i = 0; i <= A; i++) {
  for (let j = 0; j <= B; j++) {
    for (let k = 0; k <= C; k++) {
      if (500 * i + 100 * j + 50 * k === X) cnt++;
    }
  }
}
console.log(cnt);
