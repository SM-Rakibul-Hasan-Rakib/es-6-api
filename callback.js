// function gretting(person) {
//   console.log(person);
// }

// const laptop = { price: 45000, brand: "lenovo", memory: "8gb" };
// gretting(laptop);

function gretting(grettingHandler, name) {
  grettingHandler(name);
}

function grettingHandler(name) {
  console.log("Good Morning", name);
}

gretting(grettingHandler, "Rakib");
gretting(grettingHandler, "Rafi");
