function kitchen() {
  let roast = 0;
  return function () {
    roast++;
    return roast;
  };
}

const firsServer = kitchen();
console.log(firsServer());
console.log(firsServer());
console.log(firsServer());
console.log(firsServer());
console.log(firsServer());
console.log(firsServer());
console.log(firsServer());
console.log(firsServer());
