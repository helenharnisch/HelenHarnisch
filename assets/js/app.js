//scrollreveal
window.sr = ScrollReveal({ reset: true, mobile: true });

sr.reveal('.reveal', { duration: 3000 });

$(window).scroll(function() {
  if ($("#menu").offset().top > 56) {
    $("#menu").addClass("down");
  } else {
    $("#menu").removeClass("down");
  }
});
