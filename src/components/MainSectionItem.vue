<template>
    <router-link :to="`${src}`" style="text-decoration: none; color: #ffffff">
        <div class="main-section-item">
            <img :src="require(`@/img/${image}`)" class="main-section-image"/>
            <span class="main-section-text">{{ text }}</span>
        </div>
    </router-link>
</template>

<script>
    // import {mapMutations} from "vuex";

    export default {
        name: "MainSectionItem",
        props: ['id', 'text', 'image', 'src'],
        methods: {
            // openIframe() {
            //     this.id === 1 && this.toggleIframe(true);
            // },
            // ...mapMutations({
            //     toggleIframe: 'setIframeDigitain'
            // })
        },
    }
</script>

<style lang="scss">
    .main-section-item {
        display: flex;
        flex-direction: column;
        margin: 0 80px;
    }

    .main-section-image {
        display: block;
        margin: 0 0 20px 0;
    }

    .main-section-text {
        font-size: 32.55px;
        font-weight: 400;
        line-height: 42.25px;
        text-align: center;
        color: #ffffff;
    }
</style>