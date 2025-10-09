const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [T] = input.shift().split(' ').map(Number);

const max = 9;

for (let i = 0; i < T; i++) {
  const [H, W] = input.shift().split(' ').map(Number);
  const S = [];
  for (let j = 0; j < H; j++) {
    S[j] = input.shift().split('');
  }

  let ans = max;
  const dfs = (n) => {
    if (n === max) return;

    for (let x = 0; x < H; x++) {
      for (let y = 0; y < W; y++) {
        let cnt = 0;
        for (const [dx, dy] of [
          [0, 0],
          [0, 1],
          [1, 0],
          [1, 1],
        ]) {
          const nx = x + dx;
          const ny = y + dy;
          if (nx >= H || ny >= W) continue;
          if (S[nx][ny] === '#') cnt++;
        }
        if (cnt === 4) {
          for (const [dx, dy] of [
            [1, 0],
            [1, 1],
          ]) {
            const nx = x + dx;
            const ny = y + dy;
            S[nx][ny] = '.';
            dfs(n + 1);
            S[nx][ny] = '#';
          }
          return;
        }
      }
    }

    ans = Math.min(ans, n);
  };
  dfs(0);
  console.log(ans);
}
