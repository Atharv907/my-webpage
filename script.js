let angle = 0;
const spinner = document.getElementById("spinner");
const totalImages = spinner.children.length;
const anglePerImage = 360 / totalImages;

// Position images in 3D space
[...spinner.children].forEach((img, i) => {
  const rotateY = i * anglePerImage;
  img.style.transform = `rotateY(${rotateY}deg) translateZ(500px)`;
});

// Rotate carousel
function rotateCarousel(direction) {
  if (direction === 'next') {
    angle -= anglePerImage;
  } else {
    angle += anglePerImage;
  }
  spinner.style.transform = `rotateY(${angle}deg)`;
}

// Floating heart animation
function createHeart() {
  const heart = document.createElement('div');
  heart.className = 'heart';
  heart.style.left = `${Math.random() * 100}%`;
  heart.style.animationDuration = `${3 + Math.random() * 2}s`;
  document.querySelector('.hearts-container').appendChild(heart);

  setTimeout(() => heart.remove(), 5000);
}

// Generate hearts continuously
setInterval(createHeart, 300);
