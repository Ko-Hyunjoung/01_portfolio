
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
                    $('.slide-wrap').stop().animate({left:-1903*cnt},600, function(){
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

        },
        section03Fn: function(){

        },        
        section04Fn: function(){

        },
        section05Fn: function(){

        },
        section06Fn: function(){

        }
    };
    sant.init();
})(window,document,jQuery);