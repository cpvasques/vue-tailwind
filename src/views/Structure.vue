<template>
	<div class="structure">
		<Sidebar v-if="isWeb" />
		<div class="content-page">
			<CommonHeader v-if="isWeb" />
			<div class="content-holder">
				<router-view></router-view>
			</div>
		</div>
	</div>
</template>
<script>
import Sidebar from '@/components/Sidebar/Sidebar.vue';
import CommonHeader from '@/components/CommonHeader/CommonHeader.vue';

export default {
	name: 'Structure',
	components: {
		Sidebar,
		CommonHeader,
	},
	data: () => ({
		windowWidth: window.innerWidth,
	}),
	mounted() {
		this.$nextTick(() => {
			window.addEventListener('resize', this.onResize);
		});
	},
	beforeDestroy() {
		window.removeEventListener('resize', this.onResize);
	},
	methods: {
		onResize() {
			this.windowWidth = window.innerWidth;
		},
	},
	computed: {
		isWeb() {
			return this.windowWidth > 992;
		},
	},
};
</script>
<style lang="scss">
.structure {
	display: flex;
	flex-direction: column;
	background-color: #ffffff;
	width: 100%;
}
.content-page {
	margin-left: 63px;
	width: 100%;
	height: 100vh;
	overflow: scroll;
	overflow-x: hidden;
	background-color: #fff;
}
.content-holder {
	background-color: #fff;
	width: 100%;
	padding-bottom: 5rem;
}
@media screen and (min-width: 992px) {
	.structure {
		flex-direction: row;
	}
	.content-holder {
		padding: 25px;
		border-radius: 30px 0px 0px 0px;
		margin-top: 15px;
	}
}
</style>
