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

  // 查询评论（分页 + 博客ID + 父级评论ID）
  async getCommentsByPages(params) {
    const res = await get(`v1/comment?page=${params.page}&count=${params.count}&blogId=${params.blogId}&parentId=${params.parentId}&start=${params.start}&end=${params.end}`)
    return res
  }

  // 发布评论
  async createComment(form) {
    const res = await post('v1/comment', form)
    return res
  }
}

export default new Blog()
