const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [H, W] = input[0].split(' ').map(Number);

let C = [];
for (let i = 0; i < H; i++) {
  C[i] = input[i + 1];
}

while (C.length > 0) {
  let ok = false;
  for (let j = 0; j < C[0].length; j++) {
    if (C[0][j] === '#') ok = true;
  }
  if (ok) {
    break;
  }
  C = C.slice(1);
}

while (C.length > 0) {
  let ok = false;
  for (let j = 0; j < C[0].length; j++) {
    if (C[C.length - 1][j] === '#') ok = true;
  }
  if (ok) {
    break;
  }
  C = C.slice(0, -1);
}

while (C.length > 0 && C[0].length > 0) {
  let ok = false;
  for (let i = 0; i < C.length; i++) {
    if (C[i][0] === '#') ok = true;
  }
  if (ok) {
    break;
  }

  for (let i = 0; i < C.length; i++) {
    C[i] = C[i].slice(1);
  }
}

while (C.length > 0 && C[0].length > 0) {
  let ok = false;
  for (let i = 0; i < C.length; i++) {
    if (C[i][C[0].length - 1] === '#') ok = true;
  }
  if (ok) {
    break;
  }

  for (let i = 0; i < C.length; i++) {
    C[i] = C[i].slice(0, -1);
  }
}

for (let i = 0; i < C.length; i++) {
  console.log(C[i]);
}
