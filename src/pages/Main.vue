<template>
    <div class="main-container">
        <MainHead/>
        <MainSection :content="mainData"/>
        <IframeComponent v-if="iframeDigitain" :handler="toggleIframeDigitain" title="К гражданской продукции" src="https://www.rosatomcatalog.ru"/>
    </div>
</template>

<script>
    import MainHead from "@/components/MainHead";
    import MainSection from "@/components/MainSection";
    import  IframeComponent from "@/components/IframeComponent";
    import {mapGetters, mapMutations} from "vuex";
    import mainData from "@/constants/mainData";

    export default {
        name: "Main",
        data() {
            return {
                mainData,
            }
        },
        computed: {
            ...mapGetters({iframeDigitain: 'getIframeDigitain', iframeModules: 'getIframeModules'})
        },
        methods: {
            ...mapMutations({
                toggleIframeDigitain: 'setIframeDigitain',
                toggleIframeModules: 'setIframeModules'
            })
        },
        components: {MainHead, MainSection, IframeComponent},
    }
</script>

<style lang="scss">
    .main-container {
        height: 100%;
        display: flex;
        flex-direction: column;
        background-image: url("../img/poloski.png");
        background-repeat: no-repeat;
    }
</style>