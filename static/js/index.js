// Index.js for Diffusion Illusion website

document.addEventListener('DOMContentLoaded', function() {
  // Initialize Bulma carousel if it exists
  if (typeof bulmaCarousel !== 'undefined') {
    var carousels = bulmaCarousel.attach();
  }

  // Initialize Bulma slider if it exists
  if (typeof bulmaSlider !== 'undefined') {
    var sliders = bulmaSlider.attach();
  }

  // Navbar burger menu functionality
  const navbarBurgers = document.querySelectorAll('.navbar-burger');
  if (navbarBurgers.length > 0) {
    navbarBurgers.forEach(function(navbarBurger) {
      navbarBurger.addEventListener('click', function() {
        const target = navbarBurger.dataset.target;
        const targetElement = document.getElementById(target);

        navbarBurger.classList.toggle('is-active');
        targetElement.classList.toggle('is-active');
      });
    });
  }

  // Smooth scrolling for anchor links
  const scrollLinks = document.querySelectorAll('a[href^="#"]');
  scrollLinks.forEach(function(scrollLink) {
    scrollLink.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // Video controls for teaser video
  const teaserVideo = document.getElementById('teaser');
  if (teaserVideo) {
    teaserVideo.addEventListener('loadeddata', function() {
      // Video is ready to play
      console.log('Teaser video loaded');
    });
  }

  // Results carousel videos
  const resultVideos = document.querySelectorAll('.results-carousel video');
  resultVideos.forEach(function(video) {
    video.addEventListener('mouseenter', function() {
      this.play();
    });

    video.addEventListener('mouseleave', function() {
      this.pause();
      this.currentTime = 0;
    });
  });

  // Interpolation slider functionality
  const interpolationSlider = document.getElementById('interpolation-slider');
  if (interpolationSlider) {
    interpolationSlider.addEventListener('input', function() {
      const value = this.value;
      // Handle interpolation logic here if needed
      console.log('Interpolation value:', value);
    });
  }

  // General video controls
  const allVideos = document.querySelectorAll('video');
  allVideos.forEach(function(video) {
    // Add loading class
    video.addEventListener('loadstart', function() {
      this.parentElement.classList.add('is-loading');
    });

    video.addEventListener('canplay', function() {
      this.parentElement.classList.remove('is-loading');
    });

    // Error handling
    video.addEventListener('error', function() {
      console.error('Video failed to load:', this.src);
      this.parentElement.classList.add('has-error');
    });
  });
});
