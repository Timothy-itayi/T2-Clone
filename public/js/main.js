// window.onload = function() {
//     const container = document.getElementById('animatedTextContainer');
//     const animationTiming = parseInt(container.getAttribute('data-animation-timing'), 10) || 3000;
//     const animatedTexts = document.querySelectorAll('.text-slide-up-fade-blur');
//     if (!animatedTexts.length) return;
//     animatedTexts.forEach(text => {
//     text.style.animation = `textSlideUpFadeBlur ${animationTiming}ms ease-in-out forwards`;
//     });
//     let currentText = 0;
    
//     function animateText() {
//     animatedTexts.forEach(text => (text.style.display = 'none'));
//     animatedTexts[currentText].style.display = 'inline';
//     currentText = (currentText + 1) % animatedTexts.length;
//     }
//     animateText();
//     setInterval(animateText, animationTiming);
//     };


// var burgerMenu = document.getElementById('burger-menu');

// var overlay = document.getElementById('menu-list');

// burgerMenu.addEventListener('click', function() {
//   this.classList.toggle("close");
//   overlay.classList.toggle("overlay");
// });

/* Set the width of the side navigation to 250px */
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

/* Set the Dropdown menu for the details-card */
const buttons = document.querySelectorAll(".accordion-button");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const contentId = button.getAttribute("aria-controls");
    const content = document.getElementById(contentId);
    const isExpanded = button.getAttribute("aria-expanded") === "true";
    
    // Close all other dropdowns before toggling the clicked one
    buttons.forEach(b => {
      const otherContentId = b.getAttribute("aria-controls");
      const otherContent = document.getElementById(otherContentId);
      b.setAttribute("aria-expanded", "false");
      otherContent.hidden = true;
    });

    // Toggle the clicked dropdown
    if (isExpanded) {
      button.setAttribute("aria-expanded", "false");
      content.hidden = true;
    } else {
      button.setAttribute("aria-expanded", "true");
      content.hidden = false;
    }
  });
});



(function () {
  "use strict";

  // Vertical Slider object
  const vertical_slider = {

      // Slide class name
      slider_class: ".slider",

      // Show slide
      show_slide: function (slide_id, context_item) {
          const slide_container = context_item.closest(this.slider_class).querySelector(".slides");
          if (slide_container) {
              const slides = slide_container.querySelectorAll(".slide");
              if (slides && slides[slide_id]) {

                  // Scroll to active slide
                  slide_container.scrollTo({
                      top: slides[slide_id].offsetTop,
                      behavior: "smooth"
                  });


                  // Set active context item
                  const active_context_item = context_item.closest(".slide_navigation").querySelector(".active");
                  if (active_context_item) {
                      active_context_item.classList.remove("active");
                  }

                  context_item.classList.add("active");
              }
          }
      },

      // Initialize slide
      init_slider: function (slider) {

          const navigation_items = slider.querySelectorAll(".slide_navigation a");

          if (navigation_items) {
              Object.keys(navigation_items).forEach(function (key) {
                  navigation_items[key].onclick = function (e) {
                      e.preventDefault();

                      vertical_slider.show_slide(key, navigation_items[key]);
                  };
              });
          }

      },

      // Initialize sliders
      init: function () {

          // Iterate over each slider
          document.querySelectorAll(this.slider_class).forEach((slider) => this.init_slider(slider));

      }
  };

  // Initialize sliders
  vertical_slider.init();
}());



gsap.registerPlugin(ScrollTrigger);

// Function to adjust slide height based on the image size
const adjustSlideHeights = () => {
  const slides = gsap.utils.toArray('.carousel_slide');
  slides.forEach(slide => {
    const img = slide.querySelector('img');
    if (img) {
      img.onload = () => {
        slide.style.height = `${img.clientHeight}px`;
      };
      // For images already loaded
      if (img.complete) {
        slide.style.height = `${img.clientHeight}px`;
      }
    }
  });
};

// Call the function to set initial heights
adjustSlideHeights();

// Create a ScrollTrigger instance to manage smooth scrolling
ScrollTrigger.create({
  trigger: '.carousel-wrapper', // Use wrapper as trigger
  start: 'top top',
  end: () => {
    const slides = gsap.utils.toArray('.carousel_slide');
    const totalWidth = slides.reduce((total, slide) => total + slide.offsetWidth, 0);
    const viewportWidth = window.innerWidth;
    const endScroll = totalWidth - viewportWidth;
    return `+=${endScroll}`; // Stop scrolling at the end of the last slide
  },
  scrub: 1, // Smooth scrolling
  pin: true, // Pin the `.carousel-wrapper` container in place
  markers: false // Optional: for debugging purposes
});
