const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N, M] = input[0].split(' ').map(Number);

const N_arr = [];
for (let i = 0; i < N; i++) {
  N_arr[i] = [];
}

const M_arr = [];
for (let i = 0; i < M; i++) {
  M_arr[i] = [];
}

for (let i = 0; i < M; i++) {
  let [a, b] = input[i + 1].split(' ').map(Number);
  a--;
  b--;
  N_arr[a].push(i);
  N_arr[b].push(i);
  M_arr[i] = [a, b];
}

const cnt_map = [];
for (let i = 0; i <= M; i++) {
  cnt_map[i] = 0;
}
for (let i = 0; i < N_arr.length; i++) {
  cnt_map[N_arr[i].length]++;
}
const cnt_acc = [];
for (let i = M; i >= 0; i--) {
  cnt_acc[i] = cnt_acc[i + 1] || 0;
  cnt_acc[i] += cnt_map[i];
}

let ans = 0;
for (let i = 0; i < N; i++) {
  const expected_len = M - N_arr[i].length;
  let cur = cnt_acc[expected_len];
  if (N_arr[i].length >= expected_len) cur--;
  const minus_map = new Map();
  for (const j of N_arr[i]) {
    for (const i2 of M_arr[j]) {
      if (i === i2) continue;
      minus_map.set(i2, (minus_map.get(i2) || 0) + 1);
    }
  }
  for (const [i2, minus_len] of minus_map) {
    if (N_arr[i2].length >= expected_len && N_arr[i2].length - minus_len < expected_len) {
      cur--;
    }
  }
  ans += cur;
}
console.log(ans / 2);
