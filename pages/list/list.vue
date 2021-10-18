<template>
	<view class="list">
		<!-- 背景图 -->
		<view class="fixbg" :style="{'background-image': 'url('+playlist.coverImgUrl+')'}"></view>
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
						<image :src="playlist.coverImgUrl" mode=""></image>
						<text class="iconfont iconyousanjiao">{{playlist.playCount}}</text>
					</view>
					<!-- 右侧信息 -->
					<view class="list-head-text">
						<view>{{playlist.name}}</view>
						<view>
							<image :src="playlist.creator.avatarUrl" mode="">{{playlist.creator.nickname}}</image>
						</view>
						<view>
							{{playlist.description}}
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
						<text>(共100首)</text>
					</view>
					<!-- 底部: 左+中+右 列表项 -->
					<view class="list-music-item">
						<view class="list-music-top">1</view>
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
						<view class="list-music-top">2</view>
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
						<!-- 左侧 -->
						<view class="list-music-top">3</view>
						<!-- 中间 -->
						<view class="list-music-song">
							<view>歌曲名</view>
							<view>
								<image src="../../static/dujia.png" mode=""></image>
								<image src="../../static/sq.png" mode=""></image>
								歌手名-歌曲名
							</view>
						</view>
						<!-- 右侧播放图标 -->
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

	// 列表头部接口引入
	import {
		list
	} from '../../common/api.js'

	export default {
		data() {
			return {
				// 列表头部
				playlist: {
					coverImgUrl: '',
					creator: {
						avatarUrl: ''
					}
				}
			}
		},
		// 注册
		components: {
			musichead
		},
		// list接口是在onLoad()当中调用的,接收上一个页面传递过来的ID
		onLoad(options) {
			// console.log(options.listId)


			list(options.listId).then(res => {
				// console.log(res)
				// 判断
				if (res[1].data.code == '200') {
					this.playlist = res[1].data.playlist
				}
			})
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

	/* 歌单 */
	.list-music {
		background: #FFFFFF;
		border-radius: 50rpx;
		margin-top: 40rpx;
		overflow: hidden;
	}

	/* 歌单头部 */
	.list-music-head {
		height: 50rpx;
		margin: 30rpx 0 70rpx 22rpx;
	}

	.list-music-head text:nth-child(1) {
		height: 50rpx;
		font-size: 50rpx;
	}

	.list-music-head text:nth-child(2) {
		font-size: 30rpx;
		margin: 0 10rpx 0 26rpx;
	}

	.list-music-head text:nth-child(3) {
		font-size: 26rpx;
		color: #b2b2b2;
	}

	/* 歌单底部  */
	.list-music-item {
		display: flex;
		margin: 0 32rpx 66rpx 46rpx;
		align-items: center;
		color: #959595;

	}

	.list-music-top {
		width: 58rpx;
		font-size: 30rpx;
		line-height: 30rpx;
	}

	.list-music-song {
		flex: 1;
	}

	/* 第一个 */
	.list-music-song view:nth-child(1) {
		font-size: 28rpx;
		color: #000000;
	}

	/* 第二个 */
	.list-music-song view:nth-child(2) {
		display: flex;
		font-size: 20rpx;
		align-items: center;
	}

	/* 第二个 图片 */
	.list-music-song view:nth-child(2) image {
		width: 32rpx;
		height: 20rpx;
		margin-right: 10rpx;
	}

	/* 右侧播放图标 */
	.list-music-item text {
		font-size: 50rpx;
		color: #c7c7c7;
	}
</style>
