
;(function(window,document,$,undefined){

    var sant = {

        init:      function(){
            var that = this;
            
            that.headerFn();
            that.section01Fn();
            that.section02Fn();
            that.section03Fn();
            that.section04Fn();
            that.section05Fn();
            that.section06Fn();

        },
        headerFn:     function(){
            
            $(window).scroll(function(){
                if( $(window).scrollTop() >= 50){
                    $('#header').addClass('addHeader');
                    $('.goTop').addClass('addGoTop');
                }
                else{
                    $('#header').removeClass('addHeader');
                    $('.goTop').removeClass('addGoTop');
                }
            });

            $('.goTop-btn').on({
                click: function(){
                    $('html,body').stop().animate({scrollTop:0},800);
                }
            });

            $('.side-menu').on({
                click: function(){
                    $('.modal-wrap').stop().animate({right:0},600);
                }
            });

            $('.close').on({
                click: function(){
                    $('.modal-wrap').stop().animate({right:-100+'%'},600);
                }
            });
        },
        section01Fn: function(){
            var cnt=0;
            var setId=0;
            var setId2=0;

            initTimerFn();
            
                function nextSlideCountFn(){
                    cnt++;
                    mainSlideFn();
                }
                function prevSlideCountFn(){
                    cnt--;
                    mainSlideFn();
                }
                function mainSlideFn(){
                    $('.slide-wrap').stop().animate({left:-1903*cnt},1000, function(){
                        if(cnt>8){ cnt=0; }
                        if(cnt<0){ cnt=8; }
                        $('.slide-wrap').stop().animate({left:-1903*cnt},0);

                        
                    });
                    pageBtnFn(cnt);
                }

                $('.nextBtn').on({
                    click: function(){
                        if(!$('.slide-wrap').is(":animated")){
                            nextSlideCountFn();
                        }
                        timerControlFn();
                        
                    }
                });

                function timerControlFn(){
                    
                    clearInterval(setId)
                    clearInterval(setId2);
                    $('.pause-play-btn').addClass('addPlay');
                    

                    var cnt2=0;
                    setId2 = setInterval(function(){
                        cnt2++;

                        if(cnt2>10){
                            nextSlideCountFn();
                            initTimerFn();
                            clearInterval(setId2);
                            $('.pause-play-btn').removeClass('addPlay');
                        }
                    }, 1000);
                }

                $('.slide-wrap').swipe({
                    swipeLeft: function(){
                        if( !$('.slide-wrap').is(':animated') ){
                            nextSlideCountFn();
                        }
                        timerControlFn();
                    },
                    swipeRight: function(){
                        if( !$('.slide-wrap').is(':animated') ){
                            prevSlideCountFn();
                        }
                        timerControlFn();
                    }
                });

                $('.prevBtn').on({
                    click: function(){
                        if(!$('.slide-wrap').is(':animated')){
                        prevSlideCountFn();
                        }
                        timerControlFn();
                    }
                });

                $('.page-btn').each(function(index){
                    $(this).on({
                        click: function(){
                            cnt=index;
                            mainSlideFn();
                            clearInterval(setId);
                            $('.pause-play-btn').addClass('addPlay');
                            
                            timerControlFn();                            
                        }
                    })
                });
    
                    function pageBtnFn(z){
                        z>8 ? z=0 : z;
                        $('.page-btn').removeClass('addPageBtn');
                        $('.page-btn').eq(z).addClass('addPageBtn');
                    }
                    function initTimerFn(){
                        setId = setInterval(nextSlideCountFn, 2500);
                    }


                
                $('.pause-play-btn').on({
                    click: function(){
                        var x = null;
                            x = $(this).hasClass('addPlay');
                            if ( x==false){
                                clearInterval(setId);
                                clearInterval(setId2);
                                $(this).addClass('addPlay');
                            }
                            else if( x== true){
                                // nextSlideCountFn();
                                clearInterval(setId);
                                clearInterval(setId2);
                                nextSlideCountFn(); //다음슬라이드
                                initTimerFn(); //셋인터발
                                $(this).removeClass('addPlay');

                            }                        
                    }
                });
        },
        section02Fn: function(){
            $('.bt').on({
                click:  function(event){
                    event.preventDefault();
                    $('.bt').removeClass('addLine');
                    $(this).addClass('addLine');
                }
            });

            $('.bt1').on({
                click:  function(event){
                    event.preventDefault();
                    $('#section2').removeClass('add2');
                    $('#section2').removeClass('add3');
                    $('#section2').addClass('add1');                    
                }
            });

            $('.bt2').on({
                click:  function(event){
                    event.preventDefault();
                    $('#section2').removeClass('add1');
                    $('#section2').removeClass('add3');
                    $('#section2').addClass('add2');
                }
            });

            $('.bt3').on({
                click:  function(event){
                    event.preventDefault();
                    $('#section2').removeClass('add1');
                    $('#section2').removeClass('add2');
                    $('#section2').addClass('add3');

                }
            });
        },
        section03Fn: function(){
            var t=0;

            
            $(window).scroll(function(){
                if( $(this).scrollTop() >= $('#section1').offset().top+100 ){
                    if(t==0){
                        t=1;
                        $('#section3').addClass('addEvent');
                    }
                }
                else {
                    if(t==1){
                        t=0;
                        $('#section3').removeClass('addEvent');
                    } 
                }
            });
        },        
        section04Fn: function(){
            var cnt = 0;

            $('.gallery-img-btn').on({
                click: function(){
                    $('.modal').stop().fadeIn(300);
                    $('html').addClass('addScroll');
                }
            });

            $('.close-btn, .img-wrap').on({
                click: function(){
                    $('.modal').stop().fadeOut(300);
                    $('html').removeClass('addScroll');
                }
            });

            $('.img-btn, .arrow-right-btn').on({
                click: function(event){
                    event.stopPropagation();
                    cnt++;
                    if(cnt>5){ cnt=0; }

                    var txt = '<img src="./img/sec4_img_' + (1+cnt) + '.jpg" alt="">';
                        
                        $('.img-btn').html( txt );

                }
            });

            $('.arrow-left-btn').on({
                click: function(event){
                    event.stopPropagation();
                    cnt--;
                    if(cnt<0){ cnt=5; }

                    var txt = '<img src="./img/sec4_img_' + (1+cnt) + '.jpg" alt="">';
                        
                        $('.img-btn').html( txt );

                }
            });

        },
        section05Fn: function(){

        },
        section06Fn: function(){

        }
    };
    sant.init();
})(window,document,jQuery);