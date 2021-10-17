<script>
	export default {
		onLaunch: function() {
			// console.log('App Launch')
		},
		onShow: function() {
			// console.log('App Show')
		},
		onHide: function() {
			// console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */

	/* 通用容器 */
	.container {
		width: 100%;
		height: calc(100vh - 70px);
		overflow: hidden;
	}

	/* 通用容器下的滚动区域 */
	.container scroll-view {
		height: 100%;
	}
	
	/* 通用列表的背景图 */
	.fixbg{
		width: 100%;
		height: 100vh;
		/* 固定定位 */
		position: fixed;
		top: 0;
		left: 0;
		background-image: url(static/wangyiyunyinyue.png);
		background-size: cover;
		background-position: center 0;
		/* 模糊效果 */
		filter:blur(10px);
		/* 缩放效果 */
		transform: scale(1.2);
	}
</style>
