<template>
    <div>
        <div class="main">
            <aside class="side-nav">
                <div class="nav-list">
                    <div class="mt-[-80px]">
                        <img src="../../assets/img/AMBlogo_fullcolor.png" alt="bank_logo" title="AMBank-Logo" class="nav-item "  />
                    </div>
                    <router-link to="/dashboard" class="link">
                        <div :class="activeLink === 'overview' ? 'nav-item active' : 'nav-item' ">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" class="bi bi-house" viewBox="0 0 16 16">
                                <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5ZM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5 5 5Z"/>
                            </svg>
                            <span class="nav-item-text">Dashboard</span>
                        </div>
                    </router-link>
                    
                    <router-link to="/dashboard/wallet" class="link">
                        <div :class="activeLink === 'wallet' ? 'nav-item active' : 'nav-item' ">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8 9L12 9" stroke="#828282" stroke-width="1.5" stroke-linecap="round"/>
                                <path d="M21.3006 9.80016C20.4811 9.44169 19.5733 9.3359 18.6933 9.49635L18.6347 9.50703C17.6503 9.68653 16.8531 10.4094 16.5782 11.3718C16.4609 11.7824 16.4609 12.2176 16.5782 12.6282C16.8531 13.5906 17.6503 14.3135 18.6347 14.493L18.6933 14.5037C19.5733 14.6641 20.4811 14.5583 21.3006 14.1998M2.88539 15.1513C2.37154 13.0819 2.37154 10.9181 2.88539 8.84875C3.55805 6.13983 5.70602 4.04534 8.43056 3.44162L8.88443 3.34105C10.9366 2.88632 13.0634 2.88632 15.1156 3.34105L15.5694 3.44162C18.294 4.04534 20.442 6.13984 21.1146 8.84875C21.6285 10.9182 21.6285 13.0819 21.1146 15.1512C20.442 17.8602 18.294 19.9547 15.5694 20.5584L15.1156 20.659C13.0634 21.1137 10.9366 21.1137 8.88443 20.659L8.43056 20.5584C5.70601 19.9547 3.55805 17.8602 2.88539 15.1513Z" stroke="#828282" stroke-width="1.5" stroke-linecap="round"/>
                            </svg>
                            <span class="nav-item-text">Wallet</span>
                        </div>
                    </router-link>

                    <router-link to="/dashboard/loans" class="link" custom v-slot="{ navigate }">
                        <div :class="activeLink === 'loans' ? 'nav-item active' : 'nav-item' ">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.88539 8.84875C3.55805 6.13983 5.70602 4.04534 8.43056 3.44162L8.88443 3.34105C10.9366 2.88632 13.0634 2.88632 15.1156 3.34105L15.5694 3.44162C18.294 4.04534 20.442 6.13984 21.1146 8.84875C21.6285 10.9182 21.6285 13.0819 21.1146 15.1512C20.442 17.8602 18.294 19.9547 15.5694 20.5584L15.1156 20.659C13.0634 21.1137 10.9366 21.1137 8.88443 20.659L8.43056 20.5584C5.70601 19.9547 3.55805 17.8602 2.88539 15.1513C2.37154 13.0819 2.37154 10.9181 2.88539 8.84875Z" stroke="#828282" stroke-width="1.5" stroke-linecap="round"/>
                                <circle cx="12" cy="12" r="3" stroke="#828282" stroke-width="1.5" stroke-linecap="round"/>
                                <circle cx="18" cy="12" r="1" stroke="#828282" stroke-width="1.5" stroke-linecap="round"/>
                                <circle cx="6" cy="12" r="1" stroke="#828282" stroke-width="1.5" stroke-linecap="round"/>
                            </svg>
                            <span class="nav-item-text" @click="navigate"  role="link">Loans</span>
                        </div>
                    </router-link>

                    <router-link to="/dashboard/plans" class="link">
                        <div :class="activeLink === 'plans' ? 'nav-item active' : 'nav-item' " >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3.35288 8.95043C4.00437 6.17301 6.17301 4.00437 8.95043 3.35288C10.9563 2.88237 13.0437 2.88237 15.0496 3.35288C17.827 4.00437 19.9956 6.17301 20.6471 8.95044C21.1176 10.9563 21.1176 13.0437 20.6471 15.0496C19.9956 17.827 17.827 19.9956 15.0496 20.6471C13.0437 21.1176 10.9563 21.1176 8.95044 20.6471C6.17301 19.9956 4.00437 17.827 3.35288 15.0496C2.88237 13.0437 2.88237 10.9563 3.35288 8.95043Z" stroke="#828282" stroke-width="1.5" stroke-linecap="round"/>
                                <path d="M7 14.989L9.993 11.1L13.407 13.78L16.336 10" stroke="#828282" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            <span class="nav-item-text share-text">Plans</span>
                        </div>            
                    </router-link>

                    <router-link to="/dashboard/cards" class="link">
                        <div :class="activeLink === 'cards' ? 'nav-item active' : 'nav-item' ">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3.20258 8.70024H20.7974M2.88539 15.1513C2.37154 13.0819 2.37154 10.9181 2.88539 8.84875C3.55805 6.13983 5.70602 4.04534 8.43056 3.44162L8.88443 3.34105C10.9366 2.88632 13.0634 2.88632 15.1156 3.34105L15.5694 3.44162C18.294 4.04534 20.442 6.13984 21.1146 8.84875C21.6285 10.9182 21.6285 13.0819 21.1146 15.1512C20.442 17.8602 18.294 19.9547 15.5694 20.5584L15.1156 20.659C13.0634 21.1137 10.9366 21.1137 8.88443 20.659L8.43056 20.5584C5.70601 19.9547 3.55805 17.8602 2.88539 15.1513Z" stroke="#828282" stroke-width="1.5" stroke-linecap="round"/>
                                <path d="M7 12L11 12" stroke="#828282" stroke-width="1.5" stroke-linecap="round"/>
                            </svg>
                            <span class="nav-item-text">Cards</span>
                        </div>            
                    </router-link>
                    
                    <router-link to="/" class="link">
                        <div :class="activeLink === '' ? 'nav-item active' : 'nav-item' ">
                            <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11 13V14C11 14.7956 10.6839 15.5587 10.1213 16.1213C9.55871 16.6839 8.79565 17 8 17H4C3.20435 17 2.44129 16.6839 1.87868 16.1213C1.31607 15.5587 1 14.7956 1 14V4C1 3.20435 1.31607 2.44129 1.87868 1.87868C2.44129 1.31607 3.20435 1 4 1H8C8.79565 1 9.55871 1.31607 10.1213 1.87868C10.6839 2.44129 11 3.20435 11 4V5M15 13L19 9L15 13ZM19 9L15 5L19 9ZM19 9H5H19Z" stroke="#828282" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            <span class="nav-item-text">Logout</span>
                        </div>            
                    </router-link>
                </div>
            </aside>

            <section class="content-section ">
                <Navigation 
                    :search-input="search"
                />
                <router-view v-slot="{ Component }">
                    <transition>
                        <keep-alive>
                            <component :is="Component" />
                        </keep-alive>
                    </transition>
                </router-view>
            </section>

            <section class="footer-nav">
                <div class="nav-list">
                    <div :class="activeLink === 'overview' ? 'nav-item active' : 'nav-item' ">
                        <router-link to="/dashboard" class="link">
                            <span class="share-text">Dashboard</span>
                        </router-link>
                    </div>

                    <div :class="activeLink === 'wallet' ? 'nav-item active' : 'nav-item' ">
                        <router-link to="/dashboard/wallet" class="link">
                            <span class="share-text">Wallet</span>
                        </router-link>
                    </div>

                    <div :class="activeLink === 'loans' ? 'nav-item active' : 'nav-item' ">
                        <router-link to="/dashboard/loans" class="link">
                            <span class="share-text">Loans</span>
                        </router-link>           
                    </div>

                    <div :class="activeLink === 'plans' ? 'nav-item active' : 'nav-item' ">
                        <router-link to="/dashboard/plans" class="link">
                            <span class="share-text">Plans</span>
                        </router-link>
                    </div> 
                    
                    <div :class="activeLink === 'cards' ? 'nav-item active' : 'nav-item' ">
                        <router-link to="/dashboard/cards" class="link">
                            <span class="share-text">Cards</span>
                        </router-link>
                    </div> 
                    
                    <div :class="activeLink === 'nrff' ? 'nav-item active' : 'nav-item' ">
                        <router-link to="/" class="link">
                            <span class="share-text">Logout</span>
                        </router-link>
                    </div> 
                </div>
            </section>
        </div>
    </div>
</template>

<script lang="ts">
import { useRoute } from 'vue-router';
import Navigation from '../../components/dashboard/Navigation.vue';
export default {
    name: 'Application Dashboard',
    components: { Navigation },
    data(){
        return{
            notificationCount: 3,
            visible: false,
            activeLink: 'overview',
            search: '',
        }
    },
    created(){
        this.checkActiveLink()
    },

    updated(){
        this.checkActiveLink()

    },

    mounted(){
        // if(this.loggedStaffAccesses === null || this.loggedStaffAccesses === undefined){
        //     this.Logout();
        // }
        // this.$refs['my-modal'].show()

    },

    methods:{
        // getNotification(){
        //     if(this.notificationCount > 99){
        //         this.notificationCount= 99+
        //     }else {
        //         this.$store.dispatch('Notifactions')
        //         this.notificationCount= 4
        //     }
        // },

        // sessionTimeoutSetup(){
        //     addEventListener("mousemove", this.resetTimer, false);
        //     addEventListener("mousedown", this.resetTimer, false);
        //     addEventListener("keypress", this.resetTimer, false);
        //     addEventListener("DOMMouseScroll", this.resetTimer, false);
        //     addEventListener("mousewheel", this.resetTimer, false);
        //     addEventListener("touchmove", this.resetTimer, false);
        //     addEventListener("MSPointerMove", this.resetTimer, false);
        // },

        // Logout(){
        //     this.$store.dispatch('Logout')
        // },

        // startTimer() {
        //     let duration = sessionStorage.getItem('stm') * 10000
        //     this.timeoutID = setTimeout(this.goInactive, duration);
        // },

        // resetTimer(e) {
        //     clearTimeout(this.timeoutID);
        //     this.goActive()
        // },

        // goInactive() {
        //     this.Logout()
        // },

        // goActive() {
        //     this.startTimer()
        // },

        checkActiveLink(){
            switch(useRoute.name){
                case 'Overview':
                    this.activeLink = 'overview'
                    break;
                case 'Wallet':
                    this.activeLink = 'wallet'
                    break;
                
                case 'Loans':
                    this.activeLink = 'loans'
                    break;

                case 'Plans':
                    this.activeLink = 'plans'
                    break;

                case 'Cards':
                    this.activeLink = 'cards'
                    break;
                

                default: this.activeLink = 'overview'
            }
        },
    },
}
</script>

<style scoped>
.main{
    margin-top: 0px;
    /* margin-top: 50px; */
    background: #FFF9F5;
}
/**side nav */
.side-nav{
    display: none;
    width: 80px;
    background: #7d797908;
    color: #E87724;
    min-height: 105%;
    position: fixed;
    top: -1%;
    /* top: -5%; */
    left: 0;
    padding-top: 150px;
    transition: width 0.5s ease-out, justify-content 0.6s ease-out;
    border-right: 1px solid #E87724;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
}

.side-nav .nav-list{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    height: 100%;
    justify-content: flex-start;
}

.side-nav .nav-list .nav-item{
    margin: 20px 0;
    display: flex;
    padding: 3px;
    padding-right: 7px;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    font-weight: bold;
    cursor: pointer;
    box-shadow: none;
    transition: box-shadow 0.3s ease-out, opacity 0.3s ease-out, transform 0.3s ease-out;
    /* text-shadow: -1px -1px 0px #3c4042d4; */
}
.side-nav .nav-list .nav-item img{
    margin: 20px 0;
    display: flex;
    padding: 3px;
    padding-right: 7px;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    font-weight: bold;
    box-shadow: none;
    /* transition: box-shadow 0.3s ease-out, opacity 0.3s ease-out, transform 0.3s ease-out; */
}

.side-nav .nav-list .nav-item svg{
    overflow: hidden;
    vertical-align: middle;
    padding: 8px;
    /* padding-left: 5px; */
    margin: 0 2px;
    fill: transparent;
    width: 35px;
    height: 35px;
    box-shadow: 0px 1px 2px 0px #E87724;
    border-radius: 50%;
}

.side-nav .nav-list .nav-item .nav-item-text{
    display: none;
    padding-left: 5px;
    transition: display 0.6s ease-out;
}

.footer-nav .nav-list .link,.side-nav .nav-list .link{
    text-decoration: none;
    color: inherit;
}

.side-nav:hover{
    width: 180px !important;
    justify-content: start !important;
    padding-left: 19px !important;
}

.side-nav:hover .nav-list .nav-item .nav-item-text{
    display: inline-block !important;
}

.side-nav .nav-list .nav-item:hover{
    box-shadow: 0px 1px 2px 1px #E87724;
    opacity: 1;
    transform: scale(1.1);
    padding-right: 20px !important;
}

.side-nav .active{
    background: #E87724;
    border-radius: 6%;
    color: white;
}

.side-nav .active svg{
    fill: white !important;
    /* box-shadow: none !important; */
}

.side-nav .active svg{
    fill: #a4a8aa !important;
    /* box-shadow: none !important; */
}

.side-nav:hover + .content-section{
    margin-left: 180px !important;
    width: 85% !important;
    background-color: #FFF9F5;
}

.side-nav:hover + .topbar{
    margin-left: -180px !important;
}
.content-section {
    background: #FFF9F5;
    height: 100%;
}

.footer-nav{
    /* position: absolute; */
    position: fixed;
    top: 90%;
    left: 0;
    bottom: 0;
    background-color: white;
    color: #E87724;
    min-width: 100%;
    border-top-right-radius: 20px;
    border-top-left-radius: 20px;
    box-shadow: 1px 2px 5px 4px #a4a8aa;
    margin-top: 5px;
}

.footer-nav .nav-list{
    display: flex;
    align-items: center;
    height: 100%;
    justify-content: space-around;
}

.footer-nav .nav-list .nav-item{
    margin: 0 auto;
    display: flex;
    align-items: center;
    height: 100%;
    justify-content: center;
    /* font-size: 10px; */
    font-weight: bold;
}

.footer-nav .nav-list .nav-item svg{
    overflow: hidden;
    vertical-align: middle;
    padding: 3px;
    margin: 0 2px;
    fill: white;
    width: 20px;
    height: 20px;
    box-shadow: 0px 0px 0px 1px #E87724;
}

.footer-nav .nav-list .link,.side-nav .nav-list .link{
    text-decoration: none;
    color: inherit;
}

.footer-nav .active{
    width: 20% !important;
    height: 35px !important;
    background: #E87724;
    border-radius: 5px;
    color: white;
    margin-left: 3px !important;
    margin-right: 3px !important;
    padding: 0 5px;
    text-align: center !important;
    font-size: smaller;
}

.footer-nav .active svg{
    fill: transparent !important;
    box-shadow: none !important;
}

@media (min-width: 576px){
    .side-nav{
        display: flex;
        justify-content: center;
    }

    .content-section{
        margin-left: 85px;
        background: #FFF9F5;
        height: 100vh;
    }
    
    .footer-nav{
        display: none;
    }
}

@media (min-width: 768px){
    .content-section{
        margin-left: 85px;
        background: #FFF9F5;
        height: 100vh;
    }

    header h3{
        font-size: 1.5rem;
    }

    header p{
        font-size: 14px;
    }
    .staff-Fullname {
        display: flex;
        text-decoration: none;
        font-size: 12px;
        font-weight: bold;
        color: #555;
        transition: 0.3s;
        margin-left: 10px;
    }
    .menuback {
        margin-right: 40px;
    }
    .user-info {
        margin-right: 0;
    }
}

@media (min-width: 992px){
    /* .content-section{
        width: 95%;
    } */
}

@media (min-width: 1200px){

}

@media (min-width: 1600px){
    .side-nav{
        width: 180px;
    }

    .side-nav .nav-list .nav-item .nav-item-text{
        display: inline-block;
    } 

    .content-section{
        margin-left: 180px !important;
        width: 85% !important;
        background: #FFF9F5;
        height: 100vh;
    }
}
</style>