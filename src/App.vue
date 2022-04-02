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
        overflow: hidden;
        font-family: 'Rosatom';
    }

    body, html {
        width: 100%;
        height: 100%;
        background: linear-gradient(287.65deg, #112341 0%, #205596 128.2%);
    }

    #app {
        width: 100%;
        height: 100%;
    }
</style>
<script>

    export default {
        name: 'App',
    }
</script>