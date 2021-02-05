// toggle navbar
const toggleMenu = document.querySelector(".navbar__toggle-menu");
const navbarNavContainer = document.querySelector(".navbar__nav-container");
toggleMenu.onclick = function () {
  if (this.style.transform === "rotate(90deg)") {
    this.style.transform = "rotate(0deg)";
    navbarNavContainer.style.height = "100%";
    navbarNavContainer.style.opacity = 1;
  } else {
    this.style.transform = "rotate(90deg)";
    navbarNavContainer.style.height = 0;
    navbarNavContainer.style.opacity = 0;
  }
};

// toggle payment
const paymentMonthly = document.querySelectorAll(".payment__time");

for (let i = 0; i < paymentMonthly.length; i++) {
  paymentMonthly[i].addEventListener("click", (e) => {
    for (let j = 0; j < paymentMonthly.length; j++) {
      if (paymentMonthly[j].classList.contains("btn--primary")) {
        paymentMonthly[j].classList.remove("btn--primary");
      }
    }
    if (!e.target.classList.contains("btn--primary")) {
      e.target.classList.add("btn--primary");
      if (e.target.innerHTML.toLowerCase() === "monthly") {
        const freeMonthlyHTML = "<span>$0</span>/monthly";
        const paidMonthlyHTML = "<span>$99</span>/monthly";
        document.querySelector(
          ".payment__price--free"
        ).innerHTML = freeMonthlyHTML;
        document.querySelector(
          ".payment__price--paid"
        ).innerHTML = paidMonthlyHTML;
      } else {
        const freeAnuallyHTML = "<span>$0</span>/anually";
        const paidAnuallyHTML = "<span>$699</span>/anually";
        document.querySelector(
          ".payment__price--free"
        ).innerHTML = freeAnuallyHTML;
        document.querySelector(
          ".payment__price--paid"
        ).innerHTML = paidAnuallyHTML;
      }
    }
  });
}

// reviews

const reviews = [
  {
    id: 1,
    title: "User friendly and customizable",
    content:
      "Get your blood tests delivered at home collect a sample from the news your blood tests.",
    avatar_url: "https://avatars.githubusercontent.com/u/1?v=4",
    name: "mojombo",
    stars: 5,
    position: "CEO of company 1",
  },
  {
    id: 2,
    title: "The best product that I found",
    content:
      "Get your blood tests delivered at home collect a sample from the news your blood tests.",
    avatar_url: "https://avatars.githubusercontent.com/u/2?v=4",
    name: "defunkt",
    stars: 4,
    position: "CEO of company 2",
  },
  {
    id: 3,
    title: "A nice product",
    content:
      "Get your blood tests delivered at home collect a sample from the news your blood tests.",
    avatar_url: "https://avatars.githubusercontent.com/u/3?v=4",
    name: "pjhyett",
    stars: 3.5,
    position: "CEO of company 3",
  },
];

const fullStar = '<i class="fas fa-star"></i>';
const halfStar = '<i class="fas fa-star-half-alt"></i>';
const noStar = '<i class="far fa-star"></i>';
const checkRemainStars = (stars) => {
  const remainStars = Math.floor(5 - stars);
  return Array.from({ length: remainStars }, (v) => noStar);
};
const getStarsHTML = (stars) => {
  let newStarsHTML = "";
  if (stars < Math.ceil(stars)) {
    newStarsHTML = Array.from({ length: Math.floor(stars) }, (v) => fullStar);
    const lastStars = [...newStarsHTML, halfStar, ...checkRemainStars()];
    return [...newStarsHTML, halfStar, ...checkRemainStars(stars)];
  } else {
    return (newStarsHTML = Array.from(
      { length: Math.floor(stars) },
      (v) => fullStar
    ));
  }
};

const reviewsHTML = reviews.map((review) => {
  const { title, content, avatar_url, name, stars, position } = review;
  return (
    '<div class="reviews__stars">' +
    getStarsHTML(stars).join("") +
    '</div><div class="reviews__title detail__title detail__title--default">' +
    title +
    '</div><div class="reviews__content">' +
    content +
    '</div><div class="reviews__of"><div><img src="' +
    avatar_url +
    '" alt="" class="reviews__avatar"/><div><div class="reviews__name">' +
    name +
    '</div><div class="reviews__position">' +
    position +
    "</div></div></div></div>"
  );
});

const reviews__body = document.querySelector(".reviews__body");
// const reviews__body = (document.querySelector(
//   ".reviews__body"
// ).innerHTML = reviewsHTML.join(""));

// change reviews when clicking on review btns
let indexOfReviewsHTML = 0;
const displayReview = (indexOfReviewsHTML) => {
  reviews__body.innerHTML = "";
  reviews__body.innerHTML = reviewsHTML[indexOfReviewsHTML];
};
const prevOnClick = (index) => {
  indexOfReviewsHTML += index;
  if (indexOfReviewsHTML < 0) {
    indexOfReviewsHTML = reviewsHTML.length - 1;
  }
  displayReview(indexOfReviewsHTML);
  console.log(indexOfReviewsHTML);
};
const nextOnClick = (index) => {
  indexOfReviewsHTML += index;
  if (indexOfReviewsHTML > reviewsHTML.length - 1) {
    indexOfReviewsHTML = 0;
  }
  displayReview(indexOfReviewsHTML);
  console.log(indexOfReviewsHTML);
};

const reviewsPrev = document.querySelector(".reviews__prev");
const reviewsNext = document.querySelector(".reviews__next");

reviewsPrev.onclick = () => prevOnClick(-1);
reviewsNext.onclick = () => nextOnClick(1);
displayReview(0);
