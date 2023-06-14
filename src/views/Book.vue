<template>
  <div class="archives amc_page">
    <div style="position: relative;">
      <loading v-if="loading"></loading>
<!--      <figure class="image is-2by1">-->
<!--        <img-->
<!--          :style="{-->
<!--            backgroundImage: 'url(https://qn.aumarco.com/IMG_62262.JPG)',-->
<!--            backgroundSize: '100%'-->
<!--          }"-->
<!--        >-->
<!--      </figure>-->
      <figure>
<!--        <img src="https://qn.aumarco.com/Fr3coZk22l5IhMqH2U-76V3-ttVD" width="100%" height="100%">-->
        <img src="https://qn.aumarco.com/Fjub_Abrc1TrxSBug0S0X-nPJ8p1" width="100%" height="100%">
      </figure>
      <br>
      <div>
        「 保持阅读是没有算法推送参与、自我兴趣探索和维持语言习惯的过程 」
      </div>
      <br />
      <br />
<!--      <div class="columns is-mobile amc_book_mobile">-->
<!--        <div class="column is-one-fifth" v-for="(item, index) in blog_list" :key="index">-->
<!--          <figure class="image is-3by4">-->
<!--            <img-->
<!--              :style="{-->
<!--                  backgroundImage: 'url(' + item.image + ')',-->
<!--                  backgroundSize: '100%'-->
<!--                }"-->
<!--            >-->
<!--          </figure>-->
<!--        </div>-->
<!--      </div>-->
      <table class="table is-fullwidth amc_book_table">
        <thead>
        <tr>
          <th style="text-align: left;">
          </th>
          <th></th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(item, index) in blog_list" :key="index">
          <td class="amc_td_left">
            <figure class="image is-3by4">
              <img
                :style="{
                  backgroundImage: 'url(' + item.image + ')',
                  backgroundSize: '100%',
                  border: 'none'
                }"
              >
            </figure>
          </td>
          <td class="amc_td_right">
            <div>
              <p>
                <span class="has-text-black is-6 amc_text_by2 amc_td_text_medium" style="font-weight: bold;">{{item.title}}</span>
<!--                <span class="has-text-grey amc_td_text_small">{{item.percentage}}%</span>-->
              </p>
              <p class="has-text-black is-6 amc_text_by1 amc_td_text_small">{{item.author}}</p>
              <p class="has-text-black amc_td_text_small">{{item.remark}}</p>
              <p class="has-text-black amc_td_text_small">{{item.summary}}</p>
            </div>
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
      >没有更多书籍啦</button>
    </div>
  </div>
</template>

<script>
import Book from '@/model/book'
import Loading from "@/components/layout/loading";
import globalMixin from "@/mixin/global";

export default {
  components: { Loading },
  mixins: [globalMixin],
  data () {
    return {
      active: false,
      form: {
        keyWord: "",
        sort_id: "",
        page: 0,
        count: 20
      },
      blog_list: [],
      blog_total: 0,
      showButton: true
    }
  },
  created () {
    this._getBooksByKeyWord(0, 20)
  },
  methods: {
    async _getBooksByKeyWord (start, pageCount) {
      this.loading = true
      this.form.page = start
      this.form.count = pageCount
      try {
        const res = await Book.getBookByPages(this.form)
        this.blog_total = res.total
        if (res.items.length !== 0) {
          res.items.forEach(item => {
            this.blog_list.push(item)
            if (this.blog_list.length === this.blog_total) this.showButton = false
            else this.showButton = true
          })
        } else {
          this.showButton = false
        }
      } catch (e) {
        console.log(e)
      }
      this.loading = false
    },
    async _getBlogsBySort (start, pageCount) {
      this.form.page = start
      this.form.count = pageCount
      try {
        const res = await Blog.getBlogBySortId(this.form)
        this.blog_total = res.total
        if (res.items.length !== 0) {
          res.items.forEach(item => {
            this.blog_list.push(item)
            if (this.blog_list.length === this.blog_total) this.showButton = false
          })
        } else {
          this.showButton = false
        }
      } catch (error) {
        console.log(error)
      }
    },
    async getMoreBlog() {
      const next_page = this.form.page + 1
      if (this.form.sort_id === "") await this._getBooksByKeyWord(next_page, 20)
      else await this._getBlogsBySort(next_page, 20)
    },
    async goBlogUrl(id) {
      this.$router.push({
        path: '/blog',
        query: {
          comp: id
        }
      })
    }
  }
}
</script>

<style type="scss">
@import '../assets/style/element-variable.scss';
</style>
