<template>
    <div>
        <button @click="onSubmit()" :style="{background: color}" class="w-32  h-14 ml-2 bg-primary rounded-xl font-bold text-white">
            {{ (icon) }} {{ text }}
        </button>
    </div>

</template>

<script lang="ts">
export default {
    name: 'FormButton',
    props: {
        text: String,
        color: String,
        icon: String,
        // onSubmit: function
    },
    methods: {
        onSubmit() { 
            console.log("click");
        }
    }
}</script>