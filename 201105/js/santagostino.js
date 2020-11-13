
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
            var winH = $(window).width();
            
            $(window).scroll(function(){
                if( $(window).scrollTop() >= 50){
                    $('#header').addClass('addHeader');
                }
                else{
                    $('#header').removeClass('addHeader');
                }
            });
        },
        section01Fn: function(){
            var cnt=0;
            var setId=0;
            var setId2=0;

            $('.page-btn').each(function(index){
                $(this).on({
                    click: function(){
                        cnt=index;
                        mainSlideFn();
                        clearInterval(setId);
                        $('.pause-play-btn').addClass('addPlay');
                    }
                })
            });

                function pageBtnFn(z){
                    z>8 ? z=0 : z;
                    $('.page-btn').removeClass('addPageBtn');
                    $('.page-btn').eq(z).addClass('addPageBtn');
                }

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
                        if(cnt>8){
                            cnt=0;
                        }
                        if(cnt<0){
                            cnt=8;
                        }
                        $('.slide-wrap').stop().animate({left:-1903*cnt},0);
                    });
                    pageBtnFn(cnt);
                }

                $('.nextBtn').on({
                    click: function(){
                        if(!$('.slide-wrap').is(":animated")){
                            nextSlideCountFn();
                        }
                        
                        clearInterval(setId);
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
                });
                $('.prevBtn').on({
                    click: function(){
                        if(!$('.slide-wrap').is(":animated")){
                        prevSlideCountFn();
                        }
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
                });

                function timerFn(){
                    setId = setInterval(nextSlideCountFn, 3000);
                }
                timerFn();

                var t=0;
                $('.pause-play-btn').on({
                    click: function(){
                        var x = null;
                            x = $(this).hasClass('addPlay');
                            if ( x==false){
                                clearInterval(setId);
                                $(this).addClass('addPlay');
                            }
                            else if( x== true){
                                nextSlideCountFn();
                                timerFn();
                                $(this).removeClass('addPlay');

                            }

                        // if(t==0){
                        //     t=1;
                        //     $(this).addClass('addPlay');
                        //     clearInterval(setId);
                        // }
                        // else if(t==1){
                        //     t=0;
                        //     $(this).removeClass('addPlay');
                        //     timerFn();

                        // }
                         
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