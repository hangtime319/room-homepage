// ELEMENTS
const logoMobile = document.querySelector(".logo");
const menu = document.querySelector("nav");
const menuMobile = document.querySelector(".menu__mobile");
const closeMenu = document.querySelector(".close");

// MENU
menuMobile.addEventListener("click", () => {
  logoMobile.classList.add("disabled");
  menu.classList.add("active");
});

closeMenu.addEventListener("click", () => {
  menu.classList.add('closing');
  setTimeout(() => {
    menu.classList.remove('active');
    menu.classList.remove('closing');
    logoMobile.classList.remove('disabled');
  }, 300);
});

// CAROUSEL
const btnPrev = document.querySelector(".angle__left");
const btnNext = document.querySelector(".angle__right");
const imgMain = document.querySelector(".img__main");
const title = document.querySelector(".title");
const description = document.querySelector(".description");
const screen = window.innerWidth;

let texts = [
  {
    title: "Discover innovative ways to decorate",
    description:
      "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
  },
  {
    title: "We are available all across the globe",
    description:
      "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
  },
  {
    title: "Manufactured with the best materials",
    description:
      "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.",
  },
];

let count = 0;

function changeImage(direction) {
  imgMain.style.transition = 'transform 0.3s ease-in';

  if(direction === 'next') {
    count = (count + 1) % texts.length;
    imgMain.style.transform = 'translateX(-100%)';
  } else {
    count = (count - 1 + texts.length) % texts.length;
    imgMain.style.transform = 'translateX(-100%)';
  }

  setTimeout(() => {
    if(screen > 475) {
      imgMain.src = `./images/desktop-image-hero-${count + 1}.jpg`;
    } else {
      imgMain.src = `./images/mobile-image-hero-${count + 1}.jpg`;
    }
    title.textContent = texts[count].title;
    description.textContent = texts[count].description;

    imgMain.style.transition = 'none';
    imgMain.style.transform = 'translateX(0)';
  }, 300);
}

btnNext.addEventListener("click", () => changeImage('next'));
btnPrev.addEventListener("click", () => changeImage('prev'));