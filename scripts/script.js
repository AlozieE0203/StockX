const imageBanner = document.querySelector('.image-banner');
let currentIndex = 0;

function nextImage() {
    currentIndex = (currentIndex + 1) % imageBanner.children.length;
    updateTransform();
}

function updateTransform() {
    const transformValue = `translateX(${-currentIndex * 100}%)`;
    imageBanner.style.transform = transformValue;
}

setInterval(nextImage, 3000); // Change image every 3 seconds