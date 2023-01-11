<template>
    <div class="inline-flex flex-col space-y-1 items-center justify-start p-[38%] pt-8 pb-28 bg-white">
        <p class="w-72 text-3xl font-black leading-10 text-center text-gray-900">Buy Data/Airtime</p>
            <img class="w-6 h-6 rounded-lg" src="../../assets/img/icon/Rectangle.svg"/>
    
        <div class="flex flex-col space-y-3 items-center justify-start w-8p">
            <img class="mt-6 w-9 h-9 shadow rounded-lg" src="../../assets/img/icon/call_center.svg"/>
        </div>

        <div class="inline-flex items-start mt-[100px] justify-start">
            <router-link to="/bills" class="mt-6 flex items-center justify-center md:w-28  p-2.5 border rounded-tl-lg rounded-bl-lg border-primary ">
                <p class="text-sm font-medium leading-tight text-gray-400">Airtime</p>
            </router-link>
            <router-link to="/bills/data" class="mt-6 flex items-center justify-center md:w-28 p-2.5 border rounded-tr-lg text-white rounded-br-lg bg-primary border-primary">
                <p class="text-sm font-medium leading-tight text-white">Data</p>
            </router-link>
        </div>

        <Beneficiaries />
        <!-- <FormInput 
            firstLabel="Phone number"
            @customChange="firstInput"
            secondLabel="Choose Plan"
            @customChange2="secondInput"
        /> -->

        <form>
            <div class="mt-5">
                <label class="text-gray-400">Phone Number</label>
                <div class="flex flex-row">
                    <input 
                    type="tel"
                    class="w-48 h-8 mt-1 block rounded p-5 bg-gray-200"
                    required
                    placeholder="Phone number"
                    maxlength="11"
                    v-model="phoneNumber"
                />
                <section class="w-10 h-8 mt-2 ml-14 px-auto  block rounded justify-center bg-gray-200">
                    <img class="mx-auto h-7 pt-1.5" src="../../assets/img/icon/Contacts.svg" />
                </section> 
                </div> 
            </div>

            <div class="mt-5">
                <section class="flex flex-row">
                    <label class="text-gray-400 mr-20 text-xs">Choose Data plan</label>
                    <span class="text-gray-400 text-xs pt-2 ">Bal: 12345678 NGN</span>
                </section> 
                
                <div class="flex flex-row ">
                    <button 
                        class="w-72 h-12  block rounded p-4 bg-gray-200 text-sm text-gray-400"
                        @click.prevent="showDataPlan"                 
                    >Choose Data Plan</button>
                    <Modal v-model="modalOpen"></Modal>
                    <!-- <div class="modal" v-show="value">
                        <div class="container">
                            <div class="modal__title">Select Data Plan</div>
                            <p class="text-primary">choose your plan</p>
                            <button @click.prevent="close" class="mt-3 border-b border-primary font-semibold">Close</button>
                        </div>
                    </div> -->
                </div>
            </div>
            <div class="mt-5">
                <label class="text-gray-400">Account</label> 

                <select name="account" id="accounts" form="accountform" class="w-72 h-12 p-2 mt-1 block rounded bg-gray-200">
                    <option value="select account">Select Account</option>
                    <option value="savings">Savings</option>
                    <option value="current">Current</option>
                    <option value="fixed">Fixed</option>
                </select>
            </div>
            <div class="flex flex-row mt-10 justify-evenly">
                <!-- <button type="submit" @click="onClick()"  class="w-40 h-14 bg-white mr-3 text-gray-400 border-gray-400 flex text-center p-3 rounded-xl ">
                   <img src="../../assets/img/icon/clock.svg" class="mx-auto" alt="buy later" title="buy later svg"/>
                    Buy later
                </button> -->
                <BtnBuyLater />
                <BtnBuyNow text="Buy Now" color="primary"  />
            </div>
        </form>
        
    </div>

</template>

<script lang="ts">
import Beneficiaries from '../../components/airtime&DataPayment/Beneficiaries.vue';
import BtnBuyLater from '../../components/airtime&DataPayment/BtnBuyLater.vue';
import BtnBuyNow from '../../components/airtime&DataPayment/BtnBuyNow.vue';
import Modal from '../../components/Modal.vue';
export default {
    name: 'BuyData',
    components: {
    Beneficiaries,
    Modal,
    BtnBuyLater,
    BtnBuyNow
},
    data() {
        return {
            phoneNumber: "",
            modalOpen: false,
        }
    },
    methods: {
        onClick() {
            console.log("Buy later Data form");
        },
        showDataPlan() {
            this.modalOpen = !this.modalOpen;
            console.log("Modal button click!");
        },
    }
}
</script>