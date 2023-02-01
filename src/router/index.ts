import { createRouter, createWebHistory, useRouter } from 'vue-router';
// import VueRouterBackButton from 'vue-router-back-button';

// lazy loading for airtime & data transaction
// function lazyLoadAirtimeAndDataTransaction(view: String) {
// 	return () => import(`../views/airtimeAndDataPayment/${view}`);
// }


const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	scrollBehavior(to, from, savedPosition) {
		return { top: 0 }
	},
	routes: [
		{
			path: '/',
			component: () => import('../views/home.vue')
		},
		// Application Dashboard Begins
		{
			path: '/dashboard',
			name: 'Application Dashboard',
			component: () => import('../views/dashboard/ApplicationDashboard.vue'),
			children: [
				// {
				// 	path: '/overview',
				// 	name: 'Overview',
				// 	component: () => import('../views/dashboard/Overview.vue'),
				// },
				{
					path: '/dashboard/wallet',
					name: 'Wallet',
					component: () => import('../views/dashboard/Wallet.vue'),
				},
				{
					path: '/dashboard/loans',
					name: 'Loans',
					component: () => import('../views/dashboard/Loans.vue'),
				},
				{
					path: "/dashboard/plans",
					name: 'Plans',
					component: () => import('../views/dashboard/Plans.vue'),
				},
				{
					path: "/dashboard/cards",
					name: 'Cards',
					component: () => import('../views/dashboard/Cards.vue'),
				},
			]
		},	  
		// Application Dashboard Ends

		// Bill Payment Begins
		{
			path: '/bills',
			name: 'airtime',
			// component: lazyLoadAirtimeAndDataTransaction('airtime.vue'),
			component: () => import('../views/airtimeAndDataPayment/airtime.vue'),
		},
		{
			path:"/bills/data",
			name:'BuyData',
			component: () => import('../views/airtimeAndDataPayment/BuyData.vue')
		},
		{
			path:"/bills/transaction-details",
			name:'TransactionDetails',
			component: () => import('../views/airtimeAndDataPayment/TransactionDetails.vue')
		},
		{
			path:"/bills/confirm-transaction",
			name:'ConfirmTransaction',
			component: () => import('../views/airtimeAndDataPayment/ConfirmTransaction.vue')
		},
		// Bill Payment Ends

		// Fund Transfer Begins
		{
			path:"/funds-transfer/send-money",
			name:'SendMoney',
			component: () => import('../views/fundsTransfer/SendMoney.vue')
		},
		{
			path:"/funds-transfer/other-banks",
			name:'OtherBanks',
			component: () => import('../views/fundsTransfer/OtherBanks.vue')
		},
		{
			path:"/funds-transfer/transaction-details",
			name:'FundTransactionDetails',
			component: () => import('../views/fundsTransfer/FundTransactionDetail.vue')
		},
	]
	// const router = createRouter({
	// 	history: createWebHistory(),
	// 	routes,
	// 	scrollBehavior(to, from, savedPosition) {
	// 		return { top: 0 }
	// 	},
	// })
	
	// router.beforeEach((to) => {
	// 	if (!isAuthenticated() && to.meta.requiresAuth) {
	// 		return { name: 'Signin' }
	// 	}
	// })
	
})



export default router
