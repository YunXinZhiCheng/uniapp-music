<template>
	<view class="detail">
		<!-- 背景图 -->
		<view class="fixbg" :style="{'background-image': 'url('+songDetail.al.picUrl+')'}"></view>
		<!-- 头部组件 -->
		<musichead :title="songDetail.name" :icon="true" color="white"></musichead>

		<!-- 通用容器 -->
		<view class="container">
			<!-- 滚动区域 -->
			<scroll-view scroll-y="true">
				<!-- 1.播放封面 -->
				<view class="detail-play">
					<!-- 图片 歌曲封面-->
					<image :src="songDetail.al.picUrl"></image>
					<!-- 图标 暂停和播放-->
					<text class="iconfont iconpause"></text>
					<!-- 图片 播放摇杆 -->
					<view></view>
				</view>

				<!-- 2.歌词 -->
				<view class="detail-lyric">
					<view class="detail-lyric-wrap">
						<!-- 歌词项 -->
						<view class="detail-lyric-item">测试文字测试文字</view>
						<view class="detail-lyric-item active">测试文字测试文字</view>
						<view class="detail-lyric-item">测试文字测试文字测试文字</view>
					</view>
				</view>
				<!-- 3.相似歌曲 -->
				<view class="detail-like">
					<!-- 头部 -->
					<view class="detail-like-head">喜欢这首歌的人也听</view>
					<!-- 列表项: 左中右-->
					<view class="detail-like-item" v-for="(item,index) in songSimi" :key="index">
						<!-- 左 歌曲封面-->
						<view class="detail-like-img">
							<image :src="item.album.picUrl" mode=""></image>
						</view>
						<!-- 中 歌曲信息 -->
						<view class="detail-like-song">
							<view>{{item.name}}</view>
							<view>
								<image v-if="item.privilege.flag>60&&item.privilege.flag<70"
									src="../../static/dujia.png" mode=""></image>
								<image v-if="item.privilege.maxbr==999000" src="../../static/sq.png" mode=""></image>
								{{item.album.artists[0].name}} - {{item.name}}
							</view>
						</view>
						<!-- 右 播放按钮 -->
						<text class="iconfont iconbofang"></text>
					</view>


				</view>

				<!-- 4.精彩评论 -->
				<view class="detail-comment">
					<!-- 头部 -->
					<view class="detail-comment-head">精彩评论</view>
					<!-- 列表项 -->
					<view class="detail-comment-item" v-for="(item,index) in songComment" :key="index">
						<!-- 1.评论图片 -->
						<view class="detail-comment-img">
							<image :src="item.user.avatarUrl" mode=""></image>
						</view>
						<!-- 2.评论内容 -->
						<view class="detail-comment-content">
							<!-- 2.1评论标题 -->
							<view class="detail-comment-title">
								<!-- 评论名称 -->
								<view class="detail-comment-name">
									<view>{{item.user.nickname}}</view>
									<view>{{item.time | formatTime}}</view>
								</view>
								<!-- 评论点赞 -->
								<view class="detail-comment-like">
									{{item.likedCount | formatCount}}
									<text class="iconfont iconlike"></text>
								</view>
							</view>
							<!-- 2.2评论文本 -->
							<view class="detail-comment-text">{{item.content}}</view>
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

	// 详情页音乐信息接口引入
	import {
		songDetail,
		songSimi,
		songComment,
		songLyric,
		songUrl
	} from '../../common/api.js'

	export default {
		data() {
			return {
				// 音乐信息
				songDetail: {
					al: {}
				},
				// 相似歌曲
				songSimi: [],
				// 精彩评论
				songComment: [],
			}
		},
		// 注册
		components: {
			musichead
		},

		// 拿到其它页面跳转传过来的id
		onLoad(options) {
			// console.log(options.songId)

			// 
			this.getMusic(options.songId)
		},
		methods: {
			// 
			getMusic(songId) {
				Promise.all([songDetail(songId), songSimi(songId), songComment(songId)]).then(res => {
					// console.log(res)

					// 音乐信息数据
					if (res[0][1].data.code == '200') {
						this.songDetail = res[0][1].data.songs[0]
					}
					// 相似歌曲数据
					if (res[1][1].data.code == '200') {
						this.songSimi = res[1][1].data.songs
					}
					// 精彩评论数据
					if (res[2][1].data.code == '200') {
						this.songComment = res[2][1].data.hotComments
						// console.log(this.songComment)
					}

				})
			}
		}
	}
</script>

<style scoped>
	.detail-play {
		width: 580rpx;
		height: 580rpx;
		/* 背景图片 绝对路径 */
		background: url(~@/static/disc.png);
		background-size: cover;
		margin: 214rpx auto 0 auto;

		position: relative;
	}

	.detail-play image {
		width: 370rpx;
		height: 370rpx;
		border-radius: 50%;
		/* 绝对定位  居中*/
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		margin: auto;



	}

	/* 图标 */
	.detail-play text {
		width: 100rpx;
		height: 100rpx;
		font-size: 100rpx;
		color: #FFFFFF;
		/* 绝对定位  居中*/
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		margin: auto;


	}

	/* 摇杆 */
	.detail-play view {
		width: 230rpx;
		height: 360rpx;
		background: url(~@/static/needle.png);
		background-size: cover;
		/* 绝对定位  左右居中*/
		position: absolute;
		left: 100rpx;
		right: 0;
		top: -200rpx;
		margin: auto;

	}

	/* 歌词 */
	.detail-lyric {
		font-size: 32rpx;
		line-height: 82rpx;
		height: 246rpx;
		text-align: center;
		overflow: hidden;
		color: #6f6e73;
	}

	.detail-lyric-wrap {}

	/* 歌词项 */
	.detail-lyric-item {
		height: 82rpx;
	}

	/* 歌词项 选中状态 */
	.detail-lyric-item.active {
		color: #FFFFFF;
	}

	/* 相似歌曲 */
	.detail-like {
		margin: 0 30rpx;
	}

	/* 相似歌曲 头部 */
	.detail-like-head {
		font-size: 36rpx;
		color: #FFFFFF;
		margin: 50rpx 0;
	}

	/* 相似歌曲 列表项 */
	.detail-like-item {
		display: flex;
		align-items: center;
		margin-bottom: 28rpx;
	}

	.detail-like-img {
		width: 82rpx;
		height: 82rpx;
		border-radius: 20rpx;
		overflow: hidden;
		margin-right: 20rpx;
	}

	.detail-like-img image {
		width: 100%;
		height: 100%;

	}

	.detail-like-song {
		flex: 1;
		color: #c6c2bf;
	}

	.detail-like-song view:nth-child(1) {
		font-size: 28rpx;
		color: #FFFFFF;
		margin-bottom: 12prx;
	}

	.detail-like-song view:nth-child(2) {
		font-size: 22rpx;
	}

	.detail-like-song image {
		width: 26rpx;
		height: 20rpx;
		margin-right: 10rpx;
	}

	.detail-like-item text {
		font-size: 50rpx;
		color: #C6C2BF;
	}

	/* 精彩评论 */
	.detail-comment {
		margin: 0 30rpx;
	}

	/* 精彩评论 头部 */
	.detail-comment-head {
		font-size: 36rpx;
		color: #FFFFFF;
		margin: 50rpx 0;
	}

	/* 精彩评论 列表项 */
	.detail-comment-item {
		margin-bottom: 28rpx;
		display: flex;

	}

	.detail-comment-img {
		width: 64rpx;
		height: 64rpx;
		border-radius: 50%;
		overflow: hidden;
		margin-right: 18rpx;
	}

	.detail-comment-img image {
		width: 100%;
		height: 100%;
	}

	.detail-comment-content {
		flex: 1;
		color: #cbcacf;
	}

	.detail-comment-title {
		display: flex;
		justify-content: space-between;
	}

	.detail-comment-name {}

	.detail-comment-name view:nth-child(1) {
		font-size: 26rpx;
	}

	.detail-comment-name view:nth-child(2) {
		font-size: 20rpx;
	}

	.detail-comment-like {
		font-size: 28rpx;
	}

	.detail-comment-text {
		font-size: 28rpx;
		line-height: 40rpx;
		color: #FFFFFF;
		margin-top: 20rpx;
		border-bottom: 1px solid #e0e0e0;
		padding-bottom: 40rpx;

	}
</style>
