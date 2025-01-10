
// categories function declaretion
const loadPetCategories = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/peddy/categories"
  );
  const data = await res.json();
  displayPetCategories(data.categories);
};

// show by category
// / const res = await fetch(`https://openapi.programming-hero.com/api/peddy/category/${id}`);
  // const data = await res.json();
  // displayAllPets(data.data)
  const showPetByCategories = (id) => {
    console.log(id)
  }


const displayPetCategories = (items) => {
  const loadCategoryContainer = document.getElementById("load-pet-categories");
  items.forEach((item) => {
    // console.log(item);

    const buttonContainer = document.createElement("div");
    buttonContainer.classList = "btn text-xl border-1 rounded-xl border-gray-300";
    buttonContainer.innerHTML= ` 
    <button onclick="showPetByCategories(${item.category})" class="flex gap"><img class=" w-8 " src="${item.category_icon}"> ${item.category}</button>
    `;
    

    // add dynamic button
    loadCategoryContainer.append(buttonContainer);
    // console.log(item.category)
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
  loadVideoContainer.innerHTML = "";
  pets.forEach( (pet) => {
    // console.log(pet)
    const card = document.createElement("div");
    card.classList = "card  shadow-xl border-2 border-gray-300 rounded-xl"
    card.innerHTML =  `
      <figure>
    <img
    class="w-96 p-2 rounded-xl"
      src="${pet.image}"
      alt="Shoes" />
  </figure>
  <div class="card-body">
    <h2 class="card-title">
     ${pet.pet_name};
    </h2>
    <p>Breed: ${pet.breed ? pet.breed : "Not Available"}</p>
    <p>Date Of Birth: ${pet.date_of_birth ? pet.date_of_birth : "Not Available"}</p>
    <p>Gender: ${pet.gender ? pet.gender : "Not Available"}</p>
    <p>Price: ${pet.price ? pet.price : "Not Available"}$</p>
    <div class="card-actions justify-evenl items-center">
      <div  class=""><button onclick="callLikePets()"  class="btn border-2 border-gray-400">Like</button></div>
      <div class="badge badge-outline"><button class="">Adopt</button></div>
      <div class="badge badge-outline"><button class=""></button>Details</div>
    </div>
  </div>
    `
    loadVideoContainer.append(card);
  });
}
 
const callLikePets = (pets) => {
  const likeContainer = document.getElementById("liked-container")
  
 pets.forEach((pet)=>{
  const div = document.createElement("div");
  div.classList = "h-1/2 flex justify-center items-center"
  div.innerHTML = `
  <img src="${pet.image}"/>
  `;
  likeContainer.appendChild(div);
 })
}
// petCategoriesShow()
loadPetCategories();
loadAllPet();
