<template>
    <div class="high-technology-container">
        <HighTechnologyHead/>
        <div class="high-technology-grid">
            <HighTechnologyItem v-for="item in highTechnologyData" :key="item.id" :text="item[0].text" :src="item[0].src" :type="item[0].type"/>
        </div>
        <HomeButton/>
        <IframeComponent v-if="iframeModules" :handler="toggleIframeModules" title="К высоким технологиям" src="https://ra-energy.618test.ru/asu/"/>
    </div>
</template>

<script>
    import HighTechnologyHead from "@/components/HighTechnologyHead";
    import HighTechnologyItem from "@/components/HighTechnologyItem";
    import highTechnologyData from "@/constants/highTechnologyData";
    import HomeButton from "@/components/HomeButton";
    import IframeComponent from "@/components/IframeComponent";
    import {mapGetters, mapMutations} from "vuex";

    export default {
        name: "HighTechnology",
        data() {
            return {
                highTechnologyData,
            }
        },
        computed: {
            ...mapGetters({ iframeModules: 'getIframeModules'})
        },
        methods: {
            ...mapMutations({
                toggleIframeModules: 'setIframeModules'
            })
        },
        components: {HomeButton, HighTechnologyItem, HighTechnologyHead, IframeComponent}
    }
</script>

<style scoped>
    .high-technology-container {
        height: 100%;
        display: flex;
        flex-direction: column;
    }

    .high-technology-grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 40px;
        margin: 0 auto;
    }
</style>