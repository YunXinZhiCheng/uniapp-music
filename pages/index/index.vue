<template>
	<view class="content">
		<!-- 头部组件 -->
		<musichead title="云音乐" :icon="false"></musichead>
		<!-- 通用容器 -->
		<view class="container">
			<!-- 滚动区域 -->
			<scroll-view scroll-y="true">
				<!-- 搜索 -->
				<view class="index-search" @tap="handleToSearch()">
					<!-- 搜索图标 -->
					<text class="iconfont iconsearch"></text>
					<!-- 搜索表单 -->
					<input type="text" placeholder="搜索歌曲">
				</view>
				<!-- 分类 -->
				<view class="index-list">
					<!-- 分类项：左侧图片+右侧信息 -->
					<view class="index-list-item" v-for="(item,index) in topList" :key="index"
						@tap="handleToList(item.listId)">
						<!-- 图片 -->
						<view class="index-list-img">
							<image :src="item.coverImgUrl" mode=""></image>
							<text>{{item.updateFrequency}}</text>
						</view>
						<!-- 信息 -->
						<view class="index-list-text">
							<view v-for="(musicItem,index) in item.tracks" :key="index">
								{{index+1}}.{{musicItem.first}} - {{musicItem.second}}
							</view>
						</view>
					</view>

				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	// 字体图标引入
	import '@/common/iconfont.css'
	// 头部组件引入
	import musichead from '../../components/musichead/musichead.vue'
	// 首页数据接口引入
	import {
		topList
	} from '../../common/api.js'
	export default {
		data() {
			return {
				topList: [], // 分类数组

			}
		},
		// 注册
		components: {
			musichead
		},
		// 生命周期：页面加载完成后触发
		onLoad() {
			topList().then(res => {
				// 判断：如果数据存在
				if (res.length) {
					this.topList = res
				}
			})
		},
		methods: {
			// 跳转到列表页，参数：列表的Id
			handleToList(listId) {
				uni.navigateTo({
					// 传参地址：字符串拼接
					url: '/pages/list/list?listId=' + listId
				})
			},

			// 跳转到搜索页
			handleToSearch() {
				uni.navigateTo({
					url: '/pages/search/search'
				})
			}

		}
	}
</script>

<style scoped>
	/* 搜索 */
	.index-search {
		display: flex;
		align-items: center;
		height: 70rpx;
		margin: 70rpx 30rpx 30rpx 30rpx;
		background: #f7f7f7;
		border-radius: 50rpx;
	}

	/* 搜索图标 */
	.index-search text {
		font-size: 26rpx;
		margin-left: 28rpx;
		margin-right: 26rpx;
		color: #000000;
	}

	/* 搜索表单 */
	.index-search input {
		font-size: 28rpx;
		flex: 1;
	}

	/* 分类 */
	.index-list {
		margin: 0 30rpx;
	}

	/* 分类项 */
	.index-list-item {
		display: flex;
		margin-bottom: 34rpx;
	}

	/* 分类项 左侧图片 */
	.index-list-img {
		width: 212rpx;
		height: 212rpx;
		position: relative;
		border-radius: 30rpx;
		overflow: hidden;
		margin-right: 22rpx;
	}

	.index-list-img image {
		width: 100%;
		height: 100%;
	}

	.index-list-img text {
		position: absolute;
		left: 12rpx;
		bottom: 16rpx;
		color: #FFFFFF;
		font-size: 20rpx;
	}

	/* 分类项 右侧信息 */
	.index-list-text {
		font-size: 24rpx;
		line-height: 66rpx;
	}
</style>
