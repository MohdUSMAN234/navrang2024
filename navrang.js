document.addEventListener('DOMContentLoaded', function() {
  const cursor = document.querySelector('.neon-cursor');
  const trail = document.querySelector('.neon-trail');

  document.addEventListener('mousemove', function(e) {
      const {clientX: x, clientY: y} = e;
      cursor.style.left = x + 'px';
      cursor.style.top = y + 'px';
  });

  document.querySelectorAll('a, button, input, textarea').forEach(element => {
      element.addEventListener('mouseenter', () => {
          cursor.classList.add('is-active');
      });
      element.addEventListener('mouseleave', () => {
          cursor.classList.remove('is-active');
      });
  });
});

document.addEventListener("DOMContentLoaded", function() {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const navMenu = document.querySelector('.nav-menu');
  
    hamburgerMenu.addEventListener('click', function() {
        navMenu.classList.toggle('show');
    });

    // Add event listener to navigation links
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            // Close the navigation menu when a link is clicked
            navMenu.classList.remove('show');
        });
    });
});
  

// document.querySelectorAll(".nav-link").forEach( n => n.
// addEventListener("click", () =>{
//     hamburger.classList.remove("active");
//     navMenu.classList.remove("active");
// }))

  document.addEventListener("DOMContentLoaded", function() {
    const blogPosts = document.querySelectorAll(".blog-post");
    let currentPostIndex = 0;

    function showPost(index) {
        blogPosts.forEach(post => {
            post.style.display = "block";
        });
        blogPosts[index].style.display = "block";
    }

    function nextPost() {
        currentPostIndex = (currentPostIndex + 1) % blogPosts.length;
        showPost(currentPostIndex);
    }

    // Show the first blog post initially
    showPost(currentPostIndex);

    // Add event listener to the "Next" button
    document.getElementById("next-btn").addEventListener("click", nextPost);
});

document.addEventListener('DOMContentLoaded', function() {
    // Get all images in the gallery
    const images = document.querySelectorAll('.gallery-item img');
  
    // Add click event listener to each image
    images.forEach(image => {
      image.addEventListener('click', function() {
        // Get the source of the clicked image
        const src = this.getAttribute('src');
        
        // Display the modal and set the clicked image as its content
        const modal = document.getElementById('imageModal');
        const modalImg = document.getElementById('modalImage');
        modal.style.display = 'block';
        modalImg.src = src;
  
        // Close the modal when the user clicks on the close button
        const closeButton = document.getElementsByClassName('close')[0];
        closeButton.addEventListener('click', function() {
          modal.style.display = 'none';
        });
  
        // Close the modal when the user clicks outside of the modal content
        window.addEventListener('click', function(event) {
          if (event.target == modal) {
            modal.style.display = 'none';
          }
        });
      });
    });
  });

  

  document.addEventListener("DOMContentLoaded", function() {
    const video = document.getElementById("background-video");

    // Create and add audio source to the video element
    const audioSource = document.createElement("source");
    audioSource.src = "img/audio1.mp3"; // Path to audio file
    audioSource.type = "audio/mp3";
    video.appendChild(audioSource);
  
});

// const audioSource = document.createElement("source")
//audioSource.src = "img/audio.mp3";
//audioSorce
  
   // When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("scrollToTopBtn").style.display = "block";
    } else {
        document.getElementById("scrollToTopBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function scrollToTop() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

document.addEventListener('DOMContentLoaded', function () {
  const video = document.getElementById('video');
  let timeout;

  // Pause the video initially
  video.pause();

  // Function to play the video with a 2-second delay
  function playVideoWithDelay() {
    clearTimeout(timeout);
    timeout = setTimeout(function () {
      video.play();
    }, 600); // 2-second delay
  }

  // Event listeners for mouse enter and leave
  video.parentElement.addEventListener('mouseenter', playVideoWithDelay);
  video.parentElement.addEventListener('mouseleave', function () {
    clearTimeout(timeout);
  });
});