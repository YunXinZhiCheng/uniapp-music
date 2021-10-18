<template>
	<view class="detail">
		<!-- 背景图 -->
		<view class="fixbg" :style="{'background-image': 'url(/static/wangyiyunyinyue.png)'}"></view>
		<!-- 头部组件 -->
		<musichead title="歌单" :icon="true" color="white"></musichead>
		<!-- 通用容器 -->
		<view class="container">
			<!-- 滚动区域 -->
			<scroll-view scroll-y="true">
				<!-- 1.播放封面 -->
				<view class="detail-play">
					<!-- 图片 歌曲封面-->
					<image src="../../static/wangyiyunyinyue.png"></image>
					<!-- 图标 暂停和播放-->
					<text class="iconfont iconpause"></text>
					<!-- 图片 播放摇杆 -->
					<view></view>
				</view>
				
				<!-- 2.歌词 -->
				<view class="detail-lyric">
					<view class="detail-lyric-wrap">
						<!-- 歌词项 -->
						<view class="detail-lyric-item">测试文字测试文字</view>
						<view class="detail-lyric-item active">测试文字测试文字</view>
						<view class="detail-lyric-item">测试文字测试文字测试文字</view>
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

		// 拿到其它页面跳转传过来的id
		onLoad(options) {
			console.log(options.songId)
		},
		methods: {

		}
	}
</script>

<style scoped>
	.detail-play {
		width: 580rpx;
		height: 580rpx;
		/* 背景图片 绝对路径 */
		background: url(~@/static/disc.png);
		background-size: cover;
		margin: 214rpx auto 0 auto;

		position: relative;
	}

	.detail-play image {
		width: 370rpx;
		height: 370rpx;
		border-radius: 50%;
		/* 绝对定位  居中*/
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		margin: auto;



	}

	/* 图标 */
	.detail-play text {
		width: 100rpx;
		height: 100rpx;
		font-size: 100rpx;
		color: #FFFFFF;
		/* 绝对定位  居中*/
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		margin: auto;


	}

	/* 摇杆 */
	.detail-play view {
		width: 230rpx;
		height: 360rpx;
		background: url(~@/static/needle.png);
		background-size: cover;
		/* 绝对定位  左右居中*/
		position: absolute;
		left: 100rpx;
		right: 0;
		top: -200rpx;
		margin: auto;

	}
	
	/* 歌词 */
	.detail-lyric{
		font-size: 32rpx;
		line-height: 82rpx;
		height: 246rpx;
		text-align: center;
		overflow: hidden;
		color: #6f6e73;
	}
	.detail-lyric-wrap{
		
	}
	/* 歌词项 */
	.detail-lyric-item{
		height: 82rpx;
	}
	/* 歌词项 选中状态 */
	.detail-lyric-item.active{
		color: #FFFFFF;
	}
	
	
</style>
