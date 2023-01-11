<template>
    <button type="submit"  class="flex flex-row w-32 h-14 border-2 border-gray-500 rounded-xl bg-white text-gray-400 text-sm font-bold justify-center align-middle p-4 gap-2.5">
        <img src="../../assets/img/icon/clock.svg" class="mx-auto" alt="buy later" title="buy later svg"/>
        {{ text }}
    </button>
</template>

<script lang="ts">
    export default {
        name: 'BtnBuyLater',
        props: {
            text: {
                type: String,
                required: true
            }
        }
    }
</script>

<style scoped>
    .buy-later {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 16px;
        gap: 10px;
        width: 128px;
        height: 56px;
        background: #FFFFFF;
        color: #8F92A1;
        border: 1px solid #8F92A1;
        border-radius: 10px;
    }
</style>