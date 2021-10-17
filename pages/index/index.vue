<template>
	<view class="content">
		<!-- 头部组件 -->
		<musichead title="云音乐" :icon="true"></musichead>
		<!-- 通用容器 -->
		<view class="container">
			<!-- 滚动区域 -->
			<scroll-view scroll-y="true">
				<!-- 搜索 -->
				<view class="index-search">
					<!-- 搜索图标 -->
					<text class="iconfont iconsearch"></text>
					<!-- 搜索表单 -->
					<input type="text" placeholder="搜索歌曲">
				</view>

				<view class="">测试</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	// 字体图标引入
	import '@/common/iconfont.css'
	// 头部组件引入
	import musichead from '../../components/musichead/musichead.vue'
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		// 注册
		components: {
			musichead
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style scoped>
	/* 搜索 */
	.index-search {
		display: flex;
		align-items: center;
		height: 70rpx;
		margin: 70rpx 30rpx 30rpx 30rpx;
		color: #f7f7f7;
		border-radius: 50rpx;
	}

	/* 搜索图标 */
	.index-search text {
		font-size: 26rpx;
		margin-left: 28rpx;
		margin-right: 26rpx;
	}

	/* 搜索表单 */
	.index-search input {
		font-size: 28rpx;
		flex: 1;
	}
</style>
