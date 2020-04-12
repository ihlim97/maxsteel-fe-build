import Swiper from "swiper"
import Vue from 'vue'

$(function() {
    
    const salesEnquiryForm = new Vue({
        el: '#enquiryFormBody',
        data: {
            currStep: 'quote',
            formSwiper: null
        },
        methods: {
            setCurrStep(step) {
                const self = this;
                $(".modal.show").animate({
                    scrollTop: 0
                }, 400, null, function() {
                    self.currStep = step;
                    if (step === 'quote') {
                        self.formSwiper.slideTo(0)
                    } else {
                        self.formSwiper.slideTo(1)
                    }
                })
            }
        },
        mounted: function () {
            this.formSwiper = new Swiper('#salesEnquiryModal .swiper-container', {
                autoHeight: true,
                allowTouchMove: false,
                spaceBetween: 10
            })

            $('#salesEnquiryModal').on('shown.bs.modal', () => {
                this.formSwiper.update()
            })

            this.$nextTick(() => {
                this.formSwiper.update()
            })
        }
    })
})