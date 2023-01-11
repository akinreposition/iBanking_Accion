<template>
    <transition name="modal-fade">
        <div class="modal-backdrop">
            <div 
                class="modal"
                role="dialog"
                aria-labelledby="modalTitle"
                aria-describedby="modalDescription"
            >
                <header class="modal-header" id="modalTitle">
                     <h3 class="text-center text-lg leading-normal mt-8 font-bold justify-center align-middle md:ml-10"><slot name="header"></slot></h3>
                    <p class="text-center text-lg leading-normal mt-4 font-normal justify-center align-middle md:ml-10"><slot name="sub-header"></slot></p>

                    <!-- <button 
                        type="button"
                        class="close-btn"
                        @click="close"
                        aria-label="Close Modal"
                        >X
                    </button> -->
                </header>

                <main class="modal-body" id="modalDescription">
                    <slot name="body"> Default body content </slot>
                </main>

                <footer class="modal-footer">
                    <slot name="footer"></slot>
                
                </footer>
            </div>
        </div>
    </transition>

    
</template>

<script lang="ts">
export default {
    name: 'Modal',
    methods: {
        // close() {
        //     // this.$emit("input", !this.value);
        //     this.$emit("close");
        // },
        
    }
}
</script>

<style lang="css" scoped>
    .modal-backdrop {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: rgba(0, 0, 0, 0.3);
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .modal {
        background: #ffffff;
        box-shadow: 2px 2px 2px 1px;
        overflow-x: auto;
        display: flex;
        flex-direction: column;
        border-radius: 10px;
        width: 40%;
    }
    .modal-header,
    .modal-footer {
        padding: flex;
    }
    .modal-footer {
        /* border-top: 1px solid rgb(227, 231, 233); */
        flex-direction: column;
        justify-content: flex-end;
    }
    .modal-body {
        position: relative;
        padding: 20px 10px;
    }
    .close-btn {
        position: absolute;
        top: 0;
        right: 0;
        border: none;
        font-size: 20px;
        padding: 10px;
        cursor: pointer;
        font-weight: bold;
        color: red;
        background: transparent;
    }
    .btn-open-modal {
        color: white;
        background: green;
        border-radius: 4px;
        margin: 20px auto;
        padding: 5px;
        width: 40%;
    }
    .modal-fade-enter-active,
    .modal-fade-leave-active {
        transition: opacity 0.5s ease;
    }
</style>