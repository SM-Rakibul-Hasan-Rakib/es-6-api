// const arr = [10, 45, 25, 78, 25, 45, 96, 36, 51];
// const sum = arr.reduce(function (prev, cur) {
//   console.log("prev", prev, "current", cur);
//   return prev + cur;
// }, 0);
// console.log(sum);

const arr = [
  { name: "Someone 0", salary: 100 },
  { name: "Someone 1", salary: 200 },
  { name: "Someone 2", salary: 300 },
  { name: "Someone 3", salary: 400 },
  { name: "Someone 4", salary: 500 },
];
const sum = arr.reduce(function (prevous, current) {
  return prevous + current.salary;
}, 0);
// console.log(sum);

const person = {
  name: "Sakib",
  age: "28",
  address: "uttara",
};
console.log(person.name, person.age);
