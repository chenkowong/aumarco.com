<template>
  <div class="blog">
    <div class="column is-6 is-offset-3">
      <h1 class="title" v-if="blog">{{blog.blog_title}}</h1>
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
      <div id="result" class="markdown-body"></div>
      <br />
      <button
        class="button is-small is-fullwidth"
        title="Disabled button"
        disabled
      >已经到最底啦</button>
      <br />
      <div class="columns is-mobile">
        <div class="column is-half-desktop">
          <span class="icon-text">
            <span class="icon">
              <i class="fas fa-chevron-left"></i>
            </span>
            <span>上一篇</span>
          </span>
        </div>
        <div class="column is-half-desktop" style="text-align: right;">
          <span class="icon-text">
            <span>下一篇</span>
            <span class="icon">
              <i class="fas fa-chevron-right"></i>
            </span>
          </span>
        </div>
      </div>
      <table class="table is-fullwidth">
        <thead>
          <tr>
            <th>
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
    if (this.$route.query.comp) {
      console.log(this.$route.query.comp)
      this.id = this.$route.query.comp
      this._getBlogData()
    }
  },
  methods: {
    async _getBlogData() {
      try {
        const res = await Blog.getBlogById(this.id)
        this.blog = res
        document.getElementById('result').innerHTML = this.blog.blog_content
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
    }
  }
}
</script>

<style type="scss" scoped>
@import '../assets/style/markdown.scss';
@import '../assets/style/element-variable.scss';
</style>
