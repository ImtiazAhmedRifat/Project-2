
// categories function declaretion
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
    button.classList = "btn text-xl border-1 rounded-xl border-gray-300";
    button.innerText = `${item.category}`;

    // add dynamic button
    loadCategoryContainer.append(button);
  });
};

// loaded function declaretion

const loadAllPet = async () => {
  const res = await fetch("https://openapi.programming-hero.com/api/peddy/pets");
  const data = await res.json();
  displayAllPets(data.pets);
  callLikePets(data.pets);
}

const displayAllPets = (pets) => {
  const loadVideoContainer = document.getElementById("load-video-container");
  pets.forEach( (pet) => {
    console.log(pet)
    const card = document.createElement("div");
    card.classList = "card  shadow-xl"
    card.innerHTML =  `
      <figure>
    <img
      src="${pet.image}"
      alt="Shoes" />
  </figure>
  <div class="card-body">
    <h2 class="card-title">
     ${pet.pet_name};
    </h2>
    <p>Breed: ${pet.breed}</p>
    <p>Date Of Birth: ${pet?.date_of_birth}</p>
    <p>Gender: ${pet?.gender}</p>
    <p>Price: ${pet?.price}</p>
    <div class="card-actions justify-evenly">
      <div  class="badge badge-outline"><button onclick="callLikePets()"  class="like-btn">Like</button></div>
      <div class="badge badge-outline"><button class="">Adopt</button></div>
      <div class="badge badge-outline"><button class=""></button>Details</div>
    </div>
  </div>
    `
    loadVideoContainer.append(card);
  });
}
const callLikePets = (pets) => {
 const likeContainer = document.getElementById("liked-container");
pets.forEach((pet)=>{
  console.log(pet)
  const div = document.createElement("div");
 div.innerText = `${pet.image}`;
 likeContainer.appendChild(div)
});
 

}
// petCategoriesShow()
loadPetCategories();
loadAllPet();
