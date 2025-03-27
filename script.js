document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".watercolor-img");
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const closeBtn = document.querySelector(".close");

    // Open Lightbox
    images.forEach(image => {
        image.addEventListener("click", function () {
            lightbox.classList.add("show");
            lightboxImg.src = this.src;
        });
    });

    // Close Lightbox
    closeBtn.addEventListener("click", function () {
        lightbox.classList.remove("show");
    });

    // Close Lightbox on Background Click
    lightbox.addEventListener("click", function (e) {
        if (e.target !== lightboxImg) {
            lightbox.classList.remove("show");
        }
    });
});
