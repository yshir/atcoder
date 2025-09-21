const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const C = [];
{
  let idx = 0;
  for (let i = 0; i < 3; i++) {
    for (const v of input[i].split(' ').map(Number)) {
      C.push({ idx: idx++, val: v });
    }
  }
}

function permutations(iterable, k = [...iterable].length) {
  const items = [...iterable];
  const used = new Array(items.length).fill(false);
  const path = [];
  const result = [];

  function dfs() {
    if (path.length === k) {
      result.push(path.slice());
      return;
    }
    for (let i = 0; i < items.length; i++) {
      if (used[i]) continue;

      used[i] = true;
      path.push(items[i]);
      dfs();
      path.pop(); // backtrack
      used[i] = false;
    }
  }

  dfs();
  return result;
}

const check = (A) => {
  const B = Array(9).fill(-1);

  const check2 = (a, b, c) => {
    return (
      !(a === -1 && b === -1 && c === -1) &&
      ((a === -1 && b === c) || //
        (b === -1 && c === a) ||
        (c === -1 && a === b))
    );
  };

  for (let i = 0; i < 9; i++) {
    const { idx, val } = A[i];
    B[idx] = val;

    for (let ni = 0; ni < 3; ni++) {
      if (check2(B[ni * 3 + 0], B[ni * 3 + 1], B[ni * 3 + 2])) {
        return true;
      }
    }
    for (let nj = 0; nj < 3; nj++) {
      if (check2(B[0 * 3 + nj], B[1 * 3 + nj], B[2 * 3 + nj])) {
        return true;
      }
    }
    if (check2(B[0 * 3 + 0], B[1 * 3 + 1], B[2 * 3 + 2])) {
      return true;
    }
    if (check2(B[0 * 3 + 2], B[1 * 3 + 1], B[2 * 3 + 0])) {
      return true;
    }
  }

  return false;
};

let cnt = 0;
for (const p of permutations(C)) {
  if (check(p)) cnt++;
}
console.log(1 - cnt / 362880); // 9!
