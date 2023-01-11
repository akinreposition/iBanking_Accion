<template>
    <div class="container">
        <Back-Arrow />
        <!-- <img src="../../assets/img/icon/left_arrow.svg" class="absolute left-10 top-10" alt="going back" /> -->
        <div class="inline-flex flex-col space-y-1 items-center justify-start p-[38%] pt-8 pb-28 bg-white">
            <p class="w-72 text-3xl font-black leading-10 text-center text-gray-900">Transaction details</p>
            <img class="w-6 h-6 rounded-lg" src="../../assets/img/icon/Rectangle.svg" alt="rectangle"/>

            
            <div class="flex flex-col items-center p-4 gap-4 w-72 h-64 mt-48 rounded-xl bg-red-100">
                <Table 
                    :transaction-type="transactionType"
                    :date="date"
                    :amount="amount"
                    :phone-number="phoneNumber"
                    :network="network"
                />

                
            </div>
            <button type="button" @click.prevent="pay" class="flex flex-col items-center w-72 h-12 p-4 mt-4 rounded-xl bg-primary text-white">
                    Pay
            </button>
        </div>

    </div>
</template>

<script lang="ts">
import Table from '../../components/Table.vue';
import BackArrow from '../../components/BackArrow.vue';

export default {
    name: "TransactionDetails",
    data() {
        return {
            transactionType: "Airtime",
            // date: "12 Oct, 2021",
            date: new Date().toLocaleString(),
            amount: "1200",
            phoneNumber: "0812345678",
            network: "MTN"
        }
    },
    methods: {
        pay() {
            console.log("Click Pay!");
        }
    },
    components: { Table }
}
</script>