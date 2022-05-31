import { galleryItems } from "./gallery-items.js";
// Change code below this line

// Variables
const refs = {
  gallery: document.querySelector(".gallery"),
};
let markupString = "";
let instance = "";

// Functions call
renderMarkup();

// Listeners
refs.gallery.addEventListener("click", eventValidation);

// Functions
function renderMarkup() {
  galleryItems.map((element) => {
    markupString += `<div class="gallery__item"><a class="gallery__link" href="${element.original}"><img class="gallery__image"src="${element.preview}"data-source="${element.original}"alt="${element.description}"/></a></div>`;
  });
  refs.gallery.innerHTML = markupString;
}

function eventValidation(e) {
  e.preventDefault();
  if (e.target.tagName !== "IMG") {
    return;
  }
  const url = e.target.dataset.source;
  const description = e.target.alt;

  createModal(url, description);
}

function createModal(src, alt) {
  instance = basicLightbox.create(
    `<img src="${src}" alt="${alt}" width="800" height="600">`
  );
  instance.show();
  window.addEventListener("keydown", closeModal);
}

function closeModal(e) {
  if (e.code === "Escape") {
    instance.close();
  }
  window.removeEventListener("keydown", closeModal);
}
