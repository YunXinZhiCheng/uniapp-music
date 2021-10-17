<template>
	<view class="list">
		<!-- 背景图 -->
		<view class="fixbg"></view>
		<!-- 头部组件 -->
		<musichead title="歌单" :icon="true" color="white"></musichead>
		<!-- 通用容器 -->
		<view class="container">
			<!-- 滚动区域 -->
			<scroll-view scroll-y="true">
				<!-- 1.列表头部: 左侧图片+右侧信息 -->
				<view class="list-head">
					<!-- 左侧图片 -->
					<view class="list-head-img">
						<image src="../../static/wangyiyunyinyue.png" mode=""></image>
						<text class="iconfont iconyousanjiao">30亿</text>
					</view>
					<!-- 右侧信息 -->
					<view class="list-head-text">
						<view>测试文字</view>
						<view>
							<image src="../../static/wangyiyunyinyue.png" mode="">测试文字</image>
						</view>
						<view>
							测试文字测试文字测试文字测试文字测试文字
						</view>
					</view>

				</view>

				<!-- 2.列表分享：用条件编译，让H5隐藏，让微信显示 -->
				<!-- #ifdef MP-WEIXIN -->
				<!-- 列表分享：按钮包含图标-->
				<button class="list-share" open-type="share">
					<text class="iconfont iconicon-">分享给微信好友</text>
				</button>
				<!-- #endif -->

				<!-- 3.列表歌单 -->
				<view class="list-music">
					<!-- 头部：左+中+右 -->
					<view class="list-music-head">
						<text class="iconfont iconbofang"></text>
						<text>播放全部</text>
						<text>共100首</text>
					</view>
					<!-- 底部: 左+中+右 列表项 -->
					<view class="list-music-item">
						<view class="list-music-top"></view>
						<view class="list-music-song">
							<view>歌曲名</view>
							<view>
								<image src="../../static/dujia.png" mode=""></image>
								<image src="../../static/sq.png" mode=""></image>
								歌手名-歌曲名
							</view>
						</view>
						<text class="iconfont iconbofang"></text>
					</view>
					<!-- 底部: 左+中+右 列表项 -->
					<view class="list-music-item">
						<view class="list-music-top"></view>
						<view class="list-music-song">
							<view>歌曲名</view>
							<view>
								<image src="../../static/dujia.png" mode=""></image>
								<image src="../../static/sq.png" mode=""></image>
								歌手名-歌曲名
							</view>
						</view>
						<text class="iconfont iconbofang"></text>
					</view>
					<!-- 底部: 左+中+右 列表项 -->
					<view class="list-music-item">
						<view class="list-music-top"></view>
						<view class="list-music-song">
							<view>歌曲名</view>
							<view>
								<image src="../../static/dujia.png" mode=""></image>
								<image src="../../static/sq.png" mode=""></image>
								歌手名-歌曲名
							</view>
						</view>
						<text class="iconfont iconbofang"></text>
					</view>
				</view>

			</scroll-view>
		</view>
	</view>
</template>

<script>
	// 头部组件引入
	import musichead from '../../components/musichead/musichead.vue'
	// 字体图标样式引入
	import '@/common/iconfont.css'

	export default {
		data() {
			return {

			}
		},
		// 注册
		components: {
			musichead
		},
		onLoad(options) {
			// 测试传过来的列表listId
			// console.log(options.listId) // 顺序 3 0 2 1
		},
		methods: {

		}
	}
</script>

<style scoped>
	/* 列表头部 */
	.list-head {
		display: flex;
		margin: 30rpx;
	}

	/* 列表头部 左侧图片 */
	.list-head-img {
		width: 264rpx;
		height: 264rpx;
		border-radius: 30rpx;
		overflow: hidden;
		position: relative;
		margin-right: 42rpx;
	}

	.list-head-img image {
		width: 100%;
		height: 100%;
	}

	.list-head-img text {
		/* 绝对定位：右上角 */
		position: absolute;
		right: 8rpx;
		top: 8rpx;
		color: #FFFFFF;
		font-size: 26rpx;
	}

	/* 列表头部 右侧信息 */
	.list-head-text {
		flex: 1;
		color: #f0f2f7;
	}

	/* 右侧 第一个 */
	.list-head-text view:nth-child(1) {
		color: #FFFFFF;
		font-size: 34rpx;
	}

	/* 右侧 第二个 */
	.list-head-text view:nth-child(2) {
		display: flex;
		margin: 20rpx 0;
		font-size: 24rpx;
		align-items: center;

	}

	/* 右侧 第三个 */
	.list-head-text view:nth-child(2) image {
		width: 54rpx;
		height: 54rpx;
		border-radius: 50%;
		margin-right: 14rpx;
	}

	.list-head-text view:nth-child(3) {
		line-height: 34rpx;
		font-size: 22rpx;
	}

	/* 列表分享 按钮 */
	.list-share {
		width: 330rpx;
		height: 74rpx;
		/* 居中 */
		margin: 0 auto;
		background: rgba(0, 0, 0, 0.4);
		border-radius: 37rpx;
		color: #FFFFFF;
		text-align: center;
		line-height: 74rpx;
		font-size: 28rpx;

	}

	/* 列表分享 文本 */
	.list-share text {
		margin-right: 16rpx;
	}
</style>
