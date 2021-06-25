import { get } from './axios'

class Visitor {
  async getVisitorById(id) {
    const res = await get(`v1/visitor/${id}`)
    return res
  }

  async selectVisitorByCip(params) {
    const res = await get(`v1/visitor?cip=${params.cip}&cid=${params.cid}&cname=${params.cname}`)
    return res
  }

  async dispatchBlogVisitor(params) {
    const res = await get(`v1/visitor/view?blog_id=${params.blog_id}&cip=${params.cip}`)
  }
}

export default new Visitor()
