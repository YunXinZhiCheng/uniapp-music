<template>
	<view class="music-head" :style="{color:color}">
		<!-- 头部图标 -->
		<view class="music-head-icon" v-if="icon" :class="{'music-head-iconblack':iconblack}">
			<!-- 返回左箭头 -->
			<text class="iconfont iconzuojiantou-copy" @tap="handleToBack"></text> |
			<!-- 返回首页 -->
			<text class="iconfont iconshouye" @tap="handleToHome"></text>
		</view>
		<!-- 头部标题 -->
		{{title}}
	</view>
</template>

<script>
	export default {
		// 头部组件
		name: "musichead",
		data() {
			return {

			};
		},
		// 接收属性: 标题，图标显示/隐藏，颜色
		props: ['title', 'icon', 'color', 'iconblack'],
		// 方法
		methods: {
			// 返回上一级
			handleToBack() {
				uni.navigateBack()
			},
			// 返回首页
			handleToHome() {
				uni.navigateTo({
					url: '/pages/index/index'
				})
			}
		}
	}
</script>

<style scoped>
	/* 1px=2rpx */
	.music-head {
		width: 100%;
		height: 75px;
		font-size: 16px;
		line-height: 80px;
		text-align: center;
		color: #000000;
		position: relative;
	}

	/* 头部图标 */
	.music-head-icon {
		position: absolute;
		left: 8px;
		top: 23px;
		width: 90px;
		height: 31px;
		background: rgba(0, 0, 0, 0.4);
		color: #FFFFFF;
		line-height: 31px;
		border-radius: 15px;
		display: flex;
		justify-content: space-evenly;
	}
	
	.music-head-iconblack{
		color: #000000;
		border: 1px solid #eaeaea;
		background: #FFFFFF;
	}
</style>
