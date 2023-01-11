import { createRouter, createWebHistory, useRouter } from 'vue-router';

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
		{
			path: '/bills',
			name: 'airtime',
			// component: lazyLoadAirtimeAndDataTransaction('airtime.vue'),
			component: () => import('../views/airtimeAndDataPayment/airtime.vue'),
			// children: [
			// 	{
			// 		path:"/bills/data",
			// 		name:'BuyData',
			// 		component: () => import('../views/airtimeAndDataPayment/BuyData.vue')
			// 	},
			// ]
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
