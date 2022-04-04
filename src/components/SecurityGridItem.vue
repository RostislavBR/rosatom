<template>
    <div class="security-grid-item">
        <div class="security-video-wrapper">
            <video-player class="video-player-box" :options="playerOptions" ref="videoPlayer"/>
        </div>
        <span class="security-play-button" @click="fullscreen">Смотреть видео</span>
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
                    preload: 'auto',
                    controlBar: {
                        timeDivider: true,
                        durationDisplay: true,
                        remainingTimeDisplay: false,
                        fullscreenToggle: true,
                    },
                    // fluid: true,
                    // aspectRatio: '16: 9',
                    sources: [{
                        type: "video/mp4",
                        src: "https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm"
                    }],
                    // width: document.documentElement.clientWidth,
                    // preferFullWindow: true,
                },
            }
        },
        components: {
            videoPlayer
        },
        methods: {
            fullscreen() {
                const player = this.$refs.videoPlayer.player;
                player.play();
            },
        },
        mounted() {
            const player = this.$refs.videoPlayer.player;
            player.on('play',() => player.requestFullscreen());
            player.on('fullscreenchange',() => !player.isFullscreen() && player.pause());
        }
    }
</script>

<style>
    .security-grid-item {
        display: flex;
        flex-direction: column;
    }

    .security-video-wrapper {
        border-radius: 50%;
        margin: 0 0 40px;
    }

    .video-js {
        width: 690px;
        height: 690px;
        z-index: 100;
    }

    .vjs-tech {
        width: auto !important;
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