import { get, put, _delete, post } from './axios'

class Blog {
  // 查询类别（单一）
  async getBlogById(id) {
    const res = await get(`v1/blog/${id}`)
    return res
  }

  // 查询类别（分页 + 搜索）
  async getBlogByPages(params) {
    const res = await get(`v1/blog/search?page=${params.page}&count=${params.count}&keyWord=${params.keyWord}`)
    return res
  }

  // 创建类别
  async createBlog(form) {
    const res = await post('v1/blog', form)
    return res
  }

  // 修改项目
  async updateBlog(id, form) {
    const res = await put(`v1/blog/${id}`, form)
    return res
  }

  // 删除项目
  async deleteBlog(id, sort_id) {
    const res = await _delete(`v1/blog/${id}?sort_id=${sort_id}`)
    return res
  }
}

export default new Blog()
