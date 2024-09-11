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


    document.addEventListener("DOMContentLoaded", function() {
        const menuList = document.getElementById("menu-list");
      
        // Define your menu items
        const menuItems = [
          { href: '/files/products.html', text: 'Tea' },
          { href: '/files/card.html', text: 'Card' },
          { href: 'https://timothyitayi.com/', text: 'CV', target: '_blank' }
        ];
      
        // Function to create menu items
        function createMenuItem(href, text, target = '') {
          const li = document.createElement('li');
          li.classList.add('menu-item');
          
          const a = document.createElement('a');
          a.href = href;
          a.classList.add('menu-link');
          a.textContent = text;
          
          if (target) {
            a.target = target;
          }
          
          li.appendChild(a);
          return li;
        }
      
        // Add menu items to the menu list
        menuItems.forEach(item => {
          menuList.appendChild(createMenuItem(item.href, item.text, item.target));
        });
      
        // Toggle menu visibility
        document.getElementById("hamburger-button").addEventListener("click", function() {
          const navMenu = document.getElementById("nav-menu");
          navMenu.classList.toggle("active");
        });
      });
      