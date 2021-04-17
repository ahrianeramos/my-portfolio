$(document).ready(function() {
  $(window).scroll(function(){
    if(this.scrollY > 20) {
       $('.navbar').addClass("sticky");
      } else {
        $('.navbar').removeClass("sticky");
    }
  });
  $('.navbar .menu-button').click(function() {
    $('.navbar .menu').toggleClass("active");
    $('.navbar .menu-button i').toggleClass("active");
  });

var docWidth = document.documentElement.offsetWidth;
[].forEach.call(
  document.querySelectorAll('*'),
  function(el) {
    if (el.offsetWidth > docWidth) {
      console.log(el);
    }
  }
);

});