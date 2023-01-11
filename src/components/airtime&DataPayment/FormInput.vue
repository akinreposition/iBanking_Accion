<template>
    <div class="w-72">
        <form>
            <div class="mt-5">
                <label class="text-gray-400">{{ firstLabel }}</label>
                <div class="flex flex-row">
                    <input 
                    type="tel"
                    class="w-40 h-8 mt-1 block rounded p-5 bg-gray-200"
                    required
                    placeholder="Phone number"
                    maxlength="11"
                    @handleFirstInputChange="firstInput"
                    />
                    <section class="w-10 h-8 mt-2 ml-14 px-auto  block rounded justify-center bg-gray-200">
                        <img class="mx-auto h-7 pt-1.5" src="../../assets/img/icon/Contacts.svg" />
                    </section> 
                </div> 
            </div>
            <div class="mt-5">
                <section class="flex flex-row">
                    <label class="text-gray-400 mr-20">{{ secondLabel }}</label>
                    <span class="text-gray-400 text-xs pt-2 ">Bal: 12345678 NGN</span>
                </section> 
                
                <div class="flex flex-row">
                    <input 
                    type="tel"
                    class="w-72 h-8 mt-1 p-5 block rounded bg-gray-200"
                    required
                    placeholder=""
                    @handleSecondInputChange="secondInput"
                />
                </div>
            </div>
            <div class="mt-5">
                <label class="text-gray-400">Account</label> 

                <select name="account" id="accounts" form="accountform" class="w-72 h-12 mt-1 p-2 block rounded bg-gray-200">
                    <option value="select account">Select Account</option>
                    <option value="savings">Savings</option>
                    <option value="current">Current</option>
                    <option value="fixed">Fixed</option>
                </select>
            </div>
            <div class="flex flex-row mt-10 w-72 justify-between">
                <!-- <button type="submit" @click="onClick()"  class="w-40 h-14 bg-white mr-3 text-gray-400 border-gray-400 flex text-center p-3 rounded-xl ">
                   <img src="../../assets/img/icon/clock.svg" class="mx-auto" alt="buy later" title="buy later svg"/>
                    Buy later
                </button> -->
                <BtnBuyLater />
                <FormButton text="Buy Now" color="primary"  />
            </div>
        </form>
    </div>
</template>

<script lang="ts">
import BtnBuyLater from './BtnBuyLater.vue';
import FormButton from './BtnBuyNow.vue';

export default {
    name: 'FormInput',
    components: {
    FormButton,
    BtnBuyLater
}, 
    props: {
        firstLabel: String,
        firstInput: String,
        secondLabel: String,
        secondInput: String,
    },
    data() {
        return {
            phoneNumber: "",
            amount:"",
        }
    },
    methods: {
        handleFirstInputChange (event: any) {
            this.$emit("customChange", event.target.value.toLowerCase())
        },
        handleSecondInputChange (event: any) {
            this.$emit("customChange", event.target.value.toLowerCase())
        },
        onClick() {
            console.log("Buy later");
        }
    }
}
</script>