<template>
  <div class="home amc_page">
    <div class="column is-6 is-offset-3">
      <div class="container">
        <figure>
          <img v-bind:src="background" width="100%" height="100%">
        </figure>
        <br />
        <div>
          「 社会时常都在发生巨变，这自然会让我们好奇究竟下一次巨变会是什么样子。
          过去二十年移动手机或智能手机曾经独占鳌头那接下来的二十年这将会被物联网所取代。
          我们其实已经在物联网这个巨变中了, 每一天我们都在听闻某某行业先锋又在技术领域领先了一小步。
          这些小变化慢慢积累起来，逐渐成为未来的科技大爆炸 」🚀🚀🚀
        </div>
        <br />
        <br />
      </div>
      <div class="container">
        <h1 class="title has-text-success-dark is-5"># 最新文章</h1>
        <div
          class="card"
          v-if="blog_recent_top"
          style="cursor:pointer; box-shadow:  none;"
          @click="goBlogUrl(blog_recent_top.id)"
        >
          <div class="card-image" style="position:relative;">
            <div
              class="image is-2by1"
              :style="{
                backgroundImage: 'url(' + blog_recent_top.blog_cover + ')',
                backgroundSize: '100%'
              }"
            >
            </div>
<!--            <figure class="image is-2by1">-->
<!--              <img-->
<!--                :style="{-->
<!--                  backgroundImage: 'url(' + blog_recent_top.blog_cover + ')',-->
<!--                  backgroundSize: '100%',-->
<!--                  backgroundColor: 'red'-->
<!--                }"-->
<!--              >-->
<!--            </figure>-->
          </div>
          <div
            class="card-content"
            style="position: absolute; bottom: 0; left: 0; right: 0; border-radius: 0px; background: rgba(255,255,255,0.8)"
          >
            <div class="content columns is-mobile">
              <div class="column is-9 amc_text">
<!--                <span>{{blog_recent_top.sort_name}}</span>-->
<!--                <span>&nbsp;&nbsp;|&nbsp;&nbsp;</span>-->
                <span>{{blog_recent_top.blog_title}}</span>
              </div>
              <div class="column is-3" style="text-align: right;">
                <span class="icon-text">
                  <span></span>
                  <span class="icon">
                    <i class="fas fa-chevron-right"></i>
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
        <div class="columns is-mobile" v-for="(item, index) in blog_recent_list" :key="index">
          <div class="column is-8 amc_column amc_text">
            <span>
              <a class="amc_router" @click="goBlogUrl(item.id)">{{item.blog_title}}</a>
            </span>
          </div>
          <div class="column is-4 amc_column" style="text-align: right;">
            <span style="color:grey;">{{item.create_time}}</span>
          </div>
        </div>
        <br />
        <br />
        <h1 class="title has-text-success-dark is-5"># 我喜欢的</h1>
        <div
          class="card"
          v-if="blog_ilike_top"
          style="cursor:pointer; box-shadow:  none;"
          @click="goBlogUrl(blog_ilike_top.id)"
        >
          <div class="card-image" style="position:relative;">
            <div
              class="image is-2by1"
              :style="{
                backgroundImage: 'url(' + blog_ilike_top.blog_cover + ')',
                backgroundSize: '100%'
              }"
            >
            </div>
          </div>
          <div
            class="card-content"
            style="position: absolute; bottom: 0; left: 0; right: 0; border-radius: 0px; background: rgba(255,255,255,0.8)"
          >
            <div class="content columns is-mobile">
              <div class="column is-9 amc_text">
                <!--                <span>{{blog_recent_top.sort_name}}</span>-->
                <!--                <span>&nbsp;&nbsp;|&nbsp;&nbsp;</span>-->
                <span>{{blog_ilike_top.blog_title}}</span>
              </div>
              <div class="column is-3" style="text-align: right;">
                <span class="icon-text">
                  <span></span>
                  <span class="icon">
                    <i class="fas fa-chevron-right"></i>
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
        <div class="columns is-mobile" v-for="item in blog_ilike_list" :key="item.id">
          <div class="column is-8 amc_column amc_text">
            <span>
              <a class="amc_router" @click="goBlogUrl(item.id)">{{item.blog_title}}</a>
            </span>
          </div>
          <div class="column is-4 amc_column" style="text-align: right;">
            <span style="color:grey;">{{item.create_time}}</span>
          </div>
        </div>
        <br />
        <br />
        <div
          class="card"
          v-if="blog_ifocus"
          style="cursor:pointer; box-shadow:  none;"
          @click="goBlogUrl(blog_ifocus.id)"
        >
          <div class="card-image" style="position:relative;">
            <div
              class="image is-2by1"
              :style="{
                backgroundImage: 'url(' + blog_ifocus.blog_cover + ')',
                backgroundSize: '100%'
              }"
            >
            </div>
          </div>
          <div
            class="card-content"
            style="position: absolute; bottom: 0; left: 0; right: 0; border-radius: 0px; background: rgba(255,255,255,0.8)"
          >
            <div class="content columns is-mobile">
              <div class="column is-9 amc_text">
                <!--                <span>{{blog_recent_top.sort_name}}</span>-->
                <!--                <span>&nbsp;&nbsp;|&nbsp;&nbsp;</span>-->
                <span>{{blog_ifocus.blog_title}}</span>
              </div>
              <div class="column is-3" style="text-align: right;">
                <span class="icon-text">
                  <span></span>
                  <span class="icon">
                    <i class="fas fa-chevron-right"></i>
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
      </div>
    </div>
  </div>
</template>

<script>
import Blog from '@/model/blog'
import background from '@/assets/images/ilike.gif'
import globalMixin from "@/mixin/global";

export default {
  name: 'Home',
  mixins: [globalMixin],
  data () {
    return {
      background: background,
      form: {
        keyWord: '',
        page: 0,
        count: 10
      },
      blog_recent_top: null,
      blog_recent_list: [],
      blog_ilike_top: null,
      blog_ilike_list: [],
      blog_ifocus: null,
      blog_version: null
    }
  },
  created () {
    this._getRecentBlog(0, 10)
    this._getIlikeBlog(0, 10, 7)
    this._getSingleBlog()
  },
  methods: {
    async _getRecentBlog (start, pageCount) {
      this.form.page = start
      this.form.count = pageCount
      try {
        const res = await Blog.getBlogByPages(this.form)
        res.items.forEach((item, index) => {
          if (index === 0) this.blog_recent_top = item
          else this.blog_recent_list.push(item)
        })
      } catch (error) {
        console.error(error)
      }
    },
    async _getIlikeBlog (start, pageCount, sortId) {
      try {
        const res = await Blog.getBlogBySortId({
          page: start,
          count: pageCount,
          sort_id: sortId
        })
        res.items.forEach((item, index) => {
          if (index === 0) this.blog_ilike_top = item
          else this.blog_ilike_list.push(item)
        })
      } catch (error) {
        console.error(error)
      }
    },
    async _getSingleBlog() {
      try {
        const ifocus = await Blog.getBlogById(6)
        this.blog_ifocus = ifocus
        // const version = await Blog.getBlogById(10)
        // this.blog_version = version
      } catch (error) {
        console.error(error)
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
@import '../assets/style/element-variable.scss';
</style>
