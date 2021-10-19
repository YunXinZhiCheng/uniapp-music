<template>
	<view class="detail">
		<!-- 背景图 -->
		<view class="fixbg" :style="{'background-image': 'url('+songDetail.al.picUrl+')'}"></view>
		<!-- 头部组件 -->
		<musichead :title="songDetail.name" :icon="true" color="white"></musichead>

		<!-- 通用容器 -->
		<view class="container" v-show="!isLoading">
			<!-- 滚动区域 -->
			<scroll-view scroll-y="true">
				<!-- 1.播放封面 -->
				<view class="detail-play" @tap="handleToPlay">
					<!-- 图片 歌曲封面-->
					<image :src="songDetail.al.picUrl" :class="{'detail-play-run':isPlayRotate}"></image>
					<!-- 图标 暂停和播放-->
					<text class="iconfont" :class="iconPlay"></text>
					<!-- 图片 播放摇杆 -->
					<view></view>
				</view>

				<!-- 2.歌词 -->
				<view class="detail-lyric">
					<view class="detail-lyric-wrap"
						:style="{ transform : 'translateY(' +  - (lyricIndex - 1) * 82  + 'rpx)' }">
						<!-- 歌词项 -->
						<view class="detail-lyric-item" :class="{ active : lyricIndex == index}"
							v-for="(item,index) in songLyric" :key="index">
							{{ item.lyric }}
						</view>
					</view>
				</view>
				<!-- 3.相似歌曲 -->
				<view class="detail-like">
					<!-- 头部 -->
					<view class="detail-like-head">喜欢这首歌的人也听</view>
					<!-- 列表项: 左中右-->
					<view class="detail-like-item" v-for="(item,index) in songSimi" :key="index"
						@tap="handleToSimi(item.id)">
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
	import '@/common/iconfont.css';

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
					al: {
						picUrl: ''
					}
				},
				// 相似歌曲
				songSimi: [],
				// 精彩评论
				songComment: [],
				// 歌词
				songLyric: [],
				// 歌词选中状态
				lyricIndex: 0,
				// 播放控制与旋转
				iconPlay: 'iconpause',
				isPlayRotate: true,
				// 加载提示
				isLoading: true,
			}
		},
		// 注册
		components: {
			musichead
		},

		// 拿到其它页面跳转传过来的id
		onLoad(options) {
			// console.log(options.songId)

			// 调用详情页数据
			this.getMusic(options.songId)
		},
		// 离开
		onUnload() {
			// 调用清除歌词定时器
			this.cancelLyricIndex()

			// 销毁音频对象 H5端
			// #ifdef H5
			this.bgAudioMannager.destroy()
			// #endif

		},
		// 离开
		onHide() {
			// 调用清除歌词定时器
			this.cancelLyricIndex()

			// 销毁音频对象 H5端
			// #ifdef H5
			this.bgAudioMannager.destroy()
			// #endif
		},

		methods: {
			// 获取详情页数据
			getMusic(songId) {
				// 状态管理
				this.$store.commit('NEXT_ID', songId)

				// 加载提示
				uni.showLoading({
					title: '加载中...'
				})
				// 加载提示开启
				this.isLoading = true

				Promise.all([songDetail(songId), songSimi(songId), songComment(songId), songLyric(songId), songUrl(
					songId)]).then(res => {
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
					// 歌词数据
					if (res[3][1].data.code == '200') {
						let lyric = res[3][1].data.lrc.lyric
						// console.log(lyric)

						// 使用正则处理歌词
						let re = /\[([^\]]+)\]([^[]+)/g;
						// console.log(lyric.match(re))

						// 使用数组存储时间和歌词
						let result = []
						lyric.replace(re, ($0, $1, $2) => {
							result.push({
								time: this.formatTimeToSec($1),
								lyric: $2
							});
						});
						// console.log(result)
						this.songLyric = result;

					}

					// 音乐播放
					if (res[4][1].data.code == '200') {
						// 微信小程序端 播放控制
						// #ifdef MP-WEIXIN
						this.bgAudioMannager = uni.getBackgroundAudioManager();
						this.bgAudioMannager.title = this.songDetail.name;
						// #endif

						// H5端 播放控制
						// #ifdef H5
						if (!this.bgAudioMannager) { // 判断音频对象是否存在
							this.bgAudioMannager = uni.createInnerAudioContext()
						}
						this.iconPlay = 'iconbofang1'
						this.isPlayRotate = false
						// #endif

						this.bgAudioMannager.src = res[4][1].data.data[0].url || '';

						// 监听歌词变化
						this.listenLyricIndex()

						// 监听播放状态
						this.bgAudioMannager.onPlay(() => {
							this.iconPlay = 'iconpause'
							this.isPlayRotate = true
							// 开启歌词定时器
							this.listenLyricIndex()
						})

						// 监听暂停状态
						this.bgAudioMannager.onPause(() => {
							this.iconPlay = 'iconbofang1'
							this.isPlayRotate = false
							// 清除歌词定时器
							this.cancelLyricIndex()
						})

						// 监听歌曲播放结束后 播放下一首id
						this.bgAudioMannager.onEnded(() => {
							this.getMusic(this.$store.state.nextId)
						})

					}
					// 加载提示关闭
					this.isLoading = false
					uni.hideLoading()
				})
			},

			// 时间转换为秒
			formatTimeToSec(time) {
				var arr = time.split(':');
				return (parseFloat(arr[0]) * 60 + parseFloat(arr[1])).toFixed(2);
			},

			// 点击控制播放状态
			handleToPlay() {
				// 判断：如果是暂停状态，就让它播放
				if (this.bgAudioMannager.paused) {
					this.bgAudioMannager.play()
				} else {
					this.bgAudioMannager.pause()
				}
			},

			// 监听歌词变化滚动: 使用定时器
			listenLyricIndex() {
				clearInterval(this.timer)
				this.timer = setInterval(() => {
					for (var i = 0; i < this.songLyric.length; i++) {
						// 当前播放时间走到歌词最后时间时
						if (this.bgAudioMannager.currentTime > this.songLyric[this.songLyric.length - 1].time) {
							this.lyricIndex = this.songLyric.length - 1;
							break;
						}
						// 当前播放时间大于歌词i时间并且小于歌词i+1时间
						if (this.bgAudioMannager.currentTime > this.songLyric[i].time && this.bgAudioMannager
							.currentTime < this.songLyric[i + 1].time
						) {
							this.lyricIndex = i;
						}
					}
					// console.log(this.lyricIndex)
				}, 500)
			},
			// 取消监听的定时器
			cancelLyricIndex() {
				clearInterval(this.timer)
			},
			// 点击相似歌曲播放
			handleToSimi(songId) {
				this.getMusic(songId)
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

		/* 旋转动画 */
		animation: move 10s linear infinite;
		animation-play-state: paused;
	}

	.detail-play .detail-play-run {
		animation-play-state: running;
	}

	/* 关键帧动画 */
	@keyframes move {
		from {
			transform: rotate(0deg);
		}

		to {
			transform: rotate(360deg);
		}
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

	.detail-lyric-wrap {
		transition: 0.5s;
	}

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
