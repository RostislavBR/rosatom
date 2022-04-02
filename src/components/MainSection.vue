<template>
    <div class="main-section-container">
        <div class="main-section-list">
            <MainSectionItem v-for="item in content" :key="item.id" :text="item[0].text" :image="item[0].img" :src="item[0].src"/>
        </div>
    </div>
</template>

<script>
    import MainSectionItem from "@/components/MainSectionItem";


    export default {
        name: "MainSection",
        components: {MainSectionItem},
        props: ['content']
    }
</script>

<style lang="scss">
    .main-section-container {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: center;
    }

    .main-section-list {
        display: flex;
        flex-direction: row;
    }

</style>