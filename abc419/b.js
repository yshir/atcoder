const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [Q] = input[0].split(' ').map(Number);

const bag = [];
for (let i = 0; i < Q; i++) {
  const query = input[i + 1].split(' ');
  if (query[0] === '1') {
    const x = query[1];
    bag.push(Number(x));
  } else {
    let idx = 0;
    let min = bag[idx];
    for (let j = 0; j < bag.length; j++) {
      if (bag[j] < min) {
        min = bag[j];
        idx = j;
      }
    }
    console.log(min);
    bag.splice(idx, 1);
  }
}
