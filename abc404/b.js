const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(Number);

const S = [];
for (let i = 0; i < N; i++) {
  S[i] = [];
  for (let j = 0; j < N; j++) {
    S[i][j] = input[i + 1][j];
  }
}

const T = [];
for (let i = 0; i < N; i++) {
  T[i] = [];
  for (let j = 0; j < N; j++) {
    T[i][j] = input[i + N + 1][j];
  }
}

const rotate = (A) => {
  const B = [];
  for (let i = 0; i < A.length; i++) {
    B[i] = [];
    for (let j = 0; j < A.length; j++) {
      B[i][j] = A[A.length - 1 - j][i];
    }
  }
  return B;
};

const diff = (A, B) => {
  let cnt = 0;
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (A[i][j] !== B[i][j]) cnt++;
    }
  }
  return cnt;
};

console.log(
  Math.min(
    //
    diff(S, T),
    diff(rotate(S), T) + 1,
    diff(rotate(rotate(S)), T) + 2,
    diff(rotate(rotate(rotate(S))), T) + 3
  )
);
