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
    
    if (window.innerWidth <= 1023) {
      header.addEventListener('click', () => {
        el.classList.toggle('active');
        content.style.maxHeight = content.style.maxHeight ? null : content.scrollHeight + 'px';
      });
    }

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