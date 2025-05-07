const loadcategory = async () => {
  const response = await fetch(
    "https://openapi.programming-hero.com/api/news/categories"
  );
  const data = await response.json();
  data.data.news_category.forEach((item) => {
    console.log(item);
  });
};
loadcategory();
