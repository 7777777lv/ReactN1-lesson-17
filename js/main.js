$('.owl-carousel').owlCarousel({
    loop:true,
    nav:true,
    dots:true,
    // margin:30,
    responsiveClass:true,
    responsive:{
        400:{
            items:1,
        },
        1000:{
          items:2,
        },
       1300:{
        items:3,
       }
        
    }
  })