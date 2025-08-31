const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const S = input[0];

// W(..)WA => AC(..)C
const t = [...S];
let i = 0;
while (i < S.length) {
  if (t[i] === 'W') {
    const begin = i;
    while (i < S.length) {
      if (t[i] === 'W') {
        i++;
      } else if (t[i] === 'A') {
        t[begin] = 'A';
        for (let j = begin + 1; j <= i; j++) {
          t[j] = 'C';
        }
        i++;
        break;
      } else {
        i++;
        break;
      }
    }
  } else {
    i++;
  }
}
console.log(t.join(''));
