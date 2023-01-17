<template>
    <div class="inline-flex flex-row gap-8 justify-center">
        <div  :key="ben.id" v-for="ben in beneficiaries" class="mt-3 w-10 mx-auto px-auto">
            <div :style="{background: color}" class="avatar-css pt-3">
                <p class="text-white text-xs text-center">{{ ben.firstName.charAt(0) }} {{ ben.lastName.charAt(0) }}</p>
            </div>
            <p class="text-center text-xs mt-1 w-12 font-normal">{{ ben.firstName}} {{ ben.lastName}}</p>
        </div>
    </div>
</template>

<script lang="ts">
export default {
    name: 'BeneficiariesAvatar',
    props: [ 'beneficiaries', 'color']
}
</script>

<style scoped>
.avatar-css {
    width: 40px;
    height: 40px;
    background: #5ED061;
    border-radius: 39px;
    text-align: center;
    /* padding-top: 3px; */
}   
</style>