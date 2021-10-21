<template>
	<div class="sidebar-holder">
		<div
			class="fixed top-0 left-0 h-screen w-16 m-0 flex flex-col bg-gray-900 text-white shadow-lg"
		>
			<MenuItem
				v-for="(menu, index) in menuItems"
				:item="menu"
				:key="index"
				:class="index == 0 ? 'mt-16' : ''"
			/>
		</div>
	</div>
</template>

<script>
import MenuItem from '../MenuItem/MenuItem.vue';
export default {
	name: 'Sibebar',
	components: { MenuItem },
	data: () => ({
		menuItems: [
			{ name: 'Fogo', icon: 'fire' },
			{ name: 'Plus', icon: 'plus' },
			{ name: 'Raio', icon: 'bolt' },
			{ name: 'Cocozão', icon: 'poo' },
		],
	}),
	methods: {},
};
</script>

<style lang="scss" scoped></style>
