
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
                }

                $('.nextBtn').on({
                    click: function(){
                        nextSlideCountFn();
                    }
                });
                $('.prevBtn').on({
                    click: function(){
                        prevSlideCountFn();
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