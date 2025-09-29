const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const S = input[0];
const T = input[1];

const f = (S, T) => {
  const s_map = {};
  let s_wild = 0;
  const t_map = {};
  let t_wild = 0;
  for (let i = 0; i < S.length; i++) {
    if (S[i] === '@') {
      s_wild++;
    } else {
      s_map[S[i]] = (s_map[S[i]] || 0) + 1;
    }
    if (T[i] === '@') {
      t_wild++;
    } else {
      t_map[T[i]] = (t_map[T[i]] || 0) + 1;
    }
  }

  for (const k in s_map) {
    const sc = s_map[k];
    const tc = t_map[k] || 0;

    if (sc !== tc) {
      if (![...'atcoder'].includes(k)) {
        return false;
      }
      if (sc > tc) {
        t_wild -= sc - tc;
        if (t_wild < 0) {
          return false;
        }
      } else {
        s_wild -= tc - sc;
        if (s_wild < 0) {
          return false;
        }
      }
    }
  }
  return true;
};

if (f(S, T) && f(T, S)) {
  console.log('Yes');
} else {
  console.log('No');
}
