import { get, put, _delete, post } from './axios'

class Timeline {

  // 查询时间轴（分页 + 搜索）
  async getTimelineBySort(params) {
    const res = await get(`v1/timeline/sort?page=${params.page}&count=${params.count}&keyWord=${params.keyWord}&parentId=${params.parentId}`)
    return res
  }

  // 查询时间轴（分页 + 搜索）
  async getTimelineWithoutSort(params) {
    const res = await get(`v1/timeline?page=${params.page}&count=${params.count}&keyWord=${params.keyWord}`)
    return res
  }
}

export default new Timeline()
