<template>
    <div class="container">
        <Back-Arrow />
        <!-- <img src="../../assets/img/icon/left_arrow.svg" class="absolute left-10 top-10" alt="going back" /> -->
        <div class="inline-flex flex-col space-y-1 items-center justify-start p-[38%] pt-8 pb-28 bg-white">
            <p class="w-72 text-3xl font-black leading-10 text-center text-gray-900">Transaction details</p>
            <img class="w-6 h-6 rounded-lg" src="../../assets/img/icon/Rectangle.svg" alt="rectangle"/>

            
            <div class="flex flex-col items-center p-4 mb-20 gap-4 w-72 h-52 mt-48 rounded-xl bg-red-100">
                <Table-Component 
                    :transaction="airtimeTransaction"
                />

                
            </div>
            <button type="button" @click.prevent="pay()" class="flex flex-col items-center w-72 h-12 p-3 mt-4 rounded-xl bg-primary text-white">
                Pay
            </button>
        </div>

    </div>
</template>

<script lang="ts">
import TableComponent from '../../components/Table.vue';
import BackArrow from '../../components/BackArrow.vue';
import router from '../../router';

export default {
    name: "TransactionDetails",
    data() {
        return {
            airtimeTransaction: [
                {
                    label: "Transaction Type",
                    value: "Airtime",
                },
                {
                    label: "Date",
                    value: new Date().toLocaleString(),
                },
                {
                    label: "Amount",
                    value: "1,200",
                },
                {
                    label: "Phone Number",
                    value: "0812345678",
                },
                {
                    label: "Network",
                    value: "MTN",
                },
            ],
        }
    },
    methods: {
        pay() {
            console.log("Click Pay!");
            this.$router.push("/bills/confirm-transaction");
        }
    },
    components: { TableComponent,BackArrow, }
}
</script>