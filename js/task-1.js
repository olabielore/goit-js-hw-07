const categories = document.querySelectorAll("#categories .item");
console.log(categories);

categories.forEach((category) => {
  const h2 = category.querySelector("h2").textContent;
  const li = category.querySelectorAll("li").length;

  console.log("Category:", h2);
  console.log("Elements:", li);
});
