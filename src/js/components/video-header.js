$(function () {
    $('.header.variant-video video').on('canplay', function(e) {
        $(this).parents('.header.variant-video').addClass('video-ready')
    })
})