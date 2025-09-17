const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(Number);

for (let x = 0; x <= N; x++) {
  for (let y = 0; y <= N; y++) {
    for (let z = 0; z <= N; z++) {
      if (x + y + z <= N) {
        console.log([x, y, z].join(' '));
      }
    }
  }
}
