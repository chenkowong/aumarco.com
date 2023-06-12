<template>
  <div class="amc_page" :style="{ position: 'relative', fontSize: global_font_size }">
    <nav
      class="navbar has-shadow is-fixed-top"
      role="navigation"
      aria-label="main navigation"
      :style="{ maxWidth: '936px', margin: '0 auto' }">
      <div class="navbar-brand">
        <a class="navbar-item" href="https://www.aumarco.com">
          <img :src="logo" width="136" height="52">
        </a>

        <a
          role="button"
          class="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
          @click="active = !active"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" class="navbar-menu" :class="{'is-active': active }">
        <div class="navbar-start">
          <a class="navbar-item" v-for="(item, index) in navLeftList" :key="index" @click="goUrl(item.path)">
            {{ item.name }}
          </a>
        </div>
        <!-- <div class="navbar-end">
          <div class="navbar-item">
            <div class="buttons">
              <a class="button is-primary">
                <strong>Sign up</strong>
              </a>
              <a class="button is-light">
                Log in
              </a>
            </div>
          </div>
        </div> -->
      </div>
    </nav>
  </div>
</template>

<script>
import logo from '@/assets/images/logo.png'
import globalMixin from "@/mixin/global";
export default {
  name: 'navbar',
  mixins: [globalMixin],
  data () {
    return {
      logo: logo,
      active: false,
      navLeftList: [{
        name: '首页',
        path: '/'
      }, {
        name: '文章',
        path: 'archives'
      }, {
        name: '书单',
        path: 'book'
      },
      // {
      //   name: '相册',
      //   path: 'album'
      // },
      {
        name: '关于',
        path: 'about'
      }],
      navDropdownName: 'Social',
      navDropdownList: [{
        name: 'Github',
        url: 'https://github.com/chenkowong'
      }]
    }
  },
  methods: {
    goUrl(name) {
      this.$router.push({
        path: name
      })
      this.active = false
    },
    goWeb(url) {
      window.open(url)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/style/element-variable.scss';
.navbar-item, .navbar-link {
  color: #45526b !important;
}
a.navbar-link::after {
  border-color: #257953 !important;
}
</style>
