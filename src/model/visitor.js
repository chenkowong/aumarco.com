import { get, post } from './axios'

class Visitor {
  async getVisitorById(id) {
    const res = await get(`v1/visitor/${id}`)
    return res
  }

  async selectVisitorByCip(params) {
    const res = await post(`v1/visitor`, params)
    return res
  }

  async dispatchBlogVisitor(params) {
    const res = await get(`v1/visitor/view?blog_id=${params.blog_id}&cip=${params.cip}`)
    return res
  }
}

export default new Visitor()
