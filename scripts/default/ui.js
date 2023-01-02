'use strict';
var windowW,windowH,mobileMode,headerH;
$(function (){
    $(window).resize(function(){
        resize();
    }).trigger('resize');
    $(".jqimgFill").imgLiquid();
    $('main').css("opacity","1");
    /* ==========================================================================
		[layout]
    ==========================================================================*/
        $("header .menu-section .menu a").on("mouseenter",function(){
            $(this).addClass("active").parents(".menu").addClass("menuHoverMode");
            $("header .menu-section .number-block").addClass("active").find("div").css("transform","translateY("+$(this).position().top+"px)")
            $("header .menu-section .number-block .now").text($(this).parent().index() + 1);
        });
        $("header .menu-section .menu a").on("mouseleave",function(){
            $(this).removeClass("active").parents(".menu").removeClass("menuHoverMode");
            $("header .menu-section .number-block").removeClass("active").find("div").css("transform","translateY(0px)")
            $("header .menu-section .number-block .now").text(1);
        });
        $(".mouse").click(function(){
           let modify= windowW>767?80:56;
            $("html,body").animate({
                scrollTop:windowH - modify
            },800);
        });
        $(window).scroll(function(){
            $(window).scrollTop()==0?$("html").removeClass("scrollMode"):$("html").addClass("scrollMode");
        }); 
        $("footer .menu a").on("mouseenter",function(){  
            $(this).addClass("active").parents(".menu").addClass("menuHoverMode");
         });
        $("footer .menu a").on("mouseleave",function(){  
            $(this).removeClass("active").parents(".menu").removeClass("menuHoverMode");
         });
        $("footer .society a").on("mouseenter",function(){  
            $(this).addClass("active").parents(".society").addClass("menuHoverMode");
         });
        $("footer .society a").on("mouseleave",function(){  
            $(this).removeClass("active").parents(".society").removeClass("menuHoverMode");
         });
     /* ==========================================================================
		[page]
    ==========================================================================*/
        if($("#project").length!==0){
           window.onload=function(){   
                $(".slick-pagination .total").text($('.slick-wrapper>div').length);
                $('.slick-wrapper').on('init', function(event, slick){
                     $(slick.$slides[0]).addClass("active");
                });
               
                $('.slick-wrapper').on('beforeChange', function(event, slick){
                     $(slick.$slides).removeClass("active");
                });
                $('.slick-wrapper').on('afterChange', function(event, slick, currentSlide){
                    $(slick.$slides[currentSlide]).addClass("active");
                    $(".slick-pagination .current").text(currentSlide+1);
                });
                $('.slick-wrapper').slick({
                    infinite: true,
                    variableWidth: true,
                    centerMode: true,
                    slidesToScroll: 1,
                    arrows:false,

                });
            }; 
        }
        if($("#services").length!==0){
            let url = location.href;
            if (url.indexOf('?') != -1) {
                var nav = url.split('?')[1].split('=')[1];
                let position=$(".block-"+nav).offset().top;
                $(window).scrollTop(position - 80);
            } 
        }
        if($("#contact").length!==0){
            let url = location.href;
            if (url.indexOf('?') != -1) {
                var nav = url.split('?')[1].split('=')[1];
                let position;
                if(nav=="information"){
                    position=$(".information-block").offset().top;
                }
                else{
                    position=$(".form-block").offset().top;
                }
                $(window).scrollTop(position - 80);
            } 
            $(".form-field input,.form-field textarea").focus(function(){
                $(this).parent(".form-field").addClass("active");
            });
            $(".form-field input,.form-field textarea").blur(function(){
                $(this).parent(".form-field").removeClass("active");
            });
            $("#contactForm").validate({
                    rules: {
                        name: "required",
                        tel: "required",
                        email: {
                            required: true,
                            email: true
                        },
                        issue:"required",
                        content: "required",
                        verificationCode:"required"
                    },
                    messages: {
                        name: "此欄位為必填",
                        tel: "此欄位為必填",
                        email: "此欄位為必填",
                        issue: "此欄位為必填",
                        content: "此欄位為必填",
                        verificationCode: "此欄位為必填",
                    },
                    submitHandler: function() {
                        var myModal = new bootstrap.Modal(document.getElementById('sendModal'))
                        myModal.show()
                    }
                });

            var inputs=$(".form-field input,.form-field textarea,.form-field select");
            var mutationObserver = new MutationObserver(function(mutations) {
                mutations.forEach(function(mutation){
                    console.log(mutation.target);
                    if($(mutation.target).hasClass("error")){
                        $(mutation.target).parents(".form-field").addClass("error");
                    }
                    else{
                        $(mutation.target).parents(".form-field").removeClass("error");
                    }
                    
                });
            });
            inputs.each(function(){
                mutationObserver.observe($(this).get(0), {
                    attributes: true,
                    attributeFilter: ["class"]
                });
            });
            if(windowW<576){
                $(".verificationCode-input").attr("placeholder","")
            }

        }
    /* ==========================================================================
		[common]
    ==========================================================================*/
    $(".scrollbarY").mCustomScrollbar({axis: "y",});
    $('.tlt').textillate({
        loop: false,
        initialDelay: 0,
        in: {
        effect: 'fadeInUp',
        delay: 80,
        
        },
    });
    $(".tlt_2").each(function(){
        let text=$(this).text()
        let length=text.length;
        let html="";
        if($(this).hasClass("large")){
            for(let i=0;i<length;i++){
                html+="<span style='animation-delay:"+(i)*0.1+"s;'>"+text.substr(i,1)+"</span>";
            }
        }
        else if($(this).hasClass("small_tlt")){
            for(let i=0;i<length;i++){
                html+="<span style='animation-delay:"+(i)*0.025+"s;'>"+text.substr(i,1)+"</span>";
            }
        }
        else{
            for(let i=0;i<length;i++){
                html+="<span style='animation-delay:"+(i)*0.05+"s;'>"+text.substr(i,1)+"</span>";
            }
        }

        $(this).html(html)
    });
    $(".tlt_menu").each(function(){
        let text=$(this).text()
        let length=text.length;
        let html="";
            for(let i=0;i<length;i++){
                html+="<span>"+text.substr(i,1)+"</span>";
            }

        $(this).html(html)
    });

    $(".gotop").click(function(){
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
        windowW<1400?$("[data-aos-delay]").removeAttr("data-aos-delay"):"";
        $(".banner-section").height(windowH);
        $(".banner-section .jqimgFill").height(windowH);
    }

})
function aosInit(){
    AOS.init({
        duration: 500,
        offset: 10,
        mirror: true,
    });
}

