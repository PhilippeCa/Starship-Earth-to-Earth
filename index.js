const scrollingWordsSelector = ".scrolling-words-box ul";
const paths = document.querySelectorAll(
  ".world-map-container path.animated-path"
);

const observer = new IntersectionObserver(
  function (entries) {
    // isIntersecting is true when element and viewport are overlapping
    // isIntersecting is false when element and viewport don't overlap
    if (entries[0].isIntersecting === true) {
      animate();

      setInterval(() => {
        animate();
      }, 7500);
    }
  },
  { threshold: [0.35] }
);

observer.observe(document.querySelector("#destinations"));
observer.observe(document.querySelectorAll(scrollingWordsSelector));

function animate() {
  animateMapPath();
  animateScrollingWords();
}

function animateMapPath() {
  paths.forEach((path) => {
    path.classList.remove("animate");
    setTimeout(() => {
      path.classList.add("animate");
    }, 200);
  });
}

function animateScrollingWords() {
  const scrollingText = document.querySelectorAll(scrollingWordsSelector);
  scrollingText.forEach((text) => {
    text.classList.add("animate");
  });
}

function onScrollIndicatorClicked() {
  document
    .getElementById("destinations")
    .scrollIntoView({ behavior: "smooth" });
}
