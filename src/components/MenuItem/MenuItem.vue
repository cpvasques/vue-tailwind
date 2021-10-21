<template>
	<div class="sidebar-icon group">
		<font-awesome-icon :icon="['fas', item.icon]" size="2x" />
		<span class="sidebar-tooltip group-hover:scale-100">{{ item.name }}</span>
	</div>
</template>

<script>
export default {
	name: 'MenuItem',
	props: {
		item: {
			required: true,
		},
	},
	components: {},
	data: () => ({}),
	methods: {},
};
</script>

<style lang="scss" scoped></style>
