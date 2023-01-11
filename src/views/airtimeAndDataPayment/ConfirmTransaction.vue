<template>
    <div class="container">
        <img src="../../assets/img/icon/left_arrow.svg" class="absolute left-10 top-10" alt="going back" />
        <div class="inline-flex flex-col space-y-1 items-center justify-start p-[38%] pt-8 pb-28 bg-white">
            <p class="w-72 text-3xl font-black leading-10 text-center text-gray-900">Confirm transaction</p>
            <img class="w-6 h-6 rounded-lg " src="../../assets/img/icon/Rectangle.svg" alt="rectangle"/>

            
            <div class="flex flex-col items-center p-4  w-72 h-64 mt-48 rounded-xl">
                <h6 class="text-stroke font-normal">Verify this transaction with your pin</h6>
                
            </div>
            <button type="button" @click.prevent="verify" class="flex flex-col items-center w-72 h-12 p-4 mt-4 rounded-xl bg-primary text-white">
                Verify
            </button>
        </div>

    </div>
</template>

<script lang="ts">

export default {
    name: "ConfirmTransaction",
    data() {
        return {
            
        }
    },
    methods: {
        verify() {
            console.log("Click Verify!");
        }
    },
    
}
</script>