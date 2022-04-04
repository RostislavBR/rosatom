<template>
    <div class="engineering-container">
        <swiper :options="swiperOptions" ref="mySwiper">
            <swiper-slide class="slide">
                 <img src="../img/group1.png" alt="image">
            </swiper-slide>
            <swiper-slide class="slide">
                 <img src="../img/group2.png" alt="image">
            </swiper-slide>
            <div class="swiper-button-prev" @click="onClickPrev" slot="button-prev"></div>
            <div class="swiper-button-next" @click="onClickNext" slot="button-next"></div>
        </swiper>
        <router-link to="/high-technology" class="security-home-button"></router-link>
    </div>
</template>

<script>
    // import Vue from 'vue';
    import  {  swiper ,  swiperSlide  }  from  'vue-awesome-swiper';
    import "swiper/swiper-bundle.min.css";
    import "swiper/swiper.min.css";

    export default {
        name: "EngineeringProducts",
        data() {
            return {
                swiperOptions: {
                    slidesPerView: 1,
                    autoplay: false,
                    loop: true,
                    pagination: {
                        clickable: true,
                    },
                    navigation: {
                        nextEl: '.swiper-button-prev',
                        prevEl: '.swiper-button-next',
                    },
                },
            }
        },
        components: {
            swiper,
            swiperSlide,
        },
        computed: {
            swiper() {
                return this.$refs.mySwiper.swiper
            },
        },
        methods: {
            onClickNext() {
                this.swiper.slideTo(2, 1000, false);
            },
            onClickPrev() {
                this.swiper.slideTo(1, 1000, false);
            }
        },
        mounted() {
            console.log(swiper);
        }
    }
</script>

<style scoped>
    .engineering-container {
        position: relative;
    }

    .security-home-button {
        display: block;
        position: absolute;
        top: 984px;
        left: 48px;
        text-decoration: none;
        color: #ffffff;
        background-image: url("../img/home-dark.png");
        background-repeat: no-repeat;
        background-position: center;
        height: 48px;
        width: 48px;
        z-index: 10;
    }

    .swiper-button-next,
    .swiper-button-prev {
        width: 68.99px;
        height: 67.58px;
        background: #F0A600;
        border-radius: 50%;
    }

    .disabled {
        opacity: 0;
    }

    .swiper-button-next:after,
    .swiper-button-prev:after {
        font-size: 25px;
        color: #ffffff;
    }
</style>