<template>
	<view class="content">
		<!-- 头部组件 -->
		<musichead title="云音乐"></musichead>
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
				title: 'Hello'
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

</style>
