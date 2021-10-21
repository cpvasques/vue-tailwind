<template>
	<div class="header-holder bg-gray-900 text-white">
		<div class="flex w-full content-center justify-between h-16">
			<div class="flex content-center justify-center items-center">
				<h1>{{ title }}</h1>
			</div>
			<div class="profile" @click="openProfileMenu">
				<div class="name">{{ name }}</div>
				<div class="dropdown-menu-wrapper">
					<ArrowIcon class="arrow" :class="isOpen ? 'open' : 'close'" />
					<div v-if="isOpen" class="dropdown-menu">
						<button class="logout">Logout</button>
					</div>
				</div>
				<div class="photo-holder">
					<img class="photo" :src="image" />
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import ArrowIcon from '@/components/icons/ArrowIcon.vue';

export default {
	name: 'CommonHeader',
	components: {
		ArrowIcon,
	},
	data: () => ({
		title: '',
		isOpen: false,
		image: 'https://sm.ign.com/ign_br/screenshot/default/darth-vader_5yvm.jpg',
	}),
	methods: {
		openProfileMenu() {
			this.isOpen = !this.isOpen;
		},
		close() {
			this.isOpen = false;
		},
	},
	computed: {
		name() {
			return 'Usuário';
		},
	},
	watch: {
		$route: {
			handler(route) {
				this.title = route.name;
			},
			deep: true,
			immediate: true,
		},
	},
};
</script>

<style scoped lang="scss">
.dropdown-menu-wrapper {
	margin-right: 8px;
	position: relative;
	.dropdown-menu {
		position: absolute;
		z-index: 10;
		width: 140px;
		right: 8px;
		top: 24px;
		display: flex;
		flex-direction: column;
		background-color: #fff;
		border-radius: 8px;
		border: 1px solid #e1e8f3;
		padding: 8px 12px;
		.logout {
			cursor: pointer;
			background-color: #aa3535;
			border-radius: 5px;
			border-style: none;
			color: white;
			height: 25px;
			margin: 0;
		}
	}
}

.header-holder {
	border-width: 0 0 1px 0;
	border-bottom: 1px solid rgba(170, 195, 219, 0.2);
}
.arrow {
	margin: 0 13px 0 11px;
	cursor: pointer;
}
.open.arrow {
	transform: rotateX(180deg);
}
.name {
	font-weight: 600;
	font-size: 14px;
	line-height: 20px;
}
h1 {
	font-weight: 600;
	font-size: 26px;
	margin: 0 0 0 31px;
}
.profile {
	cursor: pointer;
	display: flex;
	flex-direction: row;
	align-items: center;
	user-select: none;
	.photo-holder {
		width: 44px;
		height: 44px;
		margin: 0 22px 0 0;
		border-radius: 50%;
		overflow: hidden;
		.photo {
			width: 100%;
			height: 44px;
			border-radius: 10px;
			user-select: none;
		}
	}
}
</style>
