let navMenu = document.querySelector(".media_menu");
let navClose = document.querySelector(".media_menu_close");
let navBurger = document.querySelector(".burger");

navBurger.addEventListener('click', () => {
  navMenu.classList.add('active');
})

navClose.addEventListener('click', () => {
  navMenu.classList.remove('active');
})



var swiper = new Swiper(".treatmentsSwiper", {
  slidesPerView: 1.10,
  spaceBetween: 28,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 2.2,
      spaceBetween: 28,
    },
    993: {
      slidesPerView: 3.2,
      spaceBetween: 28,
    },
    1200: {
      slidesPerView: 3.6,
      spaceBetween: 40,
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
