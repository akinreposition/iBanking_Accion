<template>
    <div>
        <button @click="onClick()" :style="{background: color}" class="w-32  h-14 ml-2 bg-primary rounded-xl text-white">
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
    },
    methods: {
        onClick() { 
            console.log("click");
        }
    }
}</script>