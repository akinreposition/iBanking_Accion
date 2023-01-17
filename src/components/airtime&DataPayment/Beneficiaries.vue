<template>
    <div class="inline-flex items-start w-72 mt-2 justify-start">
        <p class="ml-0 text-left text-gray-400">Beneficiaries</p>
        <!-- <span class="ml-28 flex text-right text-gray-400">View all <img src="../../assets/img/icon/right_arrow.svg"/> </span> -->
    </div>

    <div class="w-72">
        <carousel :items-to-show=".1">
            <slide v-for="slide in slides" :key="slide.id">
                <!-- {{ slide }} -->
                <BeneficiariesAvatar :beneficiaries="slides"/>
            </slide>
            <template #addons>
                <navigation />
                <!-- <pagination /> -->
            </template>
            
        </carousel>
    </div>
</template>

<script lang="ts">
// If you are using PurgeCSS, make sure to whitelist the carousel CSS classes
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import BeneficiariesAvatar from './BeneficiariesAvatar.vue';
export default {
    name: 'Beneficiaries',
    components: { 
        BeneficiariesAvatar,
        Carousel,
        Slide,
        Pagination,
        Navigation,
    },
    setup(){
        return {
            settings: {
                // count of items to showed per view
                itemsToShow: {
                default: .1,
                type: Number,
                },
                // count of items to be scrolled
                itemsToScroll: {
                default: 1,
                type: Number,
                },
                // control infinite scrolling mode
                wrapAround: {
                default: false,
                type: Boolean,
                },
            }
        }
    },
    data(){
        return {
            slides: [
                {   
                    id: 0,
                    firstName: "Mohammed",
                    lastName: "Musa"
                },
                {   
                    id: 1,
                    firstName: "Mohammed",
                    lastName: "Musa"
                },
                {
                    id: 2,
                    firstName: "James",
                    lastName: "Adeniran",
                },
                {
                    id: 3,
                    firstName: "Chinedu",
                    lastName: "Eze"
                },
                {
                    id: 4,
                    firstName: "Akpenvwoghene",
                    lastName: "Akpenvwe"
                },
                {
                    id: 5,
                    firstName: "Atai",
                    lastName: "Ekpeanwan"
                },
            ],
        }
    },
}
</script>