const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

// target BANNER element in DOM
const banner = document.querySelector("#banner");
// =======

// target ARROWS elements in DOM
const arrowLeft = document.querySelector(".arrow_left");
const arrowRight = document.querySelector(".arrow_right");
// =======

// ARROWS click funcs

// listen click event
arrowLeft.addEventListener("click", () => {
  const currentImage = banner.querySelector(".banner-img");

  const dotsBox = Array.from(dots);
  const target = dotsBox.findIndex((el) =>
    el.classList.contains("dot_selected")
  );

  if (!currentImage.src.includes(slides[0].image)) {
    replaceImg(banner, target - 1);
    hightlightBullet(dotsBox, target - 1);
  } else {
    replaceImg(banner, slides.length - 1);
    hightlightBullet(dotsBox, slides.length - 1);
  }
});

arrowRight.addEventListener("click", () => {
  const currentImage = banner.querySelector(".banner-img");

  const dotsBox = Array.from(dots);
  const target = dotsBox.findIndex((el) =>
    el.classList.contains("dot_selected")
  );

  if (!currentImage.src.includes(slides[slides.length - 1].image)) {
    replaceImg(banner, target + 1);
    hightlightBullet(dotsBox, target + 1);
  } else {
    replaceImg(banner, 0);
    hightlightBullet(dotsBox, 0);
  }
});
// =======

// create and add bullet CONTAINER
const bulletSection = document.createElement("div");
bulletSection.classList.add("dots");
banner.appendChild(bulletSection);

// create and add bullet ELEMENT
slides.forEach((v, index) => {
  const bullet = document.createElement("span");
  bullet.classList.add("dot");
  bulletSection.appendChild(bullet);

  // set first bullet as selected
  if (index === 0) {
    bullet.classList.add("dot_selected");
  }
});

// target bullets elements from DOM
const dots = document.querySelectorAll(".dot");

// do change img with selected one + hightlight bullet
dots.forEach((elem, index) => {
  elem.addEventListener("click", () => {
    replaceImg(banner, index);
    hightlightBullet(dots, index);
  });
});

// Functions
/**
 * Set up image with given index
 * @param {HTMLElement} section
 * @param {number} index
 */
const replaceImg = (section, index) => {
  section.querySelector(".banner-img").src =
    "/assets/images/slideshow/" + slides[index].image;

  // replace text section
  section.querySelector("p").innerHTML = slides[index].tagLine;
};

/**
 * Syncronize bullets with displayed banner image
 * @param {Array} table
 * @param {number} index
 */
const hightlightBullet = (table, index) => {
  table.forEach((elem, i) => {
    if (index === i) {
      elem.classList.add("dot_selected");
    } else {
      elem.classList.remove("dot_selected");
    }
  });
};
