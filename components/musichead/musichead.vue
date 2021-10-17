<template>
	<view class="music-head">
		<!-- 头部图标 -->
		<view class="music-head-icon">
			<text class="iconfont iconzuojiantou-copy"></text> | <text class="iconfont iconshouye"></text>
		</view>
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
		// 接收属性
		props: ['title']
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
</style>
