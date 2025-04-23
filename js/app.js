function loadData() {
  fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((res) => res.json())
    .then((data) => displayUser(data));
}
function displayUser() {
  const ul = document.getElementById("users-list");
  for (const users of data) {
    // console.log(users.name);
    const li = document.createElement("li");
    li.innerText = users.name;
    ul.appendChild(li);
  }
}
