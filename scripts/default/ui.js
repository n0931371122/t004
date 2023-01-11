'use strict';
var windowW,windowH,mobileMode,headerH;
$(function (){
    $(window).resize(function(){
        resize();
    }).trigger('resize');
    /* ==========================================================================
		[layout]
    ==========================================================================*/
    $(".menu-toggle").click(() => {
        $("header").addClass("openMenu");
    })
    $(".close-btn").click(() => {
        $("header").removeClass("openMenu");
    })
    if(windowW>=768){
        $(window).scroll(function(){
            $(window).scrollTop()===0?$("header").removeClass("scrollMode"):$("header").addClass("scrollMode");
        }); 
    }
    /* ==========================================================================
		contact
    ==========================================================================*/
    let failureModal = new bootstrap.Modal(document.getElementById('failureModal'), {})
    let successModal = new bootstrap.Modal(document.getElementById('successModal'), {})
    $(".contact-section .submit").click(() => {
        let value1=$(".contact-section #name").val();
        let value2=$(".contact-section #tel").val();
        let value3=$(".contact-section #email").val();

        console.log(value1)
        if(value1 === '' || !!value2 === '' || !isEmail(value3)){
            failureModal.show();   
        }
        else{
            // $("#contactForm").submit();
            successModal.show();  
        }
        
    });

     /* ==========================================================================
		[page]
    ==========================================================================*/
    //brand
    if($("#brand").length!==0){  
      var controller = new ScrollMagic.Controller();

      let targetWidth=$(".section-1 .text-block img").width();
      let targetLeft=Math.floor($(".section-1 .text-block").css("left").replace("px",""));

      let value= targetWidth - windowW + targetLeft * 2;
      var tween = TweenMax.to(".section-1 .text-block", 1, {x: -value, ease: Linear.easeNone});


      new ScrollMagic.Scene({triggerElement: "#trigger", duration: 300})
              .setTween(tween)
              .setPin("#target", {pushFollowers: false})
              .addIndicators()
              .addTo(controller);


      new Swiper('#brand .section-2 .img-swiper', {
        // Default parameters
        slidesPerView: 1.55,
        spaceBetween: 70,
        loop:true,
        centeredSlides: true,
        pagination: {
          el: "#brand .section-2 .img-swiper .swiper-pagination",
          clickable: true,
        },
      })
      new Swiper('#brand .section-4 .swiper', {
        pagination: {
          el: "#brand .section-4 .swiper .swiper-pagination",
          clickable: true,
        },
      })
    }

    //location
    if($("#location").length!==0){
      let locationSection2Box2=new Swiper('#location .section-2 .swiper-box-2 .swiper', {
        loop:true,
      })
      let locationSection2Text=new Swiper('#location .section-2 .swiper-text .swiper', {
        loop:true,
        thumbs: {
          swiper: locationSection2Box2
        }
      })
      let locationSection2Box1=new Swiper('#location .section-2 .swiper-box-1 .swiper', {
        loop:true,
          pagination: {
            el: '#location .section-2 .swiper-box-2 .swiper-pagination',
            type: 'fraction',
          },
          navigation: {
            nextEl: '#location .section-2 .swiper-box-1 .swiper-button-next',
            prevEl: '#location .section-2 .swiper-box-1 .swiper-button-prev',
          },
          thumbs: {
            swiper: locationSection2Text
          },
          breakpoints: {
            992: {
              navigation: {
                nextEl: '#location .section-2 .swiper-box-2 .swiper-button-next',
              },
            }
          }
      })


      locationSection2Text.slideToLoop(0)
    }

    /* ==========================================================================
		[common]
    ==========================================================================*/


    $(".goTop").click(function(){
        $("html,body").animate({
            scrollTop:0
        },800);
    });

    

  
    aosInit();
    skrollr.init();
    /* ==========================================================================
		[resize]
    ==========================================================================*/

    function resize(){
        windowW=$(window).innerWidth();
        windowH=$(window).height();
        headerH=$("header").height();
    }

})
function aosInit(){
    AOS.init({
        duration: 500,
        offset: 10,
        mirror: true,
    });
}
function isEmail(email) {
  var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  if(!regex.test(email)) {
    return false;
  }else{
    return true;
  }
}

