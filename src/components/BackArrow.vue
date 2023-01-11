<template>
    
    <img @click="backArrow" src="../assets/img/icon/left_arrow.svg" class="absolute left-10 top-10" alt="going back" />
</template>

<script lang="ts">
export default {
    name: 'BackArrow',
    methods: {
        backArrow() {
            this.$router.go(-1)
        }
    }
}
</script>