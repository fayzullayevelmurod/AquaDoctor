let navMenu = document.querySelector(".media_menu");
let navClose = document.querySelector(".media_menu_close");
let navBurger = document.querySelector(".burger");

navBurger.addEventListener('click', () => {
  navMenu.classList.add('active');
})

navClose.addEventListener('click', () => {
  navMenu.classList.remove('active');
})

// let video_btn = document.querySelector(".video_btn");
// let order_video = document.querySelector(".order_video");
// let order__left_in = document.querySelector(".order__left_in");

// video_btn.addEventListener('click', () => {
//   order_video.classList.add('active');
//   order__left_in.classList.add('active');
// })

var swiper = new Swiper(".partnerSwiper", {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
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
      loop: false,
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


const newsSwp = document.querySelectorAll('.news .swp');

if (newsSwp.length) {
  newsSwp.forEach(el => {
    const swp = new Swiper(el.querySelector('.swiper'), {
      slidesPerView: 'auto',
      spaceBetween: 13,
      loop: true,
      navigation: {
        nextEl: el.querySelector('.swp_btn__next'),
        prevEl: el.querySelector('.swp_btn__prev'),
      },
      pagination: {
        el: el.querySelector('.swp_pagination'),
        clickable: true,
      },
      breakpoints: {
        1023: {
          slidesPerView: 3,
          spaceBetween: 20,
        }
      }
    })
  })
}

const newsTabBtn = document.querySelectorAll('.news__tab_head button');
const newsTabItem = document.querySelectorAll('.news__tab_item');

if (newsTabBtn.length) {
  newsTabBtn.forEach((btn, btnID) => {
    btn.onclick = () => {
      newsTabItem.forEach((item, itemID) => {
        if (itemID == btnID) {
          item.classList.add('active');
        } else {
          item.classList.remove('active');
        }
      })
      newsTabBtn.forEach(el => {
        if (btn == el) {
          el.classList.add('active');
        } else {
          el.classList.remove('active');
        }
      })
    }
  })
}

const serviceItem = document.querySelectorAll('.service__item');
if (serviceItem.length) {
  serviceItem.forEach(el => {
    const header = el.querySelector('h3');
    const content = el.querySelector('.service__item_body');

    if (window.innerWidth <= 1023 && el.classList.contains('active')) {
      content.style.maxHeight = content.style.maxHeight ? null : content.scrollHeight + 'px';
    }

    header.addEventListener('click', () => {
        if (window.innerWidth <= 1023) {
          el.classList.toggle('active');
          content.style.maxHeight = content.style.maxHeight ? null : content.scrollHeight + 'px';
        }
      });

  })
}

const orderModal = document.querySelector('.order-modal');
const orderModalOpen = document.querySelector('.order-modal__open');
const orderModalClose = document.querySelector('.order-modal__close');
const orderModalBg = document.querySelector('.order-modal__bg');

if (orderModalOpen) {
  orderModalOpen.onclick = () => {
    orderModal.classList.add('active');
  }

  orderModalClose.onclick = () => {
    orderModal.classList.remove('active');
  }

  orderModalBg.onclick = () => {
    orderModal.classList.remove('active');
  }
}
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

function maskPhone(input) {
  input.addEventListener("input", function () {
    let value = input.value.replace(/\D/g, "");
    let formatted = "+7 (";

    if (value.length > 1) formatted += value.substring(1, 4);
    if (value.length > 4) formatted += ") " + value.substring(4, 7);
    if (value.length > 7) formatted += "-" + value.substring(7, 9);
    if (value.length > 9) formatted += "-" + value.substring(9, 11);

    input.value = formatted;
  });
}

const phoneInputs = document.querySelectorAll(".phone-input");
phoneInputs.forEach((input) => maskPhone(input));
