const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const A = input[0].split(' ').map(Number);

const n = 7;
for (let i = 0; i < n; i++) {
  for (let j = i + 1; j < n; j++) {
    const B = [...A].filter((_, idx) => idx !== i && idx !== j);

    const cnt = {};
    for (let k = 0; k < 5; k++) {
      cnt[B[k]] = (cnt[B[k]] || 0) + 1;
    }
    let ok = true;
    for (const k in cnt) {
      if (cnt[k] !== 2 && cnt[k] !== 3) ok = false;
    }
    if (ok) {
      console.log('Yes');
      return;
    }
  }
}
console.log('No');
