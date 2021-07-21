import { get } from './axios'

class Book {
  // 查询书籍（分页 + 关键字）
  async getBookByPages(params) {
    const res = await get(`v1/book/search?page=${params.page}&count=${params.count}&keyWord=${params.keyWord}`)
    return res
  }
}

export default new Book()
