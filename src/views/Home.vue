<template>
  <div class="home">
    <div class="column is-6 is-offset-3">
      <div class="container">
        <div>
          最後，「王子和公主幸福的生活在一起」，便是童話的結尾，王子的冒險故事在此戛然而止。
          有一天，新的童話將為他們的孩子書寫。森林里傳來萬物的低語，為新王子的降臨祝福。
          而王子的父親，也許成為了人民愛戴的國王，也許變成了邪惡的巫師，深山里的惡龍，
          沒有人知道後來發生了什麼。
        </div>
        <br />
        <br />
      </div>
      <div class="container">
        <h2 class="subtitle">Recent</h2>
        <div class="columns" v-for="(item, index) in blog_list" :key="index">
          <div class="column is-one-third">
            <span style="color:grey;">{{item.create_time}}</span>
          </div>
          <div class="column">
            <span><a>{{item.blog_title}}</a></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Blog from '@/model/blog'

export default {
  name: 'Home',
  data () {
    return {
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
      console.log('get blogs')
      this.form.page = start
      this.form.count = pageCount
      try {
        const res = await Blog.getBlogByPages(this.form)
        this.blog_list = res.items
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>

<style type="scss" scoped>
@import '../assets/style/element-variable.scss';
</style>
