<template>
    <div class="security-container">
        <SecurityHead/>
        <SecurityMain :content="securityData"/>
        <HomeButton/>
    </div>
</template>

<script>
    import SecurityHead from "@/components/SecurityHead";
    import SecurityMain from "@/components/SecurityMain";
    import securityData from "@/constants/securityData";
    import HomeButton from "@/components/HomeButton";

    export default {
        name: "SecurityTechnologiesPage",
        data() {
          return {
              securityData
          }
        },
        components: {HomeButton, SecurityMain, SecurityHead},
    }
</script>

<style>
    .security-container {
        position: relative;
        height: 100%;
    }
</style>