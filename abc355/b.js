const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N, M] = input[0].split(' ').map(Number);
const A = input[1].split(' ').map(Number);
const B = input[2].split(' ').map(Number);

const C = [...A.map((x) => ({ type: 'a', value: x })), ...B.map((x) => ({ type: 'b', value: x }))];
C.sort((a, b) => a.value - b.value);
for (let i = 0; i < C.length - 1; i++) {
  if (C[i].type === 'a' && C[i + 1].type === 'a') {
    console.log('Yes');
    return;
  }
}
console.log('No');
