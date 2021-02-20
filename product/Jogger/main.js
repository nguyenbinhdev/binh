$(document).ready(function(){
    $('.slider .slider__item').hide();
    $('.slider .slider__item:first-child').show();   
    $('.slider .slider__item:first-child').addClass('active');
    
    //Đặt 2 class first & last để biết mà quay về đầu hoặc nhảy ra sau cuối 
    $('.slider .slider__item:first-child').addClass('first-item');
    $('.slider .slider__item:last-child').addClass('last-item');

    var number__slider = $('.slider__item').length;

    $('.slider__arrow-item').click(function(){
        $('.slider .slider__item').hide();
        if($(this).hasClass('next')){    
            //Câu if này khi next tới cái item cuối cùng ròi quay về item đầu tiên       
            if($(".slider .slider__item.active").hasClass('last-item')) {
                $(".slider .slider__item:first-child").slideDown();
                $('.slider .slider__item').removeClass('active');
                $('.slider .slider__item:first-child').addClass('active');          
            }   
            else {
                $('.slider .slider__item.active').next().slideDown();
                $('.slider .slider__item.active').next().addClass('active');
                $('.slider .slider__item.active').eq(0).removeClass('active');
            }               
        };
        if($(this).hasClass('prev')){
            //Câu if này khi prev về cái item đầu tiên rồi nhảy đến item cuối cùng
            if($(".slider .slider__item.active").hasClass('first-item')) {
                $(".slider .slider__item:last-child").slideDown();
                $('.slider .slider__item').removeClass('active');
                $('.slider .slider__item:last-child').addClass('active');       
            }
            else {
                $('.slider .slider__item.active').prev().slideDown();
                $('.slider .slider__item.active').prev().addClass('active');
                $('.slider .slider__item.active').eq(1).removeClass('active');
            }          
        }
    });
});

   