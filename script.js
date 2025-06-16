const image = document.getElementById('landingImage');

document.addEventListener('mousemove', (e) => {
  const percent = e.clientX / window.innerWidth;
  if (percent > 0.5) {
    image.src = 'IMG_6489.JPG';
  } else {
    image.src = 'IMG_6490.JPG';
  }
});
