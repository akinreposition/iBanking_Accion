<template>
    <div class="inline-flex flex-col space-y-1 items-center justify-start p-[38%] pt-8 pb-28 bg-white">
        <p class="w-72 text-3xl font-black leading-10 text-center text-gray-900">Buy Data/Airtime</p>
            <img class="w-6 h-6 rounded-lg" src="../../assets/img/icon/Rectangle.svg"/>
    
        <div class="flex flex-col space-y-3 items-center justify-start w-8p">
            <img class="mt-6 w-9 h-9 shadow rounded-lg" src="../../assets/img/icon/call_center.svg"/>
        </div>

        <div class="inline-flex items-start mt-[100px] justify-start">
            <router-link to="/bills" class="mt-6 flex items-center justify-center md:w-28  p-2.5 border rounded-tl-lg rounded-bl-lg border-primary bg-primary">
                <p class="text-sm font-medium leading-tight text-white">Airtime</p>
            </router-link>
            <router-link to="/bills/data" class="mt-6 flex items-center justify-center md:w-28 p-2.5 border rounded-tr-lg rounded-br-lg border-primary">
                <p class="text-sm font-medium leading-tight text-gray-400">Data</p>
            </router-link>
        </div>

        <Beneficiaries />
        <FormInput 
            firstLabel="Phone number"
            @customChange="firstInput"
            secondLabel="Amount"
            @customeChange2="secondInput"
        />
    
    </div>

</template>

<script lang="ts">
    import Beneficiaries from '../../components/airtime&DataPayment/Beneficiaries.vue';
    import FormInput from '../../components/airtime&DataPayment/FormInput.vue';

export default {
    name: 'airtime',
    components: {
        Beneficiaries,
        FormInput,
    },
    methods: {
        firstInput(event: string) {
            console.log(event);
        },
        secondInput(event: String) {
            console.log(event);
        }
    }
}
</script>