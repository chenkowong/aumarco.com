<template>
  <div id="app">
    <div class="column is-8 is-offset-2">
      <navbar></navbar>
    </div>
    <router-view/>
    <div class="column is-8 is-offset-2">
      <footer class="footer is-white">
        Copyright ©️2019-2021 王晨光 闽ICP备20014107号
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
</style>
