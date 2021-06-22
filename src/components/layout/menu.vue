<template>
  <aside class="menu">
    <p class="menu-label"></p>
    <ul class="menu-list" v-for="(item, index) in tmepListDatas" :key="index">
      <li><a @click="handleChangeMenu(item)">{{item.name}}</a></li>
    </ul>
  </aside>
</template>

<script>
export default {
  data () {
    return {
      tmepListDatas: []
    }
  },
  created () {
    const filesMD = require.context('@/../public/static', true, /\.md$/)
    const filesMDNames = filesMD.keys()
    filesMDNames.map((item) => {
      const listObj = {}
      const listItemS = item.split('/')
      if (listItemS.length > 0) {
        listObj.name = listItemS[1].replace('.md', '')
        listObj.path = item
        listObj.children = []
        listObj.showChild = false
      }
      return this.tmepListDatas.push(listObj)
    })
    console.log(this.tmepListDatas)
    console.log(this.sourceUrl)
  },
  methods: {
    handleChangeMenu (item) {
      this.$router.push({
        path: '/blog',
        query: {
          name: item.name
        }
      })
    }
  }
}

</script>
<style scoped="sass">
</style>
