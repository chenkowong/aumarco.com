<template>
  <div id="app">
    <navbar></navbar>
    <div class="column" :style="{ maxWidth: '618px', margin: '0 auto', paddingTop: '72px' }">
      <router-view/>
    </div>
    <div>
      <amc-footer></amc-footer>
    </div>
  </div>
</template>

<script>
import navbar from '@/components/layout/navbar.vue'
import amcFooter from '@/components/layout/footer'

export default {
  components: {
    navbar, amcFooter
  }
}
</script>

<style lang="scss">
html {
  background-color: #f7f6f4;
}
</style>
