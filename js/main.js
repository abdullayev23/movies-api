const elTemplate = document.querySelector(".movie-template").content;
const elList = document.querySelector(".list")
// const modalBtn = document.querySelector(".btn__temp");
const modal = document.querySelector(".modal")
const elTemplateFragment = document.createDocumentFragment();
const elMovi = movies.slice(0 , 100);

function mobile(elMovi) {
  elList.innerHTML = ""
for (let movie of elMovi) {
  const movieTemplateClone = elTemplate.cloneNode(true);
  movieTemplateClone.querySelector(".img__temp").src = `https://i3.ytimg.com/vi/${movie.ytid}/mqdefault.jpg`;
  movieTemplateClone.querySelector(".title__temp").textContent = movie.Title;
  movieTemplateClone.querySelector(".rating__temp").textContent = movie.imdb_rating;
  movieTemplateClone.querySelector(".year__temp").textContent = movie.movie_year;
  movieTemplateClone.querySelector(".time__temp").textContent = movie.runtime;
  movieTemplateClone.querySelector(".info__temp").textContent = movie.Categories;

elTemplateFragment.appendChild(movieTemplateClone);
  elList.appendChild(elTemplateFragment);
}

}

mobile(elMovi);


// Modal butonlarni tanlash
var modalBtn = document.querySelectorAll('.btn__temp');
var overley = document.querySelector(".overfley");

// Hodisalarni qo'shish
modalBtn.forEach(function(modalBtn) {
  modalBtn.addEventListener('click', function() {
    modal.classList.add("hidden");
    overley.classList.add("overlay-visible")
    elBody.classList.add("modal-open")
  });
});
  
overley.addEventListener("click", () =>{
  modal.classList.remove("hidden")
  overley.classList.remove("overlay-visible")
  elBody.classList.remove("modal-open")
})

window.addEventListener("keydown", (evt)=>{
  if(evt.key == "Escape") {
    modal.classList.remove("hidden")
    overley.classList.remove("overlay-visible")
  elBody.classList.remove("modal-open")
  }
})

const elDark = document.querySelector(".dark");
const elWhite = document.querySelector(".white");
const elRed = document.querySelector(".red");
const elBlue = document.querySelector(".blue");
const elBody = document.body;

elDark.addEventListener("click", ()=>{
  elBody.classList.remove("active-white", "active-red", "active-blue");
  elBody.classList.add("active-dark");
});

elWhite.addEventListener("click", ()=>{
  elBody.classList.remove("active-dark", "active-red", "active-blue");
  elBody.classList.add("active-white");
});

elRed.addEventListener("click", ()=>{
  elBody.classList.remove("active-white", "active-red", "active-blue");
  elBody.classList.add("active-red");
});

elBlue.addEventListener("click", ()=>{
  elBody.classList.remove("active-white", "active-red", "active-dark");
  elBody.classList.add("active-blue");
});