$(document).ready(function(){
    // Js phần quote
    $('.quote__list .quote__item').hide();
    $('.quote__list .quote__item:first-child').show();
    $('.quote__nav li:first-child').css("background-color",' #ff817e');

    $('.quote__nav li').click(function(){
        $(".quote__nav li").css('background-color','#ffc3c2');
        $(this).css("background-color",' #ff817e');
        $('.quote__list .quote__item').hide();
        var order = $(this).attr('class');
        // $('.quote__list .quote__item.' + order).fadeIn();
        $('.quote__list .quote__item.' + order).fadeIn(1000);
    });

    // Js button back to top
    $("span#backtop").hide();
    $(window).scroll(function(){
        if($(this).scrollTop() > 100){
            $("span#backtop").fadeIn();
        }
        else{
            $("span#backtop").fadeOut();
        }
    });
    $('span#backtop').click(function(){
        $('html,body').animate(
            {scrollTop: 0},
            700
        );
        return false;
    });
});