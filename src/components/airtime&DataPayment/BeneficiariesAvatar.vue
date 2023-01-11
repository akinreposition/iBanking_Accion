<template>
    <div class="mt-5 flex flex-row justify-center">
        <div  :key="ben.id" v-for="ben in beneficiaries" class="mx-auto px-auto">
            <div :style="{background: color}" class="avatar-css w-16 h-48">
                <p class="text-white mt-5 pt-3 ml-4">JA</p>
            </div>
            <p class="text-center w-10 font-normal">{{ ben.firstName}} {{ ben.lastName}}</p>
        </div>
    </div>
</template>

<script lang="ts">
export default {
    name: 'BeneficiariesAvatar',
    props: [ 'beneficiaries', 'color']
    // props: {
    //     beneficiaries: Array,
    //     // color: String
    // }

}
</script>

<style scoped>
.avatar-css {
    width: 48px;
    height: 48px;
    left: 0px;
    top: 0px;
    background: #5ED061;
    border-radius: 39px;
}
</style>