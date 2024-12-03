// menu
let navMenu = document.querySelector(".media_menu");
let navClose = document.querySelector(".media_menu_close");
let navBurger = document.querySelector(".burger");

navBurger.addEventListener('click', () => {
  navMenu.classList.add('active');
})

navClose.addEventListener('click', () => {
  navMenu.classList.remove('active');
})
// menu

// catalog_filter
document.addEventListener('DOMContentLoaded', () => {
  let catalog_filter_btn = document.querySelector('.catalog_filter_btn');
  let filter_close = document.querySelector('.filter_close');
  let catalog_left = document.querySelector('.catalog_left');
  let filter_bg = document.querySelector('.filter_bg');

  if (catalog_filter_btn) {
      catalog_filter_btn.addEventListener('click', () => {
          if (catalog_left && filter_bg) {
              catalog_left.classList.add('active');
              filter_bg.classList.add('active');
          }
      });
  }

  if (filter_close) {
      filter_close.addEventListener('click', () => {
          if (catalog_left && filter_bg) {
              catalog_left.classList.remove('active');
              filter_bg.classList.remove('active');
          }
      });
  }

  if (filter_bg) {
      filter_bg.addEventListener('click', () => {
          if (catalog_left && filter_bg) {
              catalog_left.classList.remove('active');
              filter_bg.classList.remove('active');
          }
      });
  }
});
// catalog_filter

// select
document.addEventListener("DOMContentLoaded", function () {
  const customSelect = document.querySelector(".custom-select");
  const selected = customSelect.querySelector(".select-selected");
  const optionsContainer = customSelect.querySelector(".select-options");
  const options = customSelect.querySelectorAll(".select-option");

  selected.addEventListener("click", () => {
    customSelect.classList.toggle("active");
  });

  options.forEach((option) => {
    option.addEventListener("click", () => {
      selected.querySelector("span").textContent = option.textContent;
      customSelect.classList.remove("active");
    });
  });

  document.addEventListener("click", (e) => {
    if (!customSelect.contains(e.target)) {
      customSelect.classList.remove("active");
    }
  });
});
// select

// heart
function toggleHeartIcon(heartElement) {
  const defaultIcon = heartElement.querySelector('.default-icon');
  const activeIcon = heartElement.querySelector('.active-icon');

  if (defaultIcon.style.display === 'none') {
    defaultIcon.style.display = 'block';
    activeIcon.style.display = 'none';
  } else {
    defaultIcon.style.display = 'none';
    activeIcon.style.display = 'block';
  }
}

document.addEventListener('DOMContentLoaded', function () {
  const heartElements = document.querySelectorAll('.heart');
  heartElements.forEach(function (heartElement) {
    heartElement.addEventListener('click', function () {
      toggleHeartIcon(heartElement);
    });
  });
});
// heart

// tab global
document.querySelectorAll('.tab-btn').forEach((button) => {
  button.addEventListener('click', () => {
    const tabs = button.closest('.tabs');

    tabs.querySelectorAll('.tab-btn').forEach((btn) => btn.classList.remove('active'));
    tabs.querySelectorAll('.tab-content').forEach((content) => content.classList.remove('active'));

    button.classList.add('active');
    tabs.querySelector(`#${button.dataset.tab}`).classList.add('active');
  });
});
// tab global

// partner slider
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
// partner slider

// partner slider
var swiper2 = new Swiper(".orderSwiper", {
  slidesPerView: 2.2,
  spaceBetween: 20,
  navigation: {
    nextEl: ".order-button-next",
    prevEl: ".order-button-prev",
  },
  breakpoints: {
    768: {
      slidesPerView: 3.2,
    },
    993: {
      slidesPerView: 4,
    },
    1200: {
      slidesPerView: 4,
    },
  },
});
// partner slider

// product_cardSwiper
var swiper3 = new Swiper(".product_cardSwiper", {
  slidesPerView: 1,
  spaceBetween: 20,
  navigation: {
    nextEl: ".comment-button-next",
    prevEl: ".comment-button-prev",
  },
  pagination: {
    el: ".comment-pagination",
    clickable: true,
  },
});
// product_cardSwiper


// tab slider
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
// tab slider

// count_block
let countBlock = document.querySelectorAll('.count_block');
let addBtn = document.querySelectorAll('.card_btn');

if(countBlock.length) {
  addBtn.forEach((btn, btnID) => {
    btn.onclick = () => {
      btn.classList.add('active');
      countBlock[btnID].classList.add('active');
    }
  })
  countBlock.forEach((el, elID) => {
    const plus = el.querySelector('.plus');
    const minus = el.querySelector('.minus');
    const countNumber = el.querySelector('span');
    plus.onclick = () => {
      countNumber.textContent = +countNumber.textContent + 1;
    }
    minus.onclick = () => {
      if(+countNumber.textContent != 0) {
        countNumber.textContent = +countNumber.textContent - 1;
      } else {
        if(addBtn.length) {
          addBtn[elID].classList.remove('active');
          el.classList.remove('active');
        }
      }
    }
  })
}
// count_block

// news tabs
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
// news tabs

// modal
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
// modal


// range

// eski versiya
// var divisor = document.getElementById("divisor"),
//     handle = document.getElementById("handle"),
//     slider = document.getElementById("slider");

// function moveDivisor() {
//   handle.style.left = slider.value+"%";
// 	divisor.style.width = slider.value+"%";
// }

// window.onload = function() {
// 	moveDivisor();
// };

var divisor = document.getElementById("divisor"),
    handle = document.getElementById("handle"),
    slider = document.getElementById("slider");

function moveDivisor() {
  if (handle && divisor && slider) {
    handle.style.left = slider.value + "%";
    divisor.style.width = slider.value + "%";
  }
}

window.onload = function() {
  moveDivisor();
};

if (slider) {
  slider.addEventListener("input", moveDivisor);
}
// range

// input mask
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
// input mask
