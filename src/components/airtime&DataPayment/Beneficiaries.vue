<template>
    <div>
        <div class="inline-flex items-start w-72 mt-2 justify-start">
            <p class="ml-0 text-left text-gray-400">Beneficiaries</p>
            <span class="ml-28 flex text-right text-gray-400">View all <img class="" src="../../assets/img/icon/right_arrow.svg"/> </span>
        </div>
        <BeneficiariesAvatar 
            :beneficiaries="beneficiaries"
        />
    </div>
</template>

<script lang="ts">
import BeneficiariesAvatar from './BeneficiariesAvatar.vue';
export default {
    name: 'Beneficiaries',
    components: { BeneficiariesAvatar, },
    data(){
        return {
            beneficiaries: [
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
                // {
                //     id: 4,
                //     firstName: "Akpenvwoghene",
                //     lastName: "Akpenvwe"
                // },
                // {
                //     id: 5,
                //     firstName: "Atai",
                //     lastName: "Ekpeanwan"
                // },
            ],
        }
    },
    created() {
        // this.beneficiaries = [
                // {
                //     id: 1,
                //     firstName: "James",
                //     lastName: "Adeniran"
                // },
                // {   
                //     id: 2,
                //     firstName: "Mohammed",
                //     lastName: "Musa"
                // },
                // {
                //     id: 3,
                //     firstName: "Chinedu",
                //     lastName: "Eze"
                // },
                // {
                //     id: 4,
                //     firstName: "Akpenvwoghene",
                //     lastName: "Akpenvwe"
                // },
                // {
                //     id: 5,
                //     firstName: "Atai",
                //     lastName: "Ekpeanwan"
                // },
            // ]
    },
    methods: {
    //  getBeneficiaries(helper) {

    //  }
    }
}
</script>