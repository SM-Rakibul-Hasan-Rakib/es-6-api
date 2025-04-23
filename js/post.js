function post() {
  fetch("https://jsonplaceholder.typicode.com/comments").then((res) =>
    res.json().then((data) => poster(data))
  );
}
function poster(data) {
  const ul = document.getElementById("post-list");
  for (const user of data) {
    console.log(user);
    const li = document.createElement("li");
    li.innerText = user.name;
    ul.appendChild(li);
  }
  // for (const user of data) {
  //   console.log(data);
  // }
}
