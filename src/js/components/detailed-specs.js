$(function () {
    let isDesktop = window.innerWidth >= 768 ? true : false;
    const desktopBreakpoint = window.matchMedia('(min-width: 768px)');
    desktopBreakpoint.addListener(function (media) {
        if (media.matches) {
            isDesktop = true;
        } else {
            isDesktop = false;
        }
    })

    const $modal = $('#detailed-specs-modal');
    const $links = $('a').filter(function (link) {
        const url = $(this).attr('href');    
        if (url && url.length > 0 && url.indexOf('show_modal=true') !== -1) {
            return true;
        }
        return false;
    });
    
    $links.on('click', function (event) {
        if (isDesktop) {
            const $currLink = $(event.target);
            const pdfLink = $currLink.attr('href');
            if (pdfLink.indexOf('.pdf') === -1) return;
            event.preventDefault()
            
            $modal.find('iframe').attr('src', pdfLink)
            $modal.find('.btn-download').attr('href', pdfLink.replace('?show_modal=true',''))
            $modal.modal('show')
    
            return false;
        }
    })
})