<template>
    <div class="inline-flex items-start w-72 mt-2 justify-start">
        <p class="ml-0 text-left text-gray-400">Beneficiaries</p>
        <span class="ml-28 flex text-right text-gray-400">View all <img src="../../assets/img/icon/right_arrow.svg"/> </span>
    </div>

    <div class="max-w-xs">
        <carousel :items-to-show=".3">
            <!-- <BeneficiariesAvatar 
                :beneficiaries="beneficiaries"
            /> -->

            <slide v-for="slide in 10" :key="slide">
                <!-- {{ slide }} -->
                <BeneficiariesAvatar :beneficiaries="slides"/>
            </slide>
            <template #addons>
                <navigation />
                <pagination />
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
    data(){
        return {
            slides: [
                {
                    id: 1,
                    firstName: "James",
                    lastName: "Adeniran",
                },
                {   
                    id: 2,
                    firstName: "Mohammed",
                    lastName: "Musa"
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
            // beneficiaries: [
            //     {
            //         id: 1,
            //         firstName: "James",
            //         lastName: "Adeniran",
            //     },
            //     {   
            //         id: 2,
            //         firstName: "Mohammed",
            //         lastName: "Musa"
            //     },
            //     {
            //         id: 3,
            //         firstName: "Chinedu",
            //         lastName: "Eze"
            //     },
            //     {
            //         id: 4,
            //         firstName: "Akpenvwoghene",
            //         lastName: "Akpenvwe"
            //     },
            //     {
            //         id: 5,
            //         firstName: "Atai",
            //         lastName: "Ekpeanwan"
            //     },
            // ],
        }
    },
}
</script>