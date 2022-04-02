<template>
    <div class="system-container">
        <SystemPageHead/>
        <div class="system-grid">
            <SystemGridItem v-for="item in systemData" :key="item.id" :text="item[0].text"/>
        </div>
        <SystemWatchVideo/>
        <HomeButton/>
    </div>
</template>

<script>
    import SystemPageHead from "@/components/SystemPageHead";
    import SystemGridItem from "@/components/SystemGridItem";
    import HomeButton from "@/components/HomeButton";
    import systemData from "@/constants/systemData";
    import SystemWatchVideo from "@/components/SystemWatchVideo";

    export default {
        name: "ProcurementSystem",
        data() {
          return {
              systemData,
          }
        },
        components: {SystemWatchVideo, SystemGridItem, SystemPageHead, HomeButton},
    }
</script>

<style scoped>
    .system-container {
        height: 100%;
        display: flex;
        flex-direction: column;
    }
    .system-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 70px;
        margin: 0 auto 124px auto;
    }
</style>