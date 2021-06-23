<template>
  <div class="home">
    <div class="column is-6 is-offset-3">
      <div class="container">
        <div>
          「 社会时常都在发生巨变，这自然会让我们好奇究竟下一次巨变会是什么样子。
          过去二十年移动手机或智能手机曾经独占鳌头那接下来的二十年这将会被物联网所取代。
          我们其实已经在物联网这个巨变中了, 每一天我们都在听闻某某行业先锋又在技术领域领先了一小步。
          这些小变化慢慢积累起来，逐渐成为未来的科技大爆炸 」
        </div>
        <figure style="position:relative;">
          <img v-bind:src="background" width="100%" height="100%">
        </figure>
        <br />
        <br />
      </div>
      <div class="container">
        <h2 class="subtitle is-success">最新文章</h2>
        <div class="columns is-mobile" v-for="(item, index) in blog_list" :key="index">
          <div class="column is-8 amc_column">
            <span>
              <a class="amc_router" @click="goBlogUrl(item.id)">{{item.blog_title}}</a>
            </span>
          </div>
          <div class="column is-4 amc_column" style="text-align: right;">
            <span style="color:grey;">{{item.create_time}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Blog from '@/model/blog'
import background from '@/assets/images/skills.png'

export default {
  name: 'Home',
  data () {
    return {
      background: background,
      form: {
        keyWord: '',
        page: 0,
        count: 10
      },
      blog_list: []
    }
  },
  created () {
    this._getTableData(0, 10)
  },
  methods: {
    async _getTableData (start, pageCount) {
      this.form.page = start
      this.form.count = pageCount
      try {
        const res = await Blog.getBlogByPages(this.form)
        this.blog_list = res.items
      } catch (error) {
        console.log(error)
      }
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

<style type="scss" scoped>
@import '../assets/style/element-variable.scss';
</style>
