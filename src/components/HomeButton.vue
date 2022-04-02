<template>
    <router-link to="/" class="home-button">
    </router-link>
</template>

<script>
    export default {
        name: "HomeButton"
    }
</script>

<style scoped>
    .home-button {
        display: block;
        position: absolute;
        top: 984px;
        left: 48px;
        text-decoration: none;
        color: #ffffff;
        background-image: url("../img/home.svg");
        background-repeat: no-repeat;
        background-position: center;
        height: 48px;
        width: 48px;
    }
</style>