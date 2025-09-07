const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N, Q] = input[0].split(' ').map(Number);

let L = 1;
let R = 2;
let cnt = 0;

for (let i = 0; i < Q; i++) {
  let [H, T] = input[i + 1].split(' ');
  T = Number(T);

  if (H === 'L') {
    while (true) {
      let cnt_1 = 0;
      let new_l = L;
      while (true) {
        if (new_l === R) {
          cnt_1 = -1;
          break;
        }
        if (new_l == T) {
          break;
        }
        new_l = (new_l % N) + 1;
        cnt_1++;
      }
      if (cnt_1 !== -1) {
        L = new_l;
        cnt += cnt_1;
        break;
      }

      cnt_1 = 0;
      new_l = L;
      while (true) {
        if (new_l === R) {
          cnt_1 = -1;
          break;
        }
        if (new_l == T) {
          break;
        }
        new_l = new_l === 1 ? N : new_l - 1;
        cnt_1++;
      }
      if (cnt_1 !== -1) {
        L = new_l;
        cnt += cnt_1;
        break;
      }
    }
  }

  if (H === 'R') {
    while (true) {
      let cnt_1 = 0;
      let new_r = R;
      while (true) {
        if (new_r === L) {
          cnt_1 = -1;
          break;
        }
        if (new_r == T) {
          break;
        }
        new_r = (new_r % N) + 1;
        cnt_1++;
      }
      if (cnt_1 !== -1) {
        R = new_r;
        cnt += cnt_1;
        break;
      }

      cnt_1 = 0;
      new_r = R;
      while (true) {
        if (new_r === L) {
          cnt_1 = -1;
          break;
        }
        if (new_r == T) {
          break;
        }
        new_r = new_r === 1 ? N : new_r - 1;
        cnt_1++;
      }
      if (cnt_1 !== -1) {
        R = new_r;
        cnt += cnt_1;
        break;
      }
    }
  }
}

console.log(cnt);
