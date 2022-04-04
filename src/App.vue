<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<style lang="scss">
    @font-face {
        font-family: 'Rosatom';
        font-weight: 600;
        src: url("fonts/RST75.ttf");
    }

    @font-face {
        font-family: 'Rosatom';
        font-weight: 500;
        src: url("fonts/RST56.ttf");
    }

    @font-face {
        font-family: 'Rosatom';
        font-weight: 400;
        src: url("fonts/RST55.ttf");
    }

    @font-face {
        font-family: 'Rosatom';
        font-weight: 100;
        src: url("fonts/RST45.ttf");
    }

    * {
        margin: 0;
        padding: 0;
        font-family: 'Rosatom';
    }

    body, html {
        width: 100%;
        height: 100%;
        background: linear-gradient(287.65deg, #112341 0%, #205596 128.2%);
        overflow-y: hidden;
    }

    #app {
        width: 100%;
        height: 100%;
    }

    .ps {

        .ps__rail-y {
            display: block !important;
            width: 10px !important;
            height: 1080px !important;
            opacity: 1 !important;
            left: 0 !important;
            right: auto !important;

            .ps__thumb-y {
                width: 10px !important;
                background-color: #F8F8F8 !important;
                box-shadow: -2px 2px 4px rgba(211, 211, 211, 0.2), 2px -2px 4px rgba(211, 211, 211, 0.2), -2px -2px 4px rgba(255, 255, 255, 0.9), 2px 2px 5px rgba(211, 211, 211, 0.9), inset 1px 1px 2px rgba(255, 255, 255, 0.3), inset -1px -1px 2px rgba(211, 211, 211, 0.5) !important;
                border-radius: 2px !important;
            }
        }
    }
</style>
<script>

    export default {
        name: 'App',
    }
</script>