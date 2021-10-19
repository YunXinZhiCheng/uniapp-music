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

				<!-- 历史记录 -->
				<view class="search-history">
					<!-- 头部：左右 -->
					<view class="search-history-head">
						<text>历史记录</text>
						<text class="iconfont iconlajitong"></text>
					</view>
					<!-- 列表 -->
					<view class="search-history-list">
						<view>忘情水</view>
						<view>测试歌曲</view>
						<view>忘情水</view>
						<view>测试歌曲</view>
						<view>忘情水</view>
						<view>测试歌曲</view>
						<view>忘情水</view>
						<view>测试歌曲</view>
					</view>
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
	.search-search {
		display: flex;
		align-items: center;
		height: 70rpx;
		margin: 70rpx 30rpx 30rpx 30rpx;
		background: #F7F7F7;
		border-radius: 50rpx;
	}

	/* 搜索 图标 */
	.search-search text {
		margin: 0 26rpx;
		color: #000000;
	}

	/* 搜索 表单输入框 */
	.search-search input {
		flex: 1;
		font-size: 26rpx;
		color: #000000;
	}

	/* 历史记录 */
	.search-history {
		margin: 0 30rpx;
		font-size: 26rpx;
	}

	/* 历史记录 头部 */
	.search-history-head {
		display: flex;
		justify-content: space-between;
		margin-bottom: 36rpx;
	}

	/* 历史记录 列表 */
	.search-history-list {
		display: flex;
		flex-wrap: wrap;
	}

	.search-history-list view {
		padding: 16rpx 28rpx;
		border-radius: 40rpx;
		margin-right: 30rpx;
		margin-bottom: 30rpx;
		background: #f7f7f7;
	}
</style>
