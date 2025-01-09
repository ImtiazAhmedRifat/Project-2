const loadPetCategories = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/peddy/categories"
  );
  const data = await res.json();
  displayPetCategories(data.categories);
};

const displayPetCategories = (items) => {
  const loadCategoryContainer = document.getElementById("load-pet-categories");
  items.forEach((item) => {
    console.log(item);

    const button = document.createElement("button");
    button.classList = "btn text-xl";
    button.innerText = item.category_icon;
    button.innerText = item.category;

    // add dynamic button
    loadCategoryContainer.append(button);
  });
};

// petCategoriesShow()
loadPetCategories();
