<template>
	<svg
		xmlns="http://www.w3.org/2000/svg"
		:width="width"
		:height="height"
		viewBox="0 0 11 6"
		fill="none"
	>
		<path
			class="path"
			d="M10 1L5.5 5L1 1"
			:stroke="color"
			stroke-width="1.5"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
	</svg>
</template>
<script>
export default {
	props: {
		color: {
			type: String,
			default: '#fff',
		},
		height: {
			default: '6',
		},
		width: {
			default: '11',
		},
	},
};
</script>
<style lang="scss" scoped>
.path {
	fill: none !important;
}
</style>
