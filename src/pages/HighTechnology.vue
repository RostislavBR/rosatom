<template>
    <div class="high-technology-container">
        <HighTechnologyHead/>
        <div class="high-technology-grid">
            <HighTechnologyItem v-for="item in highTechnologyData" :key="item.id" :text="item[0].text" :src="item[0].src"/>
        </div>
        <HomeButton/>
    </div>
</template>

<script>
    import HighTechnologyHead from "@/components/HighTechnologyHead";
    import HighTechnologyItem from "@/components/HighTechnologyItem";
    import highTechnologyData from "@/constants/highTechnologyData";
    import HomeButton from "@/components/HomeButton";

    export default {
        name: "HighTechnology",
        data() {
            return {
                highTechnologyData,
            }
        },
        components: {HomeButton, HighTechnologyItem, HighTechnologyHead}
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