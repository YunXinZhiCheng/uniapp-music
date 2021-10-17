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
				<!-- 列表头部: 左侧图片+右侧信息 -->
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
</style>
