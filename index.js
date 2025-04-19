const arr = [10, 45, 25, 78, 25, 45, 96, 36, 51];
const sum = arr.reduce(function (prev, cur) {
  return prev + cur;
}, 0);
console.log(sum);
