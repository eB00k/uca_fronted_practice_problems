const images = [...document.querySelectorAll(".my-card img")];
const mainImg = document.querySelector(".lightbox img");

function handleClick(e) {
  images.forEach((img) => {
    img.classList.remove("active");
  });

  mainImg.src = this.dataset.img;
  this.classList.add("active");
}

images.forEach((image) => image.addEventListener("click", handleClick));
