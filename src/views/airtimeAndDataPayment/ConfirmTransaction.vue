<template>
    <div class="container">
        <Back-Arrow />
        <!-- <img src="../../assets/img/icon/left_arrow.svg" class="absolute left-10 top-10" alt="going back" /> -->
        <div class="inline-flex flex-col space-y-1 items-center justify-start p-[38%] pt-8 pb-28 bg-white">
            <p class="w-72 text-3xl font-black leading-10 text-center text-gray-900">Confirm transaction</p>
            <img class="w-6 h-6 rounded-lg " src="../../assets/img/icon/Rectangle.svg" alt="rectangle"/>

            
            <div class="flex flex-col items-center p-4  w-72 h-64 mt-48 rounded-xl">
                <h6 class="text-stroke font-normal">Verify this transaction with your pin</h6>
                
                <form>
                    <div class="inline-flex flex-row gap-6">
                        <input 
                            
                            required
                            class="w-14 h-10 p-2 mt-20 bg-slate-300 rounded-lg"
                            v-model="firstPin"
                            maxlength="1"
                        />
                        <input 
                            
                            required
                            class="w-14 h-10 p-1 mt-20 bg-slate-300 rounded-lg"
                            v-model="secondPin"
                            maxlength="1"
                        />
                        <input 
                            
                            class="w-14 h-10 p-1 mt-20 bg-slate-300 rounded-lg"
                            v-model="thirdPin"
                            required
                            maxlength="1"
                        />
                        <input 
                            
                            class="w-14 h-10 px-2 mt-20 bg-slate-300 rounded-lg"
                            v-model="fourthPin"
                            required
                            maxlength="1"
                        />
                    </div>
                    <button type="submit" @click.prevent="openModal()" class="flex flex-col items-center w-72 h-12 p-3 mt-10 rounded-xl bg-primary text-white">
                        Verify
                    </button>
                    <!-- model beginns -->
                    <Modal v-show="isVisible">
                        <template v-slot:header>Add as Beneficiary</template>
                        <template v-slot:sub-header>Do you want to add  0812 345 6789 ?</template>

                        <template v-slot:body>
                            <form>
                                <div>
                                    <label class="text-gray-500 text-center ml-4">Choose an Alias for them.</label>
                                    <input 
                                        type="text"    
                                        class="bg-gray-300 w-72 rounded-md h-10 ml-4 p-5 mt-4 block"

                                    />
                                </div>
                            </form>
                        </template>
                        
                        <template v-slot:footer>
                            <div class="inline-flex flex-row ml-4 gap-4 justify-center">
                                <button 
                                    type="button"
                                    class="w-40 h-12 mt-2 mb-2 text-gray-400 rounded-md border-gray-400 border"
                                    @click.prevent="close()"
                                    aria-label="Close Modal" 
                                >
                                    No
                                </button>

                                <button 
                                    type="submit"
                                    class="w-40 h-12 m-2 mb-3 text-white rounded-md border-primary bg-primary"
                                    @click.prevent="addBeneficiary()"
                                    aria-label="Close Modal" 
                                >
                                    Yes
                                </button>
                            </div>
                        </template>
                    </Modal>
                    <!-- modal ends -->
                </form>
            </div>
        </div>

    </div>
</template>

<script lang="ts">
import BackArrow from '../../components/BackArrow.vue';
import Modal from '../../components/Modal.vue';

export default {
    name: "ConfirmTransaction",
    data() {
        return {
            firstPin: "",
            secondPin: "",
            thirdPin: "",
            fourthPin: "",
            isVisible: false,
        };
    },
    methods: {
        verify() {
            console.log(`Verification pin ${this.firstPin} ${this.secondPin} ${this.thirdPin} ${this.fourthPin}`);
            this.firstPin =""
            this.secondPin =""
            this.thirdPin =""
            this.fourthPin =""
        },
        close() {
            this.isVisible = false;
        },
        openModal() {
            this.isVisible = true;
            this.verify();
        },
        addBeneficiary() {
            console.log("Beneficiary submitted!");
        }
    },
    components: { Modal, BackArrow }
}
</script>