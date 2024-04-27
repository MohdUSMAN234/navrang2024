document.addEventListener('DOMContentLoaded', function() {
    const gallery = document.querySelector('.gallery-wrapper');
    const nextBtn = document.getElementById('nextBtn');
    const prevBtn = document.getElementById('prevBtn');
    const images = document.querySelectorAll('.gallery-wrapper img');
    const imageWidth = images[0].clientWidth;
    let currentIndex = 0;
  
    prevBtn.addEventListener('click', function() {
      currentIndex--;
      if (currentIndex < 0) {
        currentIndex = images.length - 1; // Set index to last image when reaching the beginning
      }
      const offset = -currentIndex * imageWidth;
      translateGallery(offset);
    });
  
    nextBtn.addEventListener('click', function() {
      currentIndex++;
      if (currentIndex >= images.length) {
        currentIndex = 0; // Reset index to loop back to the first image
      }
      const offset = -currentIndex * imageWidth;
      translateGallery(offset);
    });
  
    function translateGallery(offset) {
      gallery.style.transform = `translateX(${offset}px)`;
    }
  });