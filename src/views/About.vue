<template>
  <div class="about">
    <h1>This is an about page</h1>
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
        count: 10
      }
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
        console.log(res)
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>
