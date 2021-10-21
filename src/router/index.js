import Vue from 'vue';
import VueRouter from 'vue-router';
import Structure from '@/views/Structure.vue';
import Home from '@/views/Home.vue';

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		component: Structure,
		children: [
			{
				path: '/home',
				name: 'Home',
				component: Home,
			},
		],
	},
];

const router = new VueRouter({
	mode: 'history',
	routes,
});

export default router;
