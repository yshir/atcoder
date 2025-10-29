const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N, K] = input[0].trim().split(' ').map(Number);
const S = input[1].split('');

for (let i = 0; i < N; i++) {
  if (S[i] === '?' && (S[i - 1] === 'o' || S[i + 1] === 'o')) {
    S[i] = '.';
  }
}

let remain = K;
for (let i = 0; i < N; i++) {
  if (S[i] === 'o') {
    remain--;
  }
}

const A = {};
for (let i = 0; i < N; i++) {
  if (S[i] === '?') {
    const l = i;
    while (S[i + 1] === '?') {
      i++;
    }
    const r = i;
    A[l] = r - l + 1;
  }
}

let cap = 0;
for (const k in A) {
  cap += Math.ceil(A[k] / 2);
}

const T = [];
for (let i = 0; i < N; i++) {
  if (S[i] === '?') {
    const cnt = A[i];
    for (let j = 0; j < cnt; j++) {
      const ok_x = (() => {
        const cap_1 = Math.ceil(cnt / 2);
        const cap_2 = Math.ceil(j / 2) + Math.ceil((cnt - 1 - j) / 2);
        const cap_x = cap - cap_1 + cap_2;
        return cap_x >= remain;
      })();
      const ok_o = (() => {
        if (remain === 0) return false;
        const cap_1 = Math.ceil(cnt / 2);
        const cap_2 = Math.ceil((j - 1) / 2) + Math.ceil((cnt - 2 - j) / 2);
        const cap_o = cap - cap_1 + cap_2;
        return cap_o >= remain - 1;
      })();

      if (ok_o && ok_x) {
        T[i + j] = '?';
      } else if (ok_o) {
        T[i + j] = 'o';
      } else {
        T[i + j] = '.';
      }
    }
    i += cnt - 1;
  } else {
    T[i] = S[i];
  }
}

console.log(T.join(''));
