const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N, M] = input[0].split(' ').map(Number);
const A = [];
for (let i = 0; i < 2 * N; i++) {
  A[i] = input[i + 1];
}

const player = [];
for (let i = 0; i < 2 * N; i++) {
  player[i] = { idx: i, win: 0 };
}

let ranking = [];
for (let i = 0; i < 2 * N; i++) {
  ranking[i] = i;
}

for (let i = 0; i < M; i++) {
  for (let j = 0; j < N; j++) {
    const p1 = ranking[2 * j];
    const p2 = ranking[2 * j + 1];

    if (A[p1][i] === 'G' && A[p2][i] === 'C') {
      player[p1].win++;
    }
    if (A[p1][i] === 'G' && A[p2][i] === 'P') {
      player[p2].win++;
    }
    if (A[p1][i] === 'C' && A[p2][i] === 'G') {
      player[p2].win++;
    }
    if (A[p1][i] === 'C' && A[p2][i] === 'P') {
      player[p1].win++;
    }
    if (A[p1][i] === 'P' && A[p2][i] === 'G') {
      player[p1].win++;
    }
    if (A[p1][i] === 'P' && A[p2][i] === 'C') {
      player[p2].win++;
    }
  }
  ranking = Object.values(player)
    .sort((a, b) => (a.win === b.win ? a.idx - b.idx : b.win - a.win))
    .map((x) => x.idx);
}

console.log(ranking.map((x) => x + 1).join('\n'));
