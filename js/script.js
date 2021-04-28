 //counterUp
 $(document).ready(function(){
  $('.counter').counterUp();
 })

//venobox
$(document).ready(function(){
  $('.venobox').venobox();  
});

// service slider
$(document).ready(function(){
  
$('.slick_slider').slick({
  dots: true,
  infinite: true,
  speed: 1000,
  slidesToShow: 3,
  slidesToScroll: 1,
  prevArrow: '.slick-next',
  nextArrow: '.slick-prev',
  dots: false, 
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
})
 
  // slider arrows custom code
  $(document).ready(function(){
      $('.bg_none1').click(function(){
          $(this).addClass('background')
          $('.bg_none2').removeClass('background')
      })
      $('.bg_none2').click(function(){
          $(this).addClass('background')
          $('.bg_none1').removeClass('background')
      }) 
  })



$(document).ready(function(){

// testimonial slider

$('.testimonial_slider').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 2,
  slidesToScroll: 1,
  arrows: true,
  prevArrow: '.previous',
  nextArrow: '.next',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

$('.previous').click(function(){
  $(this).addClass('bg_arrw');
  $('.next').removeClass('bg_arrw');
})
$('.next').click(function(){
  $(this).addClass('bg_arrw');
  $('.previous').removeClass('bg_arrw');
})

})




// filerizr

$(document).ready(function(){
  $('.filter-container').filterizr( );
})


//  jquery ruhul amin vai
jQuery(document).ready(function($) {
  $('img').replaceWith(function () {
      const img_url = $(this).attr("src")
      return '<a data-featherlight="'+ img_url +'" href="#"><img src="'+ img_url +'" /></a>'
  });
})

// collapsible 
$('#firstCollapseMenu').collapsible({
	accordion: true,
	accordionUpSpeed: 400,
	accordionDownSpeed: 400,
	collapseSpeed: 400,
	contentOpen: null,
	arrowRclass: 'fas fa-plus ',
	arrowDclass: 'fas fa-minus',
	animate: true
});

 

// scroll to top
$('.scrolltotop').click(function(){
  $('html').animate({'scrollTop': '0px'},2000, "easeInOutElastic")
})

 
$(window).scroll(function(){

  var man = $(window).scrollTop() 

  if(man > 500){
    $('.scrolltotop').show()
  }
  else{
    $('.scrolltotop').hide()
  }

})