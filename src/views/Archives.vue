<template>
  <div class="archives">
    <div class="column is-6 is-offset-3">
      <table class="table is-fullwidth">
        <thead>
        <tr>
          <th>
              <span class="icon-text has-text-success-dark">
                <span class="icon">
                  <i class="fas fa-book-open"></i>
                </span>
                <span>所有文章</span>
              </span>
          </th>
          <th></th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(item, index) in blog_list" :key="index">
          <th>
              <span>
                <a class="amc_router" @click="goBlogUrl(item.id)">{{item.blog_title}}</a>
              </span>
          </th>
          <td style="text-align: right;">
            <span style="color:grey;">{{item.create_time}}</span>
          </td>
        </tr>
        </tbody>
        <tfoot>
        <tr><th></th><th></th></tr>
        </tfoot>
      </table>
      <button
        v-if="showButton"
        class="button is-small is-fullwidth"
        @click="getMoreBlog"
      >加载更多</button>
      <button
        v-else
        class="button is-small is-fullwidth"
        title="Disabled button"
        disabled
      >没有更多文章啦</button>
    </div>
  </div>
</template>

<script>
import Blog from '@/model/blog'

export default {
  data () {
    return {
      form: {
        keyWord: '',
        page: 0,
        count: 20
      },
      blog_list: [],
      blog_total: 0,
      showButton: true
    }
  },
  created () {
    this._getTableData(0, 20)
  },
  methods: {
    async _getTableData (start, pageCount) {
      this.form.page = start
      this.form.count = pageCount
      try {
        const res = await Blog.getBlogByPages(this.form)
        this.blog_total = res.total
        if (res.items.length !== 0) {
          res.items.forEach(item => {
            this.blog_list.push(item)
            if (this.blog_list.length === this.blog_total) this.showButton = false
          })
        } else {
          this.showButton = false
        }
        console.log(this.blog_list)
      } catch (error) {
        console.log(error)
      }
    },
    async getMoreBlog() {
      const next_page = this.form.page + 1
      await this._getTableData(next_page, 20)
    }
  }
}
</script>
