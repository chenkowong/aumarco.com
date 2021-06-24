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
}

export default new Visitor()
