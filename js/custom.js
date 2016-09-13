$(document).ready(function () {
    // $(function (){
    //     var images = [
    //             './img/slide/slide-1.jpg',
    //             './img/slide/slide-2.jpg',
    //             './img/slide/slide-3.jpg'
    //         ],
    //         header = $('header'),
    //         imageIndex = 0;
    //
    //     $('.navigation-but').click(function() {
    //
    //         if ($(this).attr('rel') == "next") {
    //             console.log('next');
    //             if (imageIndex  < images.length - 1) {
    //                 header.css('background-image', 'url('+images[++imageIndex ]+')')
    //             }else{
    //                 imageIndex = 0;
    //                 header.css('background-image', 'url('+images[imageIndex]+')');
    //             }
    //         }
    //         if($(this).attr('rel') == "prev") {
    //             console.log('prev');
    //             if (imageIndex  > 0) {
    //                 header.css('background-image', 'url('+images[--imageIndex ]+')')
    //             }else{
    //                 imageIndex  = images.length - 1 ;
    //                 header.css('background-image', 'url('+images[imageIndex]+')');
    //             }
    //         }
    //         return false;
    //     });
    // });

    $('header .nav li a[href^="#"]').on('click', function(event){
        event.preventDefault();
        var anchor = this.hash;
        $('html, body').stop().animate({
            scrollTop: $(anchor).offset().top - 75
        }, 1500);
    });//scroll якорів

    // Header Scroll
    $(window).on('scroll', function() {
        var scroll = $(window).scrollTop();

        if (scroll >= 250) {
            $('nav').addClass('fixed');
        } else {
            $('nav').removeClass('fixed');
        }
    });

});