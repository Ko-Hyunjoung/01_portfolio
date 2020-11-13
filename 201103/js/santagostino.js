
;(function(window,document,$,undefined){
    var sant = {
        innit: function(){
            sant.header();
        },
        header: function(){
            var winH = $(window).width();

            $(window).scroll(function(){
                if( $(window).scrolltop() >= 150){
                    $('#header').addClass('addHeader');
                }
                else{
                    $('#header').removeClass('addHeader');
                }
            });
        },
        section01Fn: function(){

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