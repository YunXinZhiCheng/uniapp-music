<template>
	<view class="search">
		<!-- 头部组件 -->
		<musichead title="搜索" :icon="true" :iconblack="true"></musichead>
		<!-- 通用容器 -->
		<view class="container">
			<!-- 滚动区域 -->
			<scroll-view scroll-y="true">
				<!-- 搜索 -->
				<view class="search-search">
					<!-- 搜索图标 -->
					<text class="iconfont iconsearch"></text>
					<!-- 搜索表单 -->
					<input type="text" placeholder="搜索歌曲">
					<!-- 搜索关闭图标 -->
					<text class="iconfont iconguanbi"></text>
				</view>
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

			}
		},
		components: {
			musichead
		},
		methods: {

		}
	}
</script>

<style>
	/* 搜索 */
	.search-search{
		display: flex;
		align-items: center;
		height: 70rpx;
		margin: 70rpx 30rpx 30rpx 30rpx;
		color: #F7F7F7;
		border-radius: 50rpx;
	}
	/* 搜索 图标 */
	.search-search text{
		margin: 0 26rpx;
		color: #000000;
	}
	/* 搜索 表单输入框 */
	.search-search input {
		flex: 1;
		font-size: 26rpx;
		color: #000000;
	}
</style>
