// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from 'simplelightbox';

import 'simplelightbox/dist/simple-lightbox.min.css';

console.log(galleryItems);

const galleryEl = galleryItems
  .map((image, index) => {
    return `
  <a class="gallery__item" href="${galleryItems[index].original}">
    <img
      class="gallery__image"
      src="${galleryItems[index].preview}"
      alt="${galleryItems[index].description}"
    />
  </a>`;
  })
  .join('');

const listEl = document.querySelector('.gallery');

listEl.insertAdjacentHTML('beforeend', galleryEl);

// (function () {
//   var $gallery = new SimpleLightbox('.gallery a', {
//     captionDelay: '250ms',
//     captionsData: 'alt',
//   });
// })();

new SimpleLightbox('.gallery a', {
  captionDelay: '250ms',
  captionsData: 'alt',
});
