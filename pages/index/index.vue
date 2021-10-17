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
				<!-- 分类 -->
				<view class="index-list">
					<!-- 分类项：左侧图片+右侧信息 -->
					<view class="index-list-item">
						<!-- 图片 -->
						<view class="index-list-img">
							<image src="../../static/wangyiyunyinyue.png" mode=""></image>
							<text>每日更新</text>
						</view>
						<!-- 信息 -->
						<view class="index-list-text">
							<view>1.歌曲名-歌手名</view>
							<view>2.歌曲名-歌手名</view>
							<view>3.歌曲名-歌手名</view>
						</view>
					</view><!-- 分类项：左侧图片+右侧信息 -->
					<view class="index-list-item">
						<!-- 图片 -->
						<view class="index-list-img">
							<image src="../../static/wangyiyunyinyue.png" mode=""></image>
							<text>每日更新</text>
						</view>
						<!-- 信息 -->
						<view class="index-list-text">
							<view>1.歌曲名-歌手名</view>
							<view>2.歌曲名-歌手名</view>
							<view>3.歌曲名-歌手名</view>
						</view>
					</view><!-- 分类项：左侧图片+右侧信息 -->
					<view class="index-list-item">
						<!-- 图片 -->
						<view class="index-list-img">
							<image src="../../static/wangyiyunyinyue.png" mode=""></image>
							<text>每日更新</text>
						</view>
						<!-- 信息 -->
						<view class="index-list-text">
							<view>1.歌曲名-歌手名</view>
							<view>2.歌曲名-歌手名</view>
							<view>3.歌曲名-歌手名</view>
						</view>
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

	/* 分类 */
	.index-list {
		margin: 0 30rpx;
	}

	/* 分类项 */
	.index-list-item {
		display: flex;
		margin-bottom: 34rpx;
	}

	/* 分类项 左侧图片 */
	.index-list-img {
		width: 212rpx;
		height: 212rpx;
		position: relative;
		border-radius: 30rpx;
		overflow: hidden;
		margin-right: 22rpx;
	}

	.index-list-img image {
		width: 100%;
		height: 100%;
	}

	.index-list-img text {
		position: absolute;
		left: 12rpx;
		bottom: 16rpx;
		color: #FFFFFF;
		font-size: 20rpx;
	}

	/* 分类项 右侧信息 */
	.index-list-text {
		font-size: 24rpx;
		line-height: 66rpx;
	}
</style>
