let navMenu = document.querySelector(".media_menu");
let navClose = document.querySelector(".media_menu_close");
let navBurger = document.querySelector(".burger");

navBurger.addEventListener('click', () => {
  navMenu.classList.add('active');
})

navClose.addEventListener('click', () => {
  navMenu.classList.remove('active');
})



var swiper = new Swiper(".partnerSwiper", {
  slidesPerView: 1,
  spaceBetween: 20,
  pagination: {
    el: ".partner-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".partner-button-next",
    prevEl: ".partner-button-prev",
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    993: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },
});


document.addEventListener("DOMContentLoaded", () => {
  const tabButtons = document.querySelectorAll(".tab-container__tabs-button");
  const tabContents = document.querySelectorAll(".tab-container__content");

  tabButtons.forEach(button => {
    button.addEventListener("click", () => {
      const targetTab = button.getAttribute("data-tab");

      tabButtons.forEach(btn => btn.classList.remove("tab-container__tabs-button--active"));
      tabContents.forEach(content => content.classList.remove("tab-container__content--active"));

      button.classList.add("tab-container__tabs-button--active");
      document.getElementById(targetTab).classList.add("tab-container__content--active");
    });
  });
});

// const container = document.querySelector('.product .container');
// document.querySelector('.product .slider').addEventListener('input', (e) => {
//   container.style.setProperty('--position', `${e.target.value}%`);
// })


var divisor = document.getElementById("divisor"),
    handle = document.getElementById("handle"),
    slider = document.getElementById("slider");

function moveDivisor() {
  handle.style.left = slider.value+"%";
	divisor.style.width = slider.value+"%";
}

window.onload = function() {
	moveDivisor();
};
