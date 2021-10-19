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
					<input type="text" placeholder="搜索歌曲" v-model="searchWord"
						@confirm="handleToSearch(searchWord)">
					<!-- 搜索关闭图标 -->
					<text v-show="searchType!=1" class="iconfont iconguanbi"></text>
				</view>
				
				<!-- 块占位符  -->
				<block v-if="searchType==1">
					<!-- 历史记录 -->
					<view class="search-history">
						<!-- 头部：左右 -->
						<view class="search-history-head">
							<text>历史记录</text>
							<!-- 垃圾桶图标：清空历史记录 -->
							<text class="iconfont iconlajitong" @tap="handleToClear"></text>
						</view>
						<!-- 列表 历史记录 -->
						<view class="search-history-list">
							<view v-for="(item,index) in searchHistory" :key="index" @tap="handleToWord(item)">{{item}}
							</view>
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
				</block>
				
				<!-- 搜索结果 -->
				<block v-else-if="searchType==2">
					<view class="search-result">
						<!-- 搜索结果项 -->
						<view class="search-result-item">
							<!-- 搜索结果词 -->
							<view class="search-result-word">
								<view>忘情水</view>
								<view>刘德华-恭喜发财</view>
							</view>
							<!-- 搜索结果播放图标 -->
							<text class="iconfont iconbofang"></text>
						</view>
						
						<!-- 搜索结果项 -->
						<view class="search-result-item">
							<!-- 搜索结果词 -->
							<view class="search-result-word">
								<view>忘情水</view>
								<view>刘德华-恭喜发财</view>
							</view>
							<!-- 搜索结果播放图标 -->
							<text class="iconfont iconbofang"></text>
						</view>
						
						<!-- 搜索结果项 -->
						<view class="search-result-item">
							<!-- 搜索结果词 -->
							<view class="search-result-word">
								<view>忘情水</view>
								<view>刘德华-恭喜发财</view>
							</view>
							<!-- 搜索结果播放图标 -->
							<text class="iconfont iconbofang"></text>
						</view>
						
					</view>
				</block>
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
	import {
		searchHot,
		searchWord,
		searchSuggest
	} from '../../common/api.js'

	export default {
		data() {
			return {
				// 搜索榜
				searchHot: [],
				// 搜索词
				searchWord: '',
				// 历史记录
				searchHistory: [],
				// 搜索类型 1是默认显示
				searchType: 2
			}
		},
		components: {
			musichead
		},

		onLoad() {
			// 搜索榜数据
			searchHot().then(res => {
				// console.log(res[1])
				if (res[1].data.code == '200') {
					this.searchHot = res[1].data.data
				}
			})
		},

		methods: {
			// 点击热搜榜，搜索框就更新热搜词
			handleToWord(word) {
				this.searchWord = word
			},
			// 点击搜索框，将输入结果存入搜索历史记录数组
			handleToSearch(word) {
				// console.log(word)
				this.searchHistory.unshift(word)
				// 相同记录进行数组元素去重
				this.searchHistory = [...new Set(this.searchHistory)]
				// 限制数组存入数量
				if (this.searchHistory.length > 10) {
					this.searchHistory.length = 10
				}
				// 本地存储 历史记录存储
				uni.setStorage({
					key: 'searchHistory',
					data: this.searchHistory
				})
				// 本地存储 历史记录取出
				uni.getStorage({
					key: 'searchHistory',
					success: res => {
						this.searchHistory = res.data
					}
				})
			},
			// 点击垃圾桶 清空历史记录 清除本地存储
			handleToClear() {
				uni.clearStorage({
					key: 'searchHistory',
					success: res => {
						// 清空数组
						this.searchHistory = []
					}
				})
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
	
	/* 搜索结果 */
	.search-result{
		border-top: 2rpx solid #e4e4e4;
		padding: 30rpx;
	}
	.search-result-item{
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding-bottom: 30rpx;
		margin-bottom: 30rpx;
		border-bottom: 2rpx solid #e4e4e4;
	}
	.search-result-word{}
	.search-result-word view:nth-child(1){
		font-size: 28rpx;
		color: #235790;
		margin-bottom: 12rpx;
	}
	.search-result-word view:nth-child(2){
		font-size: 22rpx;
		color: #898989;
	}
	.search-result-item text {
		font-size: 50rpx;
	}
</style>
