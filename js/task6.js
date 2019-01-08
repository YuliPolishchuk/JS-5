;(function() {
  var img = [{image: 'car.jpg', alt: 'Car'}, {image: 'apple.jpg', alt: 'Apple'}];
  var slideIndex = 0;

  console.log(showSlide(false));
  console.log(showSlide());
  console.log(getInform());
  console.log(switchSlideNumber(1));

  function showSlide(next = true) {
    next ? slideIndex++ : slideIndex--;
    slideIndex = Math.max(0, Math.min(img.length - 1, slideIndex));
    return slideIndex;
  }

  function switchSlideNumber(n) {
    if (n <= img.length - 1) {
      slideIndex = n;
      return img[slideIndex];
    }
    slideIndex = img.length;
    return img[slideIndex];
  }
  
  function getInform() {
    return img[slideIndex];
  }
}());
