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


var burgerMenu = document.getElementById('burger-menu');

var overlay = document.getElementById('menu-list');

burgerMenu.addEventListener('click', function() {
  this.classList.toggle("close");
  overlay.classList.toggle("overlay");
});


