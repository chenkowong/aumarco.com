<template>
  <div class="blog">
    <div class="column is-6 is-offset-3">
      <h1 class="title is-4" v-if="blog">{{blog.blog_title}}</h1>
      <p v-if="blog">
        <span class="icon-text has-text-success-dark">
          <span class="icon">
            <i class="fas fa-calendar-alt"></i>
          </span>
          <span>{{blog.create_time}}</span>
        </span>
        <span>&nbsp;&nbsp;|&nbsp;&nbsp;</span>
        <span class="icon-text has-text-success-dark">
          <span class="icon">
            <i class="fas fa-book"></i>
          </span>
          <span>{{blog.sort_name}}</span>
        </span>
        <span>&nbsp;&nbsp;|&nbsp;&nbsp;</span>
        <span class="icon-text has-text-success-dark">
          <span class="icon">
            <i class="fas fa-eye"></i>
          </span>
          <span>{{blog.blog_views}}</span>
        </span>
        <span>&nbsp;&nbsp;|&nbsp;&nbsp;</span>
        <span class="icon-text has-text-success-dark">
          <span class="icon">
            <i class="fas fa-comment-alt"></i>
          </span>
          <span>{{blog.blog_comment_count}}</span>
        </span>
        <span>&nbsp;&nbsp;|&nbsp;&nbsp;</span>
        <span class="icon-text has-text-success-dark">
          <span class="icon">
            <i class="fas fa-heart"></i>
          </span>
          <span>{{blog.blog_like_count}}</span>
        </span>
      </p>
      <br />
      <figure v-if="blog">
        <img v-bind:src="blog.blog_cover" width="100%" height="100%">
      </figure>
      <br />
      <div id="result" class="markdown-body"></div>
      <br />
      <button
        class="button is-small is-fullwidth"
        title="Disabled button"
        disabled
      >已经到最底啦</button>
      <br />
      <div class="columns is-mobile" v-if="blog">
        <div class="column is-half-desktop">
          <button
            class="button"
            style="border: none;"
            :disabled="blog.prev_blog_id === -1"
            @click="goBlogUrl(blog.prev_blog_id)"
          >
            <span class="icon">
              <i class="fas fa-chevron-left"></i>
            </span>
            <span v-if="blog.prev_blog_id === -1">没有啦</span>
            <span v-else>上一篇</span>
          </button>
<!--          <span class="icon-text">-->
<!--            <span class="icon">-->
<!--              <i class="fas fa-chevron-left"></i>-->
<!--            </span>-->
<!--            <span>上一篇</span>-->
<!--          </span>-->
        </div>
        <div class="column is-half-desktop" style="text-align: right;">
          <button
            class="button"
            style="border: none;"
            :disabled="blog.next_blog_id === -1"
            @click="goBlogUrl(blog.next_blog_id)"
          >
            <span v-if="blog.next_blog_id === -1">没有啦</span>
            <span v-else>下一篇</span>
            <span class="icon">
              <i class="fas fa-chevron-right"></i>
            </span>
          </button>
        </div>
      </div>
      <table class="table is-fullwidth">
        <thead>
        <tr>
          <th style="text-align: left;">
            <span class="icon-text has-text-success-dark">
              <span class="icon">
                <i class="fas fa-book-open"></i>
              </span>
              <span>最新文章</span>
            </span>
          </th>
          <th></th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(item, index) in recent_list" :key="index">
          <th style="text-align: left;">
            <div class="amc_text">
                <span>
                  <a class="amc_router" @click="goBlogUrl(item.id)">{{item.blog_title}}</a>
                </span>
            </div>
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
    </div>
  </div>
</template>

<script>
import Blog from '@/model/blog'

export default {
  name: 'blog',
  data() {
    return {
      id: null,
      blog: null,
      recent_list: []
    }
  },
  created() {
    this.initPage()
  },
  watch: {
    '$route': ['initPage']
  },
  methods: {
    async initPage() {
      if (this.$route.query.comp) {
        this.id = this.$route.query.comp
      }
      await this._getBlogData()
      document.body.scrollTop = 0
      document.documentElement.scrollTop = 0
    },
    async _getBlogData() {
      try {
        const res = await Blog.getBlogById(this.id)
        this.blog = res
        document.getElementById('result').innerHTML = this.blog.blog_content
        document.title = `${this.blog.sort_name} | ${this.blog.blog_title}`
      } catch (error) {
        console.error('find error:', error)
      }
      const search_form = {
        keyWord: '',
        page: 0,
        count: 10
      }
      try {
        const res = await Blog.getBlogByPages(search_form)
        this.recent_list = res.items
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
@import '../assets/style/markdown.scss';
@import '../assets/style/element-variable.scss';
</style>
