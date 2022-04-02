<template>
    <div class="main-container">
        <MainHead/>
        <MainSection :content="mainData"/>
    </div>
</template>

<script>
    import MainHead from "@/components/MainHead";
    import MainSection from "@/components/MainSection";
    import mainData from "@/constants/mainData";

    export default {
        name: "Main",
        data() {
            return {
                mainData,
            }
        },
        components: {MainHead, MainSection},
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