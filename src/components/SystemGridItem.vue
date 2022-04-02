<template>
    <div class="system-grid-item">
        <span class="system-text" v-html="text">{{text}}</span>
    </div>
</template>

<script>
    export default {
        name: "SystemGridItem",
        props: ['text'],
    }
</script>

<style scoped>
    .system-grid-item {
        display: flex;
        flex-direction: row;
        align-items: center;
        margin: 0 50px 0 0;
    }

    .system-text {
        font-size: 30px;
        font-weight: 400;
        line-height: 39px;
        color: #ffffff;
    }

    .system-grid-item:before {
        content: '';
        background-image: url("../img/line.png");
        background-repeat: no-repeat;
        background-position: left;
        height: 80px;
        padding: 0 0 0 25px;
    }
</style>