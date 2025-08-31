const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N, Q] = input[0].split(' ').map(Number);

const hole = {};
const pigeon = {};
for (let i = 1; i <= N; i++) {
  hole[i] = 1;
  pigeon[i] = i;
}

let cnt = 0;
for (let i = 0; i < Q; i++) {
  const query = input[i + 1].split(' ').map(Number);
  if (query[0] === 1) {
    const [, P, H] = query;
    hole[pigeon[P]]--;
    if (hole[pigeon[P]] === 1) {
      cnt--;
    }

    pigeon[P] = H;
    hole[pigeon[P]]++;
    if (hole[pigeon[P]] === 2) {
      cnt++;
    }
  } else {
    console.log(cnt);
  }
}
