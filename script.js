const animals = [
  {
      alt: "lion",
      src: "https://www.gesser-images.com/wp-content/uploads/2016/08/Lion-046-_DS30374-300x300.jpg"
  },
  {
      alt: "elephant",
      src: "https://globalelephants.org/wp-content/uploads/2014/05/Guida-Blog-Post-424-300x300.jpg"
  },
  {
      alt: "dog",
      src: "https://dickmanroadvet.com/wp-content/uploads/2016/07/dvm2-23-300x300.jpg"
  }
];

const thumbnailsContainer = document.querySelector('.thumbnails');
const mainImage = document.getElementById('main-image');

animals.forEach(animal => {
  const img = document.createElement('img');
  img.src = animal.src;
  img.alt = animal.alt;
  img.addEventListener('click', () => {
      mainImage.src = animal.src;
      mainImage.alt = animal.alt;
  });
  thumbnailsContainer.appendChild(img);
});