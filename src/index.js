// index.js
const API_URL = "https://dynasty-29.github.io/phase-1-cc-ramen-rater-v2/db.json"
// Callbacks
const handleClick = (ramen) => {
  // Add code
  const ramenImg = document.querySelector(".detail-image");
  const ramenName = document.querySelector(".name");
  const ramenRestaurant = document.querySelector(".restaurant");
  const ramenRating = document.getElementById("rating-display");
  const ramenComment = document.getElementById("comment-display");

  ramenImg.src = ramen.image;
  ramenImg.alt = ramen.name;
  ramenName.textContent = ramen.name;
  ramenRestaurant.textContent = ramen.restaurant;
  ramenRating.textContent = ramen.rating;
  ramenComment.textContent = ramen.comment;

};

const addSubmitListener = () => {
  // Add code
  const ramenForm = document.getElementById("new-ramen");
  ramenForm.addEventListener("submit", (event)=>{
    event.preventDefault();

    const newRamen = {
      name: event.target["new-name"].value,
      restaurant: event.target["new-restaurant"].value,
      image: event.target["new-image"].value,
      rating: event.target["new-rating"].value,
      comment: event.target["new-comment"].value,
    };

    addRamenToMenu(newRamen);

    //reset
    ramenForm.reset();
  });
};

const displayRamens = () => {
  // Add code
  fetch(API_URL)
  .then((res) => res.json())
  .then((ramens)=>{
    ramens.forEach((ramen)=>addRamenToMenu(ramen));
  })
  .catch((error)=>console.log("Oops! No Ramen to fetch:", error));
};

const addRamenToMenu = (ramen)=>{
  const ramenMenu = document.getElementById("ramen-menu");
  const img = document.createElement("imag");
  img.src = ramen.image;
  img.alt = ramen.name;
  img.addEventListener("click", ()=> handleClick(ramen));
  ramenMenu.appendChild(img);
}
const main = () => {
  // Invoke displayRamens here
  // Invoke addSubmitListener here
  document.addEventListener("DOMContentLoaded", ()=>{
    displayRamens();
    addSubmitListener();
  });
};

main()

// Export functions for testing
export {
  displayRamens,
  addSubmitListener,
  handleClick,
  main,
};
