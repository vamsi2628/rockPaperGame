let intro = document.querySelector(".intro");
let loadingSpan = document.querySelectorAll(".logo");

window.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    loadingSpan.forEach((span, idx) => {
      setTimeout(() => {
        span.classList.add("active");
      }, (idx + 1) * 400);
    });
    setTimeout(() => {
      loadingSpan.forEach((span, idx) => {
        setTimeout(() => {
          span.classList.remove("active");
          span.classList.add("fade");
        }, (idx + 1) * 50);
      });
    }, 5000);

    setTimeout(() => {
      intro.style.top = "-100vh";
    }, 5300);
  });
});
