<template>
    <div class="security-container">
        <SecurityHead/>
        <SecurityMain :content="securityData"/>
        <router-link to="/high-technology" class="security-home-button"></router-link>
    </div>
</template>

<script>
    import SecurityHead from "@/components/SecurityHead";
    import SecurityMain from "@/components/SecurityMain";
    import securityData from "@/constants/securityData";

    export default {
        name: "SecurityTechnologiesPage",
        data() {
            return {
                securityData
            }
        },
        components: {SecurityMain, SecurityHead},
    }
</script>

<style>
    .security-container {
        position: relative;
        height: 100%;
        background-color: #FFFDFA;
    }

    .security-home-button {
        display: block;
        position: absolute;
        top: 984px;
        left: 48px;
        text-decoration: none;
        color: #ffffff;
        background-image: url("../img/home-dark.png");
        background-repeat: no-repeat;
        background-position: center;
        height: 48px;
        width: 48px;
    }
</style>