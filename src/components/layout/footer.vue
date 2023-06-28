<template>
  <div class="amc_page" :style="{ position: 'relative', fontSize: global_font_size }">
    <footer class="footer amc_table" :style="{ padding: '24px', maxWidth: '936px', margin: '0 auto' }">
      <div class="columns">
        <div class="column is-three-fifths has-text-centered">
          <p>©️2019-{{ current_year }} 王晨光
            <a class="amc_router" href="https://beian.miit.gov.cn/" target="_blank">闽ICP备20014107号</a>
          </p>
        </div>
        <div class="column has-text-centered">
          <div>
            <span><router-link to="/">Home</router-link></span>
            <span>&nbsp;&nbsp;|&nbsp;&nbsp;</span>
            <span><router-link to="/archives">Blogs</router-link></span>
            <span>&nbsp;&nbsp;|&nbsp;&nbsp;</span>
            <span><router-link to="/book">Books</router-link></span>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import globalMixin from "@/mixin/global";

export default {
  name: "amc-footer",
  mixins: [globalMixin],
  mounted() {
    this._getCurrentYear()
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/style/element-variable.scss';
</style>
