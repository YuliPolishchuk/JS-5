;(function() {
  var img = [{image: 'car.jpg', alt: 'Car'}, {image: 'apple.jpg', alt: 'Apple'}];
  var slideIndex = 0;

  /*console.log(showSlide(false));
  console.log(showSlide());*/
  console.log(next());
  console.log(previos());
  console.log(getInform());
  console.log(switchSlideNumber(1));

  function next() {
    if (slideIndex < img.length - 1) {
      slideIndex++;
    } else {
      slideIndex = 0;
    }
    return img[slideIndex];
  }
  
  function previos() {
    if (slideIndex>= img.length - 1) {
      slideIndex--;
    } else {
      slideIndex = img.length - 1;
    }
    return img[slideIndex];
  }
  /*
  function showSlide(next = true) {
    if (next) {
      slideIndex++;
    } else {
      slideIndex--;
    }
    slideIndex = Math.max(0, Math.min(img.length - 1, slideIndex));
    return slideIndex;
  }*/

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
