<template>
    <div class="security-grid-item">
        <div class="security-video-wrapper">
            <video-player class="video-player-box" :options="playerOptions"/>
        </div>
        <span class="security-play-button">Смотреть видео</span>
    </div>
</template>

<script>
    import 'video.js/dist/video-js.css'
    import {videoPlayer} from 'vue-video-player'

    export default {
        name: "SecurityGridItem",
        props: ['image'],
        data() {
            return {
                playerOptions: {
                    muted: true,
                    language: 'en',
                    controlBar: false,
                    preload: 'auto',
                    sources: [{
                        type: "video/mp4",
                        src: "https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm"
                    }],
                    // poster: this.image,
                }
            }
        },
        components: {
            videoPlayer
        }
    }
</script>

<style>
    .security-grid-item {
        display: flex;
        flex-direction: column;
    }

    .security-video-wrapper {

    }

    .video-js {
        width: 690px;
        min-height: 690px;
        margin: 0 0 45px 0;
        backdrop-filter: blur(4px);
        border-radius: 50%;
    }

    .vjs-big-play-button {
        width: 2em !important;
        height: 2em !important;
        font-size: 10em !important;
        top: calc(50% - 85px) !important;
        left: calc(50% - 85px) !important;
        background: none !important;
        border: none !important;
        border-radius: 0 !important;
    }

    .vjs-icon-placeholder:before {
        top: 4px !important;
    }

    .security-play-button {
        display: flex;
        justify-content: space-between;
        font-size: 17px;
        font-weight: 400;
        text-align: start;
        line-height: 32px;
        color: #25333E;
        border: 1px solid #F0A600;
        border-radius: 35px;
        padding: 10px 20px;
        margin: 0 auto;
        width: 311px;
    }
    .security-play-button:after {
        content: '';
        padding: 6px;
        background-image: url("../img/arrow.svg");
        background-repeat: no-repeat;
        background-position: right;
    }
</style>