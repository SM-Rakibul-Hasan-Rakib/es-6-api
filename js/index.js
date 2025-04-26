function loadUata2() {
  fetch("https://admin.refabry.com/api/all/product/get")
    .then((res) => res.json())
    .then((rakib) => console.log(rakib));
}
// loadUata2();
function displayUser2(data) {
  const ul = document.getElementById("users-list");
  for (const user of data) {
    console.log(user.name);
    const li = document.createElement("li");
    li.innerText = user.name;
    ul.appendChild(li);
  }
}
