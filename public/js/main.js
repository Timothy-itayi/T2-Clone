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


// Data for Tea Bag option
const teaBagData = {
  carousel: [
    {
      href: "#slide_1",
      src: "/assets/Teas/melbourne_breakfast_100g_cube_tea.jpeg",
      alt: "Melbourne Breakfast Cube Tea"
    },
    {
      href: "#slide_2",
      src: "/assets/Teas/melbourne_breakfast_100g_back.jpeg",
      alt: "Melbourne Breakfast Back"
    },
    {
      href: "#slide_3",
      src: "/assets/Teas/melbourne_breakfast_100g_detail.jpeg",
      alt: "Melbourne Breakfast Detail"
    }
  ],
  product: {
    type: "Tea Bag",
    typeImage: "https://cdn.builder.io/api/v1/image/assets/TEMP/ecaf66043902c43861258fafee534ad95c28ea2df6066bcbda88a67600a73ab2?placeholderIfAbsent=true&apiKey=32a425db04fb41a99abdd773c723f591",
    title: "Melbourne Breakfast Tea Bag Cube 25 pack",
    description: "Indulge and sip a smooth blend of bold, malty black tea and rich velvety vanilla."
  }
};

// Data for Tea Book option
const teaBookData = {
  carousel: [
    {
      href: "#slide_1",
      src: "/assets/Teas/melbourne_breakfast_loose_leaf_lifestyle_1.jpeg",
      alt: "Tea Book Front"
    },
    {
      href: "#slide_2",
      src: "/assets/Teas/melbourne_breakfast_loose_leaf_lifestyle_1.jpeg",
      alt: "Tea Book Back"
    },
    {
      href: "#slide_3",
      src: "/assets/Teas/melbourne_breakfast_loose_leaf_lifestyle_1.jpeg",
      alt: "Tea Book Open"
    }
  ],
  product: {
    type: "Tea Book",
    typeImage: "https://cdn.builder.io/api/v1/image/assets/TEMP/e2a624924eda7768ca2591411ecda032cbf0ca624a068caca5cec65c359c8377?placeholderIfAbsent=true&apiKey=32a425db04fb41a99abdd773c723f591",
    title: "Melbourne Breakfast Tea Book",
    description: "A beautiful book of teas featuring a selection of Melbourne Breakfast Tea."
  }
};

/// Function to update carousel and product details //
function updateProductDetails(data) {
  const carouselNavigation = document.getElementById('carousel-navigation');
  const carouselSlides = document.getElementById('carousel-slides');

  // Clear current carousel content
  carouselNavigation.innerHTML = '';
  carouselSlides.innerHTML = '';

  // Insert new carousel images (navigation)
  data.carousel.forEach((item, index) => {
    // Update navigation images
    const navItem = document.createElement('li');
    navItem.innerHTML = `<a href="${item.href}">
                           <img loading="lazy" src="${item.src}" class="navigation_image" alt="${item.alt}" />
                         </a>`;
    carouselNavigation.appendChild(navItem);

    // Update carousel slides
    const slideItem = document.createElement('div');
    slideItem.className = "carousel_slide";
    slideItem.id = `slide_${index + 1}`;
    slideItem.innerHTML = `<div class="carousel_image_container">
                             <img loading="lazy" src="${item.src}" class="carousel_image" alt="${item.alt}" />
                           </div>`;
    carouselSlides.appendChild(slideItem);
  });

  // Update product details
  document.getElementById('product-type-text').textContent = data.product.type;
  document.getElementById('product-type-image').src = data.product.typeImage;
  document.getElementById('product-title').textContent = data.product.title;
  document.getElementById('product-description').textContent = data.product.description;
}

// Event listeners for buttons
document.getElementById('teaBookButton').addEventListener('click', () => {
  updateProductDetails(teaBookData);
});

document.getElementById('teaBagButton').addEventListener('click', () => {
  updateProductDetails(teaBagData);
});

// Load default product details (Tea Bag)
updateProductDetails(teaBagData);