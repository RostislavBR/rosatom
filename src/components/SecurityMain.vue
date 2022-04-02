<template>
    <div class="security-main">
        <div class="security-grid">
            <SecurityGridItem v-for="item in content" :key="item.id" :image="item[0].preview"/>
        </div>
    </div>
</template>

<script>
    import SecurityGridItem from "./SecurityGridItem";

    export default {
        name: "SecurityMain",
        props: ['content'],
        components: {SecurityGridItem}
    }
</script>

<style scoped>
    .security-main {
        display: flex;
        flex-direction: row;
        justify-content: center;
    }

    .security-grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 40px;
    }
</style>