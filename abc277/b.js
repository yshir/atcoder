const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(Number);

const set = new Set();
for (let i = 0; i < N; i++) {
  const s = input[i + 1];
  if (!/^(H|D|C|S)(A||T|J|Q|K|[2-9])$/.test(s) || set.has(s)) {
    console.log('No');
    return;
  }
  set.add(s);
}
console.log('Yes');
