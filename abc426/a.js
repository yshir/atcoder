const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [X, Y] = input[0].split(' ');

const OS = ['Ocelot', 'Serval', 'Lynx'];
console.log(OS.indexOf(X) >= OS.indexOf(Y) ? 'Yes' : 'No');
