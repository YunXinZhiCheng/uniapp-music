// 引入
import {
	baseUrl
} from './config.js'

// 分类接口
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
