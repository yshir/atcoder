let line = 0;
const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N] = input[line++].split(' ').map(Number);

const A = [];
for (let i = 0; i < N; i++) {
  A[i] = [];
  for (let j = 0; j < N; j++) {
    A[i][j] = [];
    for (let k = 0; k < N; k++) {
      A[i][j][k] = 0;
    }
  }
}

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    A[i][j] = input[line++].split(' ').map(Number);
  }
}

const get = (i, j, k) => {
  return ((A[i] || [])[j] || [])[k] || 0;
};

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    for (let k = 0; k < N; k++) {
      A[i][j][k] += get(i - 1, j, k);
    }
  }
}
for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    for (let k = 0; k < N; k++) {
      A[i][j][k] += get(i, j - 1, k);
    }
  }
}
for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    for (let k = 0; k < N; k++) {
      A[i][j][k] += get(i, j, k - 1);
    }
  }
}

let [Q] = input[line++].split(' ').map(Number);
while (Q--) {
  let [lx, rx, ly, ry, lz, rz] = input[line++].split(' ').map(Number);
  lx -= 2;
  ly -= 2;
  lz -= 2;
  rx -= 1;
  ry -= 1;
  rz -= 1;

  const sum_xyz = (lx, rx, ly, ry, lz, rz) => {
    return sum_yz(rx, ly, ry, lz, rz) - sum_yz(lx, ly, ry, lz, rz);
  };
  const sum_yz = (rx, ly, ry, lz, rz) => {
    return sum_z(rx, ry, lz, rz) - sum_z(rx, ly, lz, rz);
  };
  const sum_z = (rx, ry, lz, rz) => {
    return get(rx, ry, rz) - get(rx, ry, lz);
  };

  console.log(sum_xyz(lx, rx, ly, ry, lz, rz));
}
