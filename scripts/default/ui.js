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
        let name=$(".contact-section #name").val();
        let tel=$(".contact-section #tel").val();
        let email=$(".contact-section #email").val();

        if(name === '' || !!tel === '' || !isEmail(email)){
            failureModal.show();   
        }
        else{
            // $("#contactForm").submit();
            successModal.show();  
        }
        
    });

     /* ==========================================================================
		[common]
    ==========================================================================*/
    gsap.registerPlugin(ScrollTrigger);
    gsap.fromTo(".banner-section .move-element",{y:0}, {
      y: 100,
      scrollTrigger: {
        scrub: 1,
        trigger: "#move-trigger", //觸發得物件
        start: "top top", // (物件開始位置, 卷軸開始位置) top center bottom px
        endTrigger:"#move-end-trigger"
      }
    });


     /* ==========================================================================
		[page]
    ==========================================================================*/
    //brand
    if($("#brand").length!==0){  
      $("header .menu-wrapper .menu li").eq(0).addClass("active");
      var controller = new ScrollMagic.Controller();

      let targetWidth=$(".section-1 .text-block img").width();
      let targetLeft=Math.floor($(".section-1 .text-block").css("left").replace("px",""));

      let value= targetWidth - windowW + targetLeft * 2;
      var tween = TweenMax.to(".section-1 .text-block", 1, {x: -value, ease: Linear.easeNone});


      new ScrollMagic.Scene({triggerElement: "#trigger", duration: 300})
              .setTween(tween)
              .setPin("#target", {pushFollowers: false})
              .addTo(controller);

      let brandSection2Text=new Swiper('#brand .section-2 .text-swiper', {
        loop:true,
        autoHeight:true,
        allowTouchMove:false,
        speed:800,
        pagination: {
          el: '#brand .section-2 .swiper-pagination.fraction',
          type: 'fraction',
        },
      })
      new Swiper('#brand .section-2 .img-swiper', {
        slidesPerView: 1.13,
        spaceBetween: 15,
        speed:800,
        loop:true,
        centeredSlides: true,
        thumbs: {
          swiper: brandSection2Text
        },
        pagination: {
          el: "#brand .section-2 .swiper-pagination.bullets",
          clickable: true,
        },
        breakpoints: {
          576: {
            spaceBetween: 40,
            slidesPerView: 1.55,
          },
          1199: {
            spaceBetween: 70,
            slidesPerView: 1.55,
          }
        }
      })

      new Swiper('#brand .section-4 .swiper', {
        speed:800,
        pagination: {
          el: "#brand .section-4 .swiper .swiper-pagination",
          clickable: true,
        },
      })
    }

    //about
    if($("#about").length!==0){
            $("header .menu-wrapper .menu li").eq(1).addClass("active");
        new Swiper('#about .section-1 .swiper', {
          spaceBetween: 0,
          loop:true,
          centeredSlides: true,
          speed:800,
          navigation: {
            nextEl: '#about .section-1 .swiper .swiper-button-next',
            prevEl: '#about .section-1 .swiper .swiper-button-prev',
          },
          pagination: {
            el: '#about .section-1 .swiper .swiper-pagination',
            type: 'fraction',
          },
          breakpoints: {
            575: {
              slidesPerView:1.3,
            },
            1199: {
              slidesPerView:1.58,
            }
          }
        })

        let aboutSection2Text=new Swiper('#about .section-2 .text-swiper', {
          loop:true,
          speed:800,
          allowTouchMove:false
        })
        new Swiper('#about .section-2 .img-swiper', {
          loop:true,
          speed:800,
          navigation: {
            nextEl: '#about .section-2 .text-box .swiper-button-next',
            prevEl: '#about .section-2 .text-box .swiper-button-prev',
          },
          pagination: {
            el: '#about .section-2 .text-box .swiper-pagination',
            type: 'fraction',
          },
          thumbs: {
            swiper: aboutSection2Text
          }
        })
        new Swiper('#about .section-3 .swiper', {
          slidesPerView:1,
          spaceBetween:52,
          speed:800,
          loop:true,
          navigation: {
            nextEl: '#about .section-3 .swiper .swiper-button-next',
            prevEl: '#about .section-3 .swiper .swiper-button-prev',
          },
          pagination: {
            el: '#about .section-3 .swiper .swiper-pagination',
            type: 'progressbar',
          },
          breakpoints: {
            768: {
              slidesPerView:1.6,
            },
            991: {
              slidesPerView:2.32,
            }
          }
        })
    }

    //location
    if($("#location").length!==0){

    gsap.registerPlugin(ScrollTrigger);
    gsap.fromTo(".banner-section",{y:0}, {
      y: 0,
      scrollTrigger: {
        scrub: 0.1,
        trigger: ".banner-section", //觸發得物件
        start: "top top", // (物件開始位置, 卷軸開始位置) top center bottom px
        toggleClass: "active"
      }
    });



      $("header .menu-wrapper .menu li").eq(2).addClass("active");
      let locationSection2Box2=new Swiper('#location .section-2 .swiper-box-2 .swiper', {
        loop:true,
        speed:800,
        allowTouchMove:false,
      })
      let locationSection2Text=new Swiper('#location .section-2 .swiper-text .swiper', {
        loop:true,
        speed:800,
        allowTouchMove:false,
        thumbs: {
          swiper: locationSection2Box2
        }
      })
      let locationSection2Box1=new Swiper('#location .section-2 .swiper-box-1 .swiper', {
        loop:true,
        speed:800,
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

    $(".reserve-btn").click(() => {
      $("header").removeClass("openMenu");
        $("html,body").animate({
            scrollTop:$(".contact-section").offset().top - $("header").height()
        },800);
    })
    $(".goTop").click(() => {
        $("html,body").animate({
            scrollTop:0
        },800);
    });

    

  
    aosInit();
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

