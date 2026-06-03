const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(Number);
const P = [];
for (let i = 0; i < N; i++) {
  P[i] = input[i + 1].split(' ').map(Number);
}

const lower_bound = (arr, n) => {
  let first = 0,
    last = arr.length - 1,
    middle;
  while (first <= last) {
    middle = Math.floor((first + last) / 2);
    if (arr[middle] < n) first = middle + 1;
    else last = middle - 1;
  }
  return first;
};

const angle = (x, y) => {
  const ret = (Math.atan2(y, x) * 180) / Math.PI;
  return (ret + 360) % 360;
};

const angle2 = (a1, a2) => {
  const ret = Math.abs(a1 - a2);
  return ret > 180 ? 360 - ret : ret;
};

let ans = 0;

// fixed: b
for (let i = 0; i < N; i++) {
  const P2 = [];
  for (let j = 0; j < N; j++) {
    if (i === j) continue;
    const x = P[j][0] - P[i][0];
    const y = P[j][1] - P[i][1];
    P2.push(angle(x, y));
  }
  P2.sort((a, b) => a - b);

  // fixed: a
  for (let j = 0; j < P2.length; j++) {
    const angle_a = P2[j];
    const angle_target = (angle_a + 180) % 360;

    // search: c
    const pos = lower_bound(P2, angle_target);
    const idx1 = pos % P2.length;
    const idx2 = (pos - 1 + P2.length) % P2.length;

    const candidate_1 = angle2(P2[j], P2[idx1]);
    const candidate_2 = angle2(P2[j], P2[idx2]);

    ans = Math.max(ans, candidate_1, candidate_2);
  }
}

console.log(ans);
