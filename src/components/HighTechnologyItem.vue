<template>
    <router-link :to="`${src}`" style="text-decoration: none; color: #ffffff">
        <div class="high-technology-item">
            <span class="high-technology-text" v-html="text">{{text}}</span>
        </div>
    </router-link>
</template>

<script>
    export default {
        name: "HighTechnologyItem",
        props: ['text', 'src'],
    }
</script>

<style scoped>
    .high-technology-item {
        display: flex;
        flex-direction: row;
        align-items: center;
        margin: 0 30px 0 0;
    }

    .high-technology-text {
        font-size: 30px;
        font-weight: 400;
        line-height: 39px;
        color: #ffffff;
    }

    .high-technology-item:before {
        content: '';
        background-image: url("../img/line.png");
        background-repeat: no-repeat;
        background-position: left;
        height: 80px;
        padding: 0 0 0 25px;
    }
</style>