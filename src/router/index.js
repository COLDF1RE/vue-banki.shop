import VueRouter from 'vue-router'
import Error404 from "../view/Error404";
import Catalog from "../view/Catalog";
import Shipping from "../view/Shipping";
import Payment from "../view/Payment";
import Contacts from "../view/Contacts";
import About from "../view/About";

Vue.use(VueRouter)

const router = () => {
	const r = 
	 new VueRouter({
		// Important to prevent hash changes!
		// Otherwise we'll get instances conflict
		mode: 'hash',
		routes: [
			{
				path: '/',
				name: 'Catalog',
				component: Catalog,
				props: true,
				children: []
			},
			{
				path: '/shipping',
				name: 'Shipping',
				component: Shipping,
				props: true,
				children: []
			},
			{
				path: '/payment',
				name: 'Payment',
				component: Payment,
				props: true,
				children: []
			},
			{
				path: '/contacts',
				name: 'Contacts',
				component: Contacts,
				props: true,
				children: []
			},
			{
				path: '/about',
				name: 'About',
				component: About,
				props: true,
				children: []
			},
			{
				path: '*',
				name: 'Error404',
				component: Error404,
				props: true,
				children: []
			},

			// {path: '/', redirect: { name: 'ListView1' }},
			// {path: '*', redirect: { name: 'ListView1' }},
		],
		
	});

	// r.beforeEach((to, from, next) => {
	// 	console.log(from)
	// 	console.log(to)
	// 	//next()
	// })

	return r
}

export default router