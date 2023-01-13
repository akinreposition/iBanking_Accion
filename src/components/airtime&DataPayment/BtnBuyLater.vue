<template>
    <button type="submit"  class="flex flex-row w-32 h-14 border-2 border-gray-500 rounded-xl bg-white text-gray-400 text-sm font-bold justify-center align-middle p-4 gap-2.5">
        <img src="../../assets/img/icon/clock.svg" class="mx-auto" alt="buy later" title="buy later svg"/>
        <span>{{ text }}</span>
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
