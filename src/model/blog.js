import { get, put, _delete, post } from './axios'

class Blog {
  // 查询博客（单一）
  async getBlogById(id) {
    const res = await get(`v1/blog/${id}`)
    return res
  }

  // 查询博客（分页 + 搜索）
  async getBlogByPages(params) {
    const res = await get(`v1/blog/search?page=${params.page}&count=${params.count}&keyWord=${params.keyWord}`)
    return res
  }

  // 查询博客（类别）
  async getBlogBySortId(params) {
    const res = await get(`v1/blog/sort?page=${params.page}&count=${params.count}&sort_id=${params.sort_id}`)
    return res
  }
}

export default new Blog()
