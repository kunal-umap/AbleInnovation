const sliderImage = document.querySelector('.vdoS');

  function checkSlide() {
    // half way through the image
    const slideInAt = (window.scrollY + window.innerHeight) - sliderImage.height / 2;
    // bottom of the image
    const imageBottom = sliderImage.offsetTop + sliderImage.height;
    const isHalfShown = slideInAt > sliderImage.offsetTop;
    const isNotScrolledPast = window.scrollY < imageBottom;
    if (isHalfShown && isNotScrolledPast) {
    sliderImage.play()
    } else {
    // sliderImage.pause()
    }
  }
  window.addEventListener('scroll', checkSlide());