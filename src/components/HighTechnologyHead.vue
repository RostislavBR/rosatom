<template>
    <div class="head-container">
        <HighTechnologyHeadTitle/>
        <img src="@/img/logo.svg" alt="logo" class="logo">
    </div>
</template>

<script>
    import HighTechnologyHeadTitle from "@/components/HighTechnologyHeadTitle";

    export default {
        name: "HighTechnologyHead",
        components: {HighTechnologyHeadTitle},
    }
</script>

<style scoped>
    .head-container {
        display: flex;
        flex-direction: row;
        justify-content: center;
        position: relative;
        padding: 52px 0 10px 0;
        margin: 0 0 255px 0;
    }

    .logo {
        position: absolute;
        top: 22.2px;
        right: 10px;
    }
</style>