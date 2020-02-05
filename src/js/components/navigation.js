import OverlayScrollbars from 'overlayscrollbars';

$(function() {

    // OverlayScrollbars(document.querySelector('body'), {
    //     autoHide: "scroll"
    // })

    const $header = $('header');
    const $drawer = $header.find('nav.drawer');
    const $hamburger = $header.find('.left-pane button.hamburger');

    $hamburger.on('click', function() {
        $(this).toggleClass('is-active')
        $drawer.toggleClass('active')
        $('body').toggleClass('nav-open')
    })

})