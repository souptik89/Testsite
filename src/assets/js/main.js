$('#slide').owlCarousel({
  autoplay: !1,
  autoplayTimeout: 5000,
  autoplayHoverPause: !1,
  lazyLoad: !1,
  nav: !0,
  dots: 0,
  navText: ['<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>'],
  responsive: {
    0: {
      items: 1,
      nav: !1
    },
    320: {
      items: 1,
      nav: !1
    },
    568: {
      items: 1,
      nav: !1
    },
    768: {
      items: 1,
      nav: !1
    },
    992: {
      items: 1
    }
  }
});
var ii = 0;
$('#slide .owl-dots .owl-dot').each(function () {
  $(this).html('<img class="img-responsive" src="' + $('.data_img .data_img_' + ii).attr('data-src') + '" alt="" />');
  ii++
})
