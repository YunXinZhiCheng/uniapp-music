<template>
	<view class="search">
		<!-- 头部组件 -->
		<musichead title="搜索" :icon="true" :iconblack="true"></musichead>
		<!-- 通用容器 -->
		<view class="container">
			<!-- 滚动区域 -->
			<scroll-view scroll-y="true">
				<!-- 搜索 -->
				<view class="search-search">
					<!-- 搜索图标 -->
					<text class="iconfont iconsearch"></text>
					<!-- 搜索表单  双向数据绑定-->
					<input type="text" placeholder="搜索歌曲" v-model="searchWord">
					<!-- 搜索关闭图标 -->
					<text class="iconfont iconguanbi"></text>
				</view>

				<!-- 历史记录 -->
				<view class="search-history">
					<!-- 头部：左右 -->
					<view class="search-history-head">
						<text>历史记录</text>
						<text class="iconfont iconlajitong"></text>
					</view>
					<!-- 列表 -->
					<view class="search-history-list">
						<view>忘情水</view>
						<view>测试歌曲</view>
						<view>忘情水</view>
						<view>测试歌曲</view>
						<view>忘情水</view>
						<view>测试歌曲</view>
						<view>忘情水</view>
						<view>测试歌曲</view>
					</view>
				</view>

				<!-- 热搜榜 -->
				<view class="search-hot">
					<!-- 头部 -->
					<view class="search-hot-head">热搜榜</view>
					<!-- 列表项：左中右 -->
					<view class="search-hot-item" v-for="(item,index) in searchHot" :key="index"
					@tap="handleToWord(item.searchWord)">
						<view class="search-hot-top">{{index+1}}</view>
						<view class="search-hot-word">
							<view>
								{{item.searchWord}}
								<image :src="item.iconUrl" mode="aspectFill"></image>
							</view>
							<view>{{item.content}}</view>
						</view>
						<text class="search-hot-count">{{item.score}}</text>
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
	// 搜索页相关接口引入
	import {searchHot,searchWord,searchSuggest} from '../../common/api.js'

	export default {
		data() {
			return {
				// 搜索榜
				searchHot: [],
				// 搜索词
				searchWord: ''
			}
		},
		components: {
			musichead
		},
		
		onLoad() {
		   // 搜索榜数据
		   searchHot().then(res=>{
			   // console.log(res[1])
			   if(res[1].data.code=='200'){
				   this.searchHot = res[1].data.data
			   }
		   })
		},
		
		methods: {
			// 点击热搜榜，搜索框就更新热搜词
			handleToWord(word){
				this.searchWord = word
			}
		}
	}
</script>

<style>
	/* 搜索 */
	.search-search {
		display: flex;
		align-items: center;
		height: 70rpx;
		margin: 70rpx 30rpx 50rpx 30rpx;
		background: #F7F7F7;
		border-radius: 50rpx;
	}

	/* 搜索 图标 */
	.search-search text {
		margin: 0 26rpx;
		color: #000000;
	}

	/* 搜索 表单输入框 */
	.search-search input {
		flex: 1;
		font-size: 26rpx;
		color: #000000;
	}

	/* 历史记录 */
	.search-history {
		margin: 0rpx 30rpx 50rpx 30rpx;
		font-size: 26rpx;
	}

	/* 历史记录 头部 */
	.search-history-head {
		display: flex;
		justify-content: space-between;
		margin-bottom: 36rpx;
	}

	/* 历史记录 列表 */
	.search-history-list {
		display: flex;
		flex-wrap: wrap;
	}

	.search-history-list view {
		padding: 16rpx 28rpx;
		border-radius: 40rpx;
		margin-right: 30rpx;
		margin-bottom: 30rpx;
		background: #f7f7f7;
	}

	/* 热搜榜 */
	.search-hot {
		margin: 0 30rpx;
		font-size: 26rpx;
	}

	/* 热搜榜 头部 */
	.search-hot-head {
		margin-bottom: 36rpx;
	}

	/* 热搜榜 列表项 */
	.search-hot-item {
		display: flex;
		align-items: center;
		margin-bottom: 58rpx;
	}

	/* 左 */
	.search-hot-top {
		color: #fb2222;
		width: 60rpx;
		margin-left: 8rpx;
	}

	/* 中 */
	.search-hot-word {
		flex: 1;
	}

	.search-hot-word view:nth-child(1) {
		font-size: 30rpx;
		color: #000000;
	}

	.search-hot-word view:nth-child(2) {
		font-size: 24rpx;
		color: #878787;
		/* 单行溢出隐藏 */
		width: 60vw;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	.search-hot-word image {
		width: 48rpx;
		height: 22rpx;
	}

	/* 右 */
	.search-hot-count {
		color: #878787;
	}
</style>
