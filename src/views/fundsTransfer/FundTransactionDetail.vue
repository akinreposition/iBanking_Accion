<template>
    <div class="container space-y-4 gap-4">
        <Back-Arrow />
        <div class="inline-flex flex-col space-y-1 items-center justify-start p-[38%] pt-8 pb-28 bg-white">
            <p class="w-72 text-3xl font-black leading-10 text-center text-gray-900">Transaction details</p>
            <img class="w-6 h-6 rounded-lg" src="../../assets/img/icon/Rectangle.svg" alt="rectangle"/>

            
            <div class="flex flex-col items-center p-4 gap-4 w-72 h-64 mt-48 rounded-xl bg-red-100">
                <Table-Component 
                    :transaction="transaction"
                />

                
            </div>
            <button type="submit" @click.prevent="openModal()" class="flex flex-col items-center w-72 h-12 p-3 mt-4 rounded-xl bg-primary text-white">
                Pay
            </button>

            <!-- model beginns -->
            <Modal v-show="isVisible">
                <template v-slot:header>
                    <img src="../../assets/img/icon/Succes Icon.svg" class="justify-center mx-auto" alt="success icon" title="transaction successful" />
                </template>
                <!-- <template v-slot:sub-header>Do you want to add  0812 345 6789 ?</template> -->

                <template v-slot:body>
                    
                    <h2 class="text-center text-lg leading-normal mt-8 font-bold justify-center align-middle mx-auto">Transaction successful</h2>
                    <span class=" font-bold text-center p-5 mt-4 flex">
                        You have succesfully sent ₦12,000 to beneficiary
                    </span>
                    
                </template>
                
                <template v-slot:footer>
                    <div class="flex flex-col space-x-1 items-center justify-start  bg-white">
                        <button 
                            type="submit"
                            class="w-32 md:w-72 h-12 font-bold ml-3 md:ml-4 mt-2 mb-6 text-white rounded-md border-primary bg-primary border"
                            @click.prevent="close()"
                            aria-label="Continue" 
                        >
                            Continue
                        </button>

                    </div>
                
                </template>
            </Modal>
            <!-- modal ends -->
        </div>

    </div>
</template>

<script lang="ts">
import TableComponent from '../../components/Table.vue';
import BackArrow from '../../components/BackArrow.vue';
import Modal from '../../components/Modal.vue';

export default {
    name: "FundTransactionDetails",
    components: { TableComponent, BackArrow, Modal },
    data() {
        return {
            transaction : [
            {   
                label: "Transaction Type", 
                value: "Funds Transfer"
            },
            { 
                label: "Date",
                value: new Date().toLocaleString()
            },
            {
                label: "Amount",
                value: "12,000"
            },
            {
                label: "Receiver’s number",
                value: "0812345678"
            },
            {
                label: "Receiver’s Bank",
                value: "GTBank"
            },
            {
                label: "Receiver’s Name",
                value: "Mustapha Chigozie"
            },
            
        ],

            // labelTransactionType: "Transaction Type", 
            // transactionType: "Funds Transfer",

            // labelDate: "Date",
            // date: new Date().toLocaleString(),

            // labelAmount: "Amount",
            // amount: "12,000",
            
            // labelPhoneNumber: "Receiver’s number",
            // phoneNumber: "0812345678",

            // network: "MTN",

            isVisible: false,
        }
    },
    methods: {
        pay() {
            console.log("Click Pay!");
        },
        close() {
            this.isVisible = false;
        },
        openModal() {
            this.isVisible = true;
            this.pay();
        },
    },
}
</script>