<template>
  <div id="app">
    <div class="column is-8 is-offset-2">
      <navbar></navbar>
    </div>
    <router-view/>
    <div class="column is-8 is-offset-2">
      <footer class="footer is-white" style="padding: 24px;">
        <div class="columns">
          <div class="column is-three-fifths has-text-centered">
            <p style="font-size:14px;">©️2019-2021 王晨光
              <a class="amc_router" href="https://beian.miit.gov.cn/" target="_blank">闽ICP备20014107号</a>
            </p>
          </div>
          <div class="column has-text-centered">
            <div style="font-size:14px;">
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
  </div>
</template>

<script>
import navbar from '@/components/layout/navbar.vue'

export default {
  components: {
    navbar
  }
}
</script>

<style lang="scss">
a {
  color: #45526b;
}
</style>
