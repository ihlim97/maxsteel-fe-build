import Swiper from 'swiper';

const variant1 = new Swiper('.carousel.variant-hero', {
    pagination: {
        el: '.carousel-controls .swiper-pagination',
        type: 'fraction'
    },
    navigation: {
        nextEl: '.carousel-controls .swiper-button-next',
        prevEl: '.carousel-controls .swiper-button-prev'
    },
    loop: true,
    autoplay: {
        delay: 5000
    }
})

const variant2 = new Swiper('.carousel.variant-products', {
    slidesPerView: 'auto',
    spaceBetween: 60,
    slidesOffsetBefore: 16,
    pagination: {
        el: '.carousel-controls .swiper-pagination',
        type: 'fraction'
    },
    navigation: {
        nextEl: '.carousel-controls .swiper-button-next',
        prevEl: '.carousel-controls .swiper-button-prev'
    },
    breakpoints: {
        768: {
            slidesOffsetBefore: 48
        }
    }
})

const variant3 = new Swiper('.carousel.variant-timeline', {
    slidesPerView: 2,
    scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true
    },
    breakpoints: {
        768: {
            slidesPerView: 3
        }
    }
})