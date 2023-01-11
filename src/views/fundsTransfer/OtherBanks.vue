<template>
    <Back-Arrow />
    <div class="inline-flex flex-col space-y-1 items-center justify-start p-[38%] pt-8 pb-28 bg-white">
        <p class="w-80 text-3xl font-black leading-10 text-center text-gray-900">Send Money</p>
            <img class="w-6 h-6 rounded-lg" src="../../assets/img/icon/Rectangle.svg"/>
    

        <div class="inline-flex items-start mt-[100px] justify-start">
            <router-link to="/funds-transfer/send-money" class="mt-6 flex items-center justify-center md:w-40  p-2.5 border rounded-tl-lg rounded-bl-lg border-primary ">
                <span class="text-sm font-bold  leading-tight text-gray-400">Accion Accounts</span>
            </router-link>
            <router-link to="/funds-transfer/other-banks" class="mt-6 flex items-center justify-center md:w-40 p-2.5 border rounded-tr-lg rounded-br-lg border-primary bg-primary">
                <span class="text-sm font-bold leading-tight text-white">Other Banks</span>
            </router-link>
        </div>

        <Beneficiaries />
        <Form 
            firstLabel="Account number"
            @customChange="firstInput"
            secondLabel="Amount"
            @customeChange2="secondInput"
        />
    
    </div>

</template>

<script lang="ts">
    import Beneficiaries from '../../components/airtime&DataPayment/Beneficiaries.vue';
    import Form from '../../components/fundTranfer/Form.vue';
    import BackArrow from '../../components/BackArrow.vue';

export default {
    name: 'OtherBanks',
    components: {
        Beneficiaries,
        Form,
        BackArrow,
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