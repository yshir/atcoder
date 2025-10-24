const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const S = input[0];
const T = input[1];

const ss = [];
for (let i = 0; i < S.length; i++) {
  if (i > 0 && ss[ss.length - 1][0] === S[i]) {
    ss[ss.length - 1][1]++;
  } else {
    ss.push([S[i], 1]);
  }
}

const tt = [];
for (let i = 0; i < T.length; i++) {
  if (i > 0 && tt[tt.length - 1][0] === T[i]) {
    tt[tt.length - 1][1]++;
  } else {
    tt.push([T[i], 1]);
  }
}

const f = () => {
  if (ss.length !== tt.length) {
    return false;
  }

  for (let i = 0; i < ss.length; i++) {
    if (ss[i][0] !== tt[i][0]) {
      return false;
    }
    if (ss[i][1] !== tt[i][1] && (ss[i][1] === 1 || ss[i][1] > tt[i][1])) {
      return false;
    }
  }

  return true;
};

console.log(f() ? 'Yes' : 'No');
