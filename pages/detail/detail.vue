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

</style>
