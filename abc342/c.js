const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(Number);
const S = input[1];
const [Q] = input[2].split(' ').map(Number);

const alpha = [...'abcdefghijklmnopqrstuvwxyz'];

const cur = [...alpha];

for (let i = 0; i < Q; i++) {
  const [c, d] = input[3 + i].split(' ');
  for (let j = 0; j < cur.length; j++) {
    if (cur[j] === c) {
      cur[j] = d;
    }
  }
}

console.log([...S].map((c) => cur[alpha.indexOf(c)]).join(''));
