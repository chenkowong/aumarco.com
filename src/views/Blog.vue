<template>
  <div class="blog">
    <div class="column is-6 is-offset-3" style="position: relative;">
      <loading v-if="loading"></loading>
      <h1 class="title is-4" v-if="blog">{{blog.blog_title}}</h1>
      <p v-if="blog">
        <span class="icon-text has-text-success-dark">
          <span>{{blog.create_time}}</span>
        </span>
<!--        <span>&nbsp;&nbsp;·&nbsp;&nbsp;</span>-->
<!--        <span class="icon-text has-text-success-dark">-->
<!--          <span># {{blog.sort_name}}</span>-->
<!--        </span>-->
        <span>&nbsp;&nbsp;·&nbsp;&nbsp;</span>
        <span class="icon-text has-text-success-dark">
          <span>{{blog.blog_views}} 阅读</span>
        </span>
        <span>&nbsp;&nbsp;·&nbsp;&nbsp;</span>
        <span class="icon-text has-text-success-dark">
          <span>{{blog.blog_comment_count}} 评论</span>
        </span>
      </p>
      <br />
      <figure v-if="blog">
        <img v-bind:src="blog.blog_cover" width="100%" height="100%">
      </figure>
      <br />
      <div id="result" class="markdown-body"></div>
      <div class="is-divider" style="margin-bottom: 0.8rem"></div>
      <div class="tags" v-if="blog" style="margin-bottom: 0px;">
        <span
          class="tag is-small"
          v-for="item in blog.sort"
          :key="item.sort_id"
          style="margin-top: 0rem;"
        ># {{item.sort_name}}</span>
      </div>
      <div class="is-divider" style="margin-top: 0.4rem"></div>
      <div class="columns is-mobile" v-if="false">
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
      <comment-info v-if="showComment" :id="id"></comment-info>
      <br />
      <h1 class="title is-5 has-text-success-dark" style="margin-bottom: 0;"># 最新文章</h1>
      <table class="table is-fullwidth amc_page">
        <thead>
        <tr>
          <th>
          </th>
          <th></th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(item, index) in recent_list" :key="index">
          <th style="text-align: left; width: 60%;">
            <div class="amc_text">
                <span>
                  <a class="amc_router amc_page" @click="goBlogUrl(item.id)">{{item.blog_title}}</a>
                </span>
            </div>
          </th>
          <td style="text-align: right; width: 40%;">
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
import CommentInfo from '@/components/layout/comment'
import Loading from '@/components/layout/loading'
import Blog from '@/model/blog'
import Visitor from '@/model/visitor'
import globalMixin from "@/mixin/global";

export default {
  name: 'blog',
  components: { CommentInfo, Loading },
  mixins: [globalMixin],
  data() {
    return {
      id: null,
      blog: null,
      recent_list: [],
      showComment: false
    }
  },
  created() {
    this.loading = true
    this.initPage()
  },
  watch: {
    '$route': ['initPage', 'registerVisitor'],
    'register_visitor': ['dispatchBlogVisitor']
  },
  methods: {
    async initPage() {
      if (this.$route.query.comp) {
        this.showComment = false
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
        document.title = `${this.blog.blog_title}`
        this.showComment = true
      } catch (error) {
        console.error('find error:', error)
      }
      const search_form = {
        keyWord: '',
        page: 0,
        count: 10,
        removeId: this.id || ''
      }
      this.recent_list = []
      try {
        const res = await Blog.getBlogByPages(search_form)
        res.items.forEach(item => {
          if (item.id.toString() !== this.id) this.recent_list.push(item)
        })
      } catch (error) {
        console.log(error)
      }
      this.loading = false
    },
    async dispatchBlogVisitor() {
      const vcip = JSON.parse(sessionStorage.getItem('vis')).cip
      try {
        await Visitor.dispatchBlogVisitor({
          blog_id: this.id,
          cip: vcip
        })
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

<style type="scss">
@import '../assets/style/markdown.scss';
@import '../assets/style/element-variable.scss';
</style>
