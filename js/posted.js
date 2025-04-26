function loadPosts() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((rakib) => console.log(rakib));
}

function displayPost(posts) {
  for (const post of posts) {
    console.log(post);
  }
}
loadPosts();
