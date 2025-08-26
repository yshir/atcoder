const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [R, X] = input[0].split(' ').map(Number);

if (X === 1) {
  if (1600 <= R && R <= 2999) {
    console.log('Yes');
  } else {
    console.log('No');
  }
}
if (X === 2) {
  if (1200 <= R && R <= 2399) {
    console.log('Yes');
  } else {
    console.log('No');
  }
}
