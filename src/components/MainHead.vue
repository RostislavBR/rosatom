<template>
    <div class="head-container">
        <MainHeadTitle/>
        <img src="@/img/logo.svg" alt="logo" class="logo">
    </div>
</template>

<script>
    import MainHeadTitle from "@/components/MainHeadTitle";

    export default {
        name: "MainHead",
        components: {MainHeadTitle},
    }
</script>

<style lang="scss">
    .head-container {
        display: flex;
        flex-direction: row;
        justify-content: center;
        position: relative;
        padding: 52px 0 10px 0;
        margin: 0 0 171px 0;
    }

    .logo {
        position: absolute;
        top: 22.2px;
        right: 10px;
    }
</style>