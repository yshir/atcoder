let line = 0;
const input = require('fs').readFileSync(0, 'utf8').trim().split('\n');
let [N, Q] = input[line++].split(' ').map(Number);

let cur_t = -1;
let cur_c = 'a';

const A = new Uint8Array(N);
const set = new Set();

const N_t = []; // last o time
const N_c = [];
for (let i = 0; i < N; i++) {
  N_t[i] = -1;
  N_c[i] = 'a';
}

for (let t = 0; t < Q; t++) {
  const query = input[line++].split(' ');
  if (query[0] === '1') {
    const X = Number(query[1]) - 1;
    if (A[X]) {
      A[X] = 0;
      set.delete(X);
      N_t[X] = t;
    } else {
      A[X] = 1;
      set.add(X);
      if (N_t[X] < cur_t) {
        N_c[X] = cur_c;
      }
    }
  }
  if (query[0] === '2') {
    const C = query[1];
    cur_t = t;
    cur_c = C;
  }
}

const ans = [];
for (let i = 0; i < N; i++) {
  if (A[i]) {
    ans.push(N_c[i]);
  } else {
    if (N_t[i] < cur_t) {
      ans.push(cur_c);
    } else {
      ans.push(N_c[i]);
    }
  }
}
console.log(ans.join(''));
