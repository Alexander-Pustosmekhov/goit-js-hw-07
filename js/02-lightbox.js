import { galleryItems } from "./gallery-items.js";
// Change code below this line

// Variables
const refs = {
  gallery: document.querySelector(".gallery"),
};
let markupString = "";

// Functions call
renderMarkup();

// Functions
function renderMarkup() {
  galleryItems.map((element) => {
    markupString += `<a class="gallery__item" href="${element.original}"><img class="gallery__image" src="${element.preview}" alt="${element.description}"/></a>`;
  });
  refs.gallery.innerHTML = markupString;
}

const lightbox = new SimpleLightbox(".gallery a", {
  captionSelector: ".gallery__image",
  captionsData: "alt",
  captionDelay: 250,
});
