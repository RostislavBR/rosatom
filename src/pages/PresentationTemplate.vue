<template>
    <div class="presentation">
        <div class="presentation-menu">
            <div class="menu-side menu-side_left">
                <img class="menu-logo" :src="require(`@/img/logo.png`)">
                <span class="menu-mark" v-html="getContent.section"></span>
                <router-link class="menu-link" to="/procurement-system"><img :src="require(`@/img/home-dark.png`)">
                </router-link>
            </div>
            <div class="menu-side menu-side_right">
                <div class="menu-title-wrapper">
                    <h1 class="menu-title" v-html="getContent.title"></h1>
                </div>
                <div class="menu-to-top" @click="scrollTop">
                    <span>Наверх</span><img :src="require(`@/img/arrow-top.png`)">
                </div>
            </div>
        </div>
        <div class="presentation-content">
            <vue-custom-scrollbar class="presentation-scroll" :settings="settings">
                <img :src="require(`@/img/presentations/${getContent.banner}`)" class="presentation-image">
            </vue-custom-scrollbar>
        </div>
    </div>
</template>

<script>
    import vueCustomScrollbar from "vue-custom-scrollbar";
    import "vue-custom-scrollbar/dist/vueScrollbar.css";
    import presentations from "../constants/procurementSystem";
    import gsap from "gsap";
    import {ScrollToPlugin} from "gsap/ScrollToPlugin";

    gsap.registerPlugin(ScrollToPlugin);

    export default {
        name: "PresentationTemplate",
        data() {
            return {
                settings: {
                    suppressScrollY: false,
                    suppressScrollX: false,
                    wheelPropagation: false,
                    minScrollbarLength: 72,
                    maxScrollbarLength: 72
                }
            }
        },
        components: {
            vueCustomScrollbar
        },
        computed: {
            getContent() {
                return presentations[this.$route.params.id];
            }
        },
        methods: {
            scrollTop() {
                gsap.to('.ps-container', {duration: 1, scrollTo: {y: 0}});
                console.log('11')
            },
        }
    };
</script>

<style lang="scss" scoped>
    .presentation {
        display: flex;
        width: 1920px;
        height: 1080px;
        background-color: #FFFDFA;
        //background-image: url('../img/presentation-bg.svg');
    }

    .presentation-menu {
        display: flex;
        width: 625px;
    }

    .menu-side_left {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 144px;
        padding: 24px 26px;
        box-sizing: border-box;
        border-right: 0.25px solid #000000;
    }

    .menu-side_right {
        width: 481px;
        box-sizing: border-box;
        position: relative;
    }

    .presentation-content {
        width: 1295px;
        box-sizing: border-box;
        position: relative;

        &:before {
            display: block;
            content: '';
            width: 0.25px;
            height: 100%;
            background-color: #000000;
            position: absolute;
            left: 4.875px;
            bottom: 0;
        }
    }

    .presentation-scroll {
        height: 1080px;
    }

    .menu-logo {
        width: 92px;
        height: 80px;
    }

    .menu-mark {
        display: block;
        width: 100%;
        margin: 28px 0 0 0;
        font-size: 16px;
        line-height: 20px;
        text-align: center;
        color: #6D767C;
    }

    .menu-title-wrapper {
        display: flex;
        align-items: center;
        height: 162px;
        padding: 0 30px;
        box-sizing: border-box;
        position: relative;

        &:after {
            display: block;
            content: '';
            width: 486px;
            height: 0.25px;
            background-color: #6D767C;
            position: absolute;
            right: 0;
            bottom: 0;
            left: 0;
        }
    }

    .menu-title {
        width: 100%;
        margin: 0;
        font-size: 30px;
        line-height: 38px;
        text-align: left;
    }

    .menu-link {
        display: block;
        width: 48px;
        height: 48px;
        position: absolute;
        bottom: 26px;
    }

    .menu-to-top {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        padding: 0 31px;
        box-sizing: border-box;
        position: absolute;
        right: 0;
        bottom: 32px;
        left: 0;

        span {
            font-weight: 700;
            font-size: 22px;
            line-height: 28px;
            color: #6D767C;
        }

        img {
            display: block;
            width: 42px;
            height: 42px;
        }
    }

    .presentation-image {
        background-image: url("../img/background2.svg");
        background-repeat: no-repeat;
        background-position: -620px 0;
    }
</style>
