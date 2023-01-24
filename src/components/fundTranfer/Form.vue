<template>
    <div class="w-72">
        <form>
            <div class="mt-5">
                <section class="inline-flex flex-row">
                    <label class="text-gray-400 font-bold">{{ firstLabel }}</label>
                    <img src="../../assets/img/icon/marked_green.svg" class="ml-5" alt="account name"/>
                    <span class="text-gray-400 font-bold text-xs ml-2 pt-1">Abiola James Adeniran</span>
                </section>
                <div class="flex flex-row">
                    <input 
                        type="number"
                        class="w-72 h-8 mt-1 block rounded p-5 bg-gray-200"
                        required
                        @handleFirstInputChange="firstInput"
                    />
                     
                </div> 
            </div>
            <div class="mt-5">
                <section class="flex flex-row">
                    <label class="text-gray-400 mr-20 font-bold">{{ secondLabel }}</label>
                    <span class="text-gray-400 font-bold text-xs pt-2 ml-9">Bal: 12345678 NGN</span>
                </section> 
                
                <div class="flex flex-row">
                    <input 
                        type="tel"
                        class="w-72 h-8 mt-1 p-5 block font-bold rounded bg-gray-200"
                        required
                        maxlength="11"
                        placeholder=""
                        @handleSecondInputChange="secondInput"
                    />
                </div>
            </div>
            <div class="mt-5">
                <label class="text-gray-400 font-bold">Account</label> 

                <select name="account" v-model="selected" class="w-72 h-12 mt-1 p-2 font-bold block rounded bg-gray-200">
                    <option v-for="option in options" :value="option.value" :key="option.account">{{ option.account }}</option>
                </select>
            </div>
            <div class="flex flex-row mt-10 w-72 justify-between">
                <button type="submit" @click="sendLater()" class="flex flex-row w-32 h-14 border-2 border-gray-500 rounded-xl bg-white text-gray-400 text-sm font-bold justify-center align-middle p-4 gap-2.5">
                    <img src="../../assets/img/icon/clock.svg" class="mx-auto w-4 h-4 mt-1" alt="send later" title="send later svg"/>
                    Send later
                </button>
                
                <button @click="sendNow()" class="w-32  h-14 ml-2 bg-primary rounded-xl font-bold text-white">
                    Send Now
                </button>
            </div>
        </form>
    </div>
</template>

<script lang="ts">
import router from '../../router';
export default {
    name: 'FormInput', 
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
            selected: '',
            options: [
                { account: 'saving', value: 'saving'},
                { account: 'current', value: 'current'},
                { account: 'fixed', value: 'fixed'},
            ]
        }
    },
    methods: {
        handleFirstInputChange (event: any) {
            this.$emit("customChange", event.target.value.toLowerCase())
        },
        handleSecondInputChange (event: any) {
            this.$emit("customChange", event.target.value.toLowerCase())
        },
        sendLater() {
            console.log("Send later");
        },
        sendNow() {
            console.log("Send Now");
            router.push("/funds-transfer/transaction-details");
        }
    }
}
</script>