const images = document.querySelectorAll(".gallery img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.getElementById("close");

images.forEach((img) => {
  img.addEventListener("click", () => {
    lightbox.style.display = "flex";
    lightboxImg.src = img.src;
  });
});

closeBtn.addEventListener("click", () => {
  lightbox.style.display = "none";
});

lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) {
    lightbox.style.display = "none";
  }
});

// 画像の右クリック・長押しメニューを無効化
document.querySelectorAll("img").forEach(img => {
  img.addEventListener("contextmenu", function(e) {
    e.preventDefault();
  });
});
// About 開閉
const toggle = document.getElementById("about-toggle");
const about = document.getElementById("about");

toggle.addEventListener("click", function(e) {
  e.preventDefault();

  if (about.classList.contains("hidden")) {
    about.classList.remove("hidden");
    about.scrollIntoView({
      behavior: "smooth"
    });
  } else {
    about.classList.add("hidden");
  }
});
