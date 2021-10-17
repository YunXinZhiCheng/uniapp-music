<template>
	<view class="list">
		<!-- 背景图 -->
		<view class="fixbg"></view>
		<!-- 头部组件 -->
		<musichead title="歌单" :icon="true" color="white"></musichead>
		<!-- 通用容器 -->
		<view class="container">
			<!-- 滚动区域 -->
			<scroll-view scroll-y="true" >
				<view></view>
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

</style>
