<template>
  <nav class="navbar has-shadow" role="navigation" aria-label="main navigation">
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

        <div class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link">
            {{ navDropdownName }}
          </a>

          <div class="navbar-dropdown is-boxed">
            <a class="navbar-item" v-for="(item, index) in navDropdownList" :key="index" @click="goWeb(item.url)">
              {{ item.name }}
            </a>
            <hr class="navbar-divider">
            <a class="navbar-item">
              Report an issue
            </a>
          </div>
        </div>
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
</template>

<script>
import logo from '@/assets/images/logo.png'
export default {
  data () {
    return {
      logo: logo,
      active: false,
      navLeftList: [{
        name: 'Home',
        path: '/'
      }, {
        name: 'Blogs',
        path: 'archives'
      }, {
        name: 'About',
        path: 'about'
      }],
      navDropdownName: 'Social',
      navDropdownList: [{
        name: 'Github',
        url: 'https://github.com/chenkowong'
      }, {
        name: 'Timeline',
        url: 'https://www.aumarco.com/timeline'
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

<style type="scss">
.navbar-item, .navbar-link {
  color: #45526b !important;
}
a.navbar-link::after {
  border-color: #257953 !important;
}
</style>
