// 引入
import {
	baseUrl
} from './config.js'

// 分类接口
export function topList() {
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
				// 成功执行
				resolve(result)
			}
		})
	})

}
