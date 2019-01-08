;(function() {
    var img = [{image: 'car.jpg', alt: 'Car'}, {image: 'apple.jpg', alt: 'Apple'}];
    var slideIndex = 0;

    console.log(showSlide(1));
    console.log(getInform());
    console.log(switchSlideNumber(1));

    function showSlide(next = true) {
      var slide = next ? slideIndex++ : slideIndex--;
      slideIndex = Math.max(0, Math.min(img.length - 1, slide));
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
