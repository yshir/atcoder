const input = require('fs').readFileSync(0, 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(Number);
const X = input[1].split(' ').map(Number);

for (let i = 0; i < N; i++) {
  if (i === 0 || i === N - 1) {
    console.log(Math.ceil((X[N - 1] - X[0]) / 2));
    continue;
  }

  // if (X[N - 1] - X[i] > X[i] - X[0]) {
  //   const candidate1 = Math.ceil((X[N - 1] - X[i]) / 2);
  //   const candidate2 = Math.ceil((X[i + 1] - X[0]) / 2);
  //   console.log('B', Math.max(candidate1, candidate2));
  //   continue;
  // }
  // if (X[N - 1] - X[i] < X[i] - X[0]) {
  //   const candidate1 = Math.ceil((X[i] - X[0]) / 2);
  //   const candidate2 = Math.ceil((X[N - 1] - X[i - 1]) / 2);
  //   console.log('C', Math.max(candidate1, candidate2));
  //   continue;
  // }

  const candidate0 = Math.ceil((X[N - 1] - X[i]) / 2); // right
  const candidate1 = Math.ceil((X[i] - X[0]) / 2); // left
  const candidate2 = Math.ceil((X[i + 1] - X[0]) / 2); // right
  const candidate3 = Math.ceil((X[N - 1] - X[i - 1]) / 2); // left

  const right = Math.max(candidate0, candidate2);
  const left = Math.max(candidate1, candidate3);
  console.log(Math.min(right, left));

  // console.log('D', Math.max(candidate1, Math.min(candidate2, candidate3)));
}
