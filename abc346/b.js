const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [W, B] = input[0].split(' ').map(Number);

const S = 'wbwbwwbwbwbw'.repeat(1000);
for (let i = 0; i < S.length - W - B; i++) {
  const ss = [...S.substring(i, i + W + B)];
  if (ss.filter((x) => x === 'w').length === W && ss.filter((x) => x === 'b').length === B) {
    console.log('Yes');
    return;
  }
}
console.log('No');
