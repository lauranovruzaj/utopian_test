// Main nav mobile offcanvas
let openMenu = document.querySelector('.mobile-menu-icon');
let closeMenu = document.querySelector('.site-navigation');
let body = document.querySelector("body")

openMenu.addEventListener('click', () => {
  body.classList.add("opened")
});

closeMenu.addEventListener('click', () => {
  body.classList.remove("opened")
});


// Main slider inicialization
let slideIndex = 1;
let slidesLength = document.getElementsByClassName("slides").length;

addSlideDots(slidesLength);
showSlides(slideIndex);

function addSlideDots(dotsLength) {
    let i;
    for (i = 1; i <= dotsLength; i++) {
      document.querySelector(
        ".dots"
      ).innerHTML += `<span class='dot' onclick='currentSlide(${i})'></span>`;
    }
  }

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";

  setTimeout(() => {
    slideIndex++
    currentSlide(slideIndex);
  }, 4000)
}

