<template>
    <div class="watch-video-wrapper">
        <span class="watch-text">Смотреть видео</span>
    </div>
</template>

<script>
    export default {
        name: "SystemWatchVideo"
    }
</script>

<style scoped>
.watch-video-wrapper {
    display: flex;
    justify-content: center;
}
.watch-text {
    display: block;
    font-size: 30px;
    font-weight: 400;
    line-height: 38.94px;
    color: #ffffff;
    padding: 20px 0;
}
.watch-text:before {
    content: '';
    background-image: url("../img/video.svg");
    background-repeat: no-repeat;
    background-position: center;
    padding: 5px 25px;
    margin: 0 15px 0 0;
}
</style>