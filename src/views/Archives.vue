<template>
  <div class="archives amc_page">
    <div style="position: relative;">
      <figure>
<!--        <img src="https://qn.aumarco.com/desktop5.gif" width="100%" height="100%">-->
        <img src="https://qn.aumarco.com/6e93c2076c3842ab9c5d633452cc4a07.png" width="100%" height="100%">
      </figure>
      <br>
      <div class="tags" style="margin-bottom: 0px;">
        <span
          class="tag is-white"
          :class="{'is-black': item.isActive}"
          v-for="(item, index) in sort_list"
          :key="index"
          @click="handleChangeSort(item)"
          style="cursor: pointer;"
        >{{item.sort_name}}</span>
      </div>
      <br>
      <div class="field has-addons" style="margin-bottom: 0px;">
        <p class="control has-icons-left is-expanded">
          <input class="input is-dark" v-model="keyWord" placeholder="search what you want ..">
          <span class="icon is-small is-left">
            <i class="fas fa-search"></i>
          </span>
        </p>
        <p class="control" v-if="keyWord">
          <a class="button is-dark" @click="keyWord = ''">
            <span class="icon is-small is-right">
              <i class="far fa-times-circle"></i>
            </span>
          </a>
        </p>
      </div>
      <progress v-if="loading" class="progress is-small is-primary" max="100" :style="{ borderRadius: '0px', height: '4px' }">15%</progress>
<!--      <loading v-if="loading"></loading>-->
      <table class="table is-fullwidth amc_table">
        <thead>
          <tr>
            <th style="text-align: left;">
<!--              <span class="icon-text has-text-success-dark">-->
<!--                <span class="icon">-->
<!--                  <i class="fas fa-book"></i>-->
<!--                </span>-->
<!--                <span>所有文章</span>-->
<!--              </span>-->
            </th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in blog_list" :key="index" :style="{ fontSize: global_font_size }">
            <td style="text-align: left; width: 60%;">
              <div>
                <p class="amc_text">
                  <a class="amc_router amc_page" @click="goBlogUrl(item.id)">{{item.blog_title}}</a>
                </p>
              </div>
            </td>
            <td style="text-align: right; width: 40%;">
              <span class="amc_date">{{item.create_time}}</span>
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
import Sort from '@/model/sort'
import Blog from '@/model/blog'
import Loading from '@/components/layout/loading'
import globalMixin from "@/mixin/global";
export default {
  components: { Loading },
  mixins: [globalMixin],
  data () {
    return {
      active: false,
      keyWord: '',
      form: {
        keyWord: "",
        sort_id: "",
        page: 0,
        count: 20,
        removeId: '',
        desc: 1
      },
      sort_list: [
        {
          sort_name: '# 所有文章',
          id: '',
          isActive: true
        }
      ],
      blog_list: [],
      blog_total: 0,
      showButton: true
    }
  },
  created () {
    this._getAllSorts()
    this._getBlogsByKeyWord(0, 20)
  },
  watch: {
    keyWord() {
      console.log('search')
      this.form.keyWord = this.keyWord
      this.blog_list = []
      this._getBlogsByKeyWord(0, 20)
    }
  },
  methods: {
    async _getAllSorts() {
      this.loading = true
      try {
        const res = await Sort.getAllSort(1)
        res.forEach(item => {
          item.sort_name = `# ${item.sort_name}`
          this.$set(item, 'isActive', false)
          this.sort_list.push(item)
        })
      } catch (e) {
        console.error(e)
      }
      this.loading = false
    },
    async _getBlogsByKeyWord (start, pageCount) {
      this.loading = true
      this.form.page = start
      this.form.count = pageCount
      try {
        const res = await Blog.getBlogByPages(this.form)
        this.blog_total = res.total
        if (res.items.length !== 0) {
          res.items.forEach(item => {
            this.blog_list.push(item)
            if (this.blog_list.length === this.blog_total) this.showButton = false
            else this.showButton = true
            item.create_time = this.dateFormatter(item.create_time)
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
            item.create_time = this.dateFormatter(item.create_time)
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
      if (this.form.sort_id === "") await this._getBlogsByKeyWord(next_page, 20)
      else await this._getBlogsBySort(next_page, 20)
    },
    async handleResetSearch() {
      console.log('hello')
    },
    async handleChangeSort(sort) {
      document.title = sort.sort_name
      this.sort_list.forEach(item => {
        if (item.id === sort.id) item.isActive = true
        else item.isActive = false
      })
      this.blog_list = []
      this.form.sort_id = sort.id
      if (this.form.sort_id === "") await this._getBlogsByKeyWord(0, 20)
      else await this._getBlogsBySort(0, 20)
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
