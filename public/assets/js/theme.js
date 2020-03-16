/**
 * @var $ jQuery
 */

/* Window Load ---------------------- */

$(window).on('load', function () {

    setTimeout(function () {
        $('body').toggleClass('preload loaded');
    }, 800);

});


/* Document Ready ---------------------- */

$(document).ready(function () {

    // BG from img src...
    $(".carousel-fs .carousel-inner .item").each(function () {
        const imgSrc = $(this).find('img').attr('src');
        $(this).css("background-image", "url('" + imgSrc + "')");
    });

    // Inline background image...
    $("[data-bg]").each(function () {
        const image = $(this).attr("data-bg");
        $(this).css({
            backgroundImage: 'url("' + image + '")',
        });
    });

});


/* Window Scroll ---------------------- */

$(window).on('scroll', function () {

    // Write code here


});


/* Window Resize ---------------------- */

$(window).on('resize', function () {

    // Write your code here


});