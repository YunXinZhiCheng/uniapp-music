// 引入
import {
	baseUrl
} from './config.js'

// 首页分类接口
export function topList() {
	// 列表idx
	let listIds = ['3', '0', '2', '1'] // 对应顺序
	return new Promise(function(resolve, reject) {
		uni.request({
			// 使用字符串拼接
			url: `${baseUrl}/toplist/detail`,
			method: 'GET',
			data: {},
			success: res => {
				// console.log(res)

				// 数组数据
				let result = res.data.list

				// 数组方法：获取前4项
				result.length = 4
				// 数组遍历：
				for (var i = 0; i < listIds.length; i++) {
					result[i].listId = listIds[i]
				}
				// 成功执行
				resolve(result)
			}
		})
	})

}

// 歌曲列表页头部接口
export function list(listId) {
	return uni.request({
		url: `${baseUrl}/top/list/?idx=${listId}`,
		method: 'GET'
	})
}

// 详情页音乐信息接口
export function songDetail(songId) {
	return uni.request({
		url: `${baseUrl}/song/detail?ids=${songId}`,
		method: 'GET'
	})
}

// 详情页相似歌曲接口
export function songSimi(songId) {
	return uni.request({
		url: `${baseUrl}/simi/song?id=${songId}`,
		method: 'GET'
	})
}
// 详情页精彩评论接口
export function songComment(songId) {
	return uni.request({
		url: `${baseUrl}/comment/music?id=${songId}`,
		method: 'GET'
	})
}
// 详情页歌词接口
export function songLyric(songId) {
	return uni.request({
		url: `${baseUrl}/lyric?id=${songId}`,
		method: 'GET'
	})
}
// 详情页音乐播放接口
export function songUrl(songId) {
	return uni.request({
		url: `${baseUrl}/song/url?id=${songId}`,
		method: 'GET'
	})
}

// 搜索页热搜榜接口
export function searchHot() {
	return uni.request({
		url: `${baseUrl}/search/hot/detail`,
		method: 'GET'
	})
}
// 搜索页搜索结果接口
export function searchWord(word) {
	return uni.request({
		url: `${baseUrl}/search?keywords=${word}`,
		method: 'GET'
	})
}
// 搜索页下拉提示接口
export function searchSuggest(word) {
	return uni.request({
		url: `${baseUrl}/search/suggest?keywords=${word}&type=mobile`,
		method: 'GET'
	})
}
