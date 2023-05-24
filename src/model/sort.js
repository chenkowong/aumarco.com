import { get, put, _delete, post } from './axios'

class Sort {
  // 查询类别（所有）
  async getAllSort(parent) {
    const res = await get(`v1/sort?parent=${parent}`)
    return res
  }
}

export default new Sort()
