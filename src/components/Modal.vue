<template>
    <div class="modal" v-show="value">
        <div class="container">
            <div class="modal__title">Select Data Plan</div>
            <p class="text-primary">choose your plan</p>
            <button @click.prevent="close" class="mt-3 border-b border-primary font-semibold">Close</button>
        </div>
    </div>
</template>

<script lang="ts">
export default {
    name: 'Modal',
    props: ['value'],
    // props:{
    //     value: {
    //         required: true
    //     }
    // },
    methods: {
        close() {
            this.$emit("input", !this.value);
        }
    }
}
</script>

<style lang="css" scoped>
    .modal {
        background-color: rgba(0, 0, 0, 0.7);
    }
</style>