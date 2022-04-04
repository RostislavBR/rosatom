<template>
    <div class="iframe-wrapper">
        <div class="iframe-header" @click="toggleIframe">
            <img :src="require(`@/img/arrow-circle.svg`)"/>
            <h2>{{title}}</h2>
        </div>
        <iframe :src="src" frameborder="0" class="iframe"></iframe>
    </div>
</template>

<script>
    export default {
        name: "IframeComponent",
        props: ["handler", "title", "src"],
        methods: {
            toggleIframe() {
                this.handler(false)
            }
        }
    }
</script>

<style scoped>
    .iframe-wrapper {
        display: flex;
        flex-direction: column;
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 100;
    }

    .iframe-header {
        display: flex;
        align-items: center;
        width: 100%;
        height: 80px;
        padding: 0 50px;
        background-color: #fff;

        h2 {
            margin: 0;
            font-size: 30px;
            font-weight: 300;
            line-height: 38px;
            color: #052958;
        }

        img {
            display: block;
            width: 42px;
            height: 42px;
            margin: 0 50px 0 0;
        }
    }

    .iframe {
        flex-grow: 1;
    }
</style>