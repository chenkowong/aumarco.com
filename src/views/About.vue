<template>
  <div class="about">
    <div class="column is-6 is-offset-3">
      <h1 class="title is-5 has-text-success-dark">A Full Stack Developer ☕️</h1>
      <div class="columns">
        <div class="column">
          <figure class="image is-128x128">
            <img v-bind:src="avatar" width="100%" height="100%" style="border-radius: 8px;">
          </figure>
        </div>
        <div class="column is-four-fifths">
          <p>
            <img src="https://img.shields.io/badge/OS-macOS-informational?style=flat-square&amp;logo=apple&amp;logoColor=white" alt="OS">
            <img src="https://img.shields.io/badge/OS-Linux-informational?style=flat-square&amp;logo=linux&amp;logoColor=white" alt="OS">
          </p>
          <p>
            <img src="https://img.shields.io/badge/Editor-IDEA-informational?style=flat-square&amp;logo=intellij-idea&amp;logoColor=white" alt="OS">
          </p>
          <p>
            <img src="https://img.shields.io/badge/-Java-rgb(1, 117, 194)?style=flat-square&amp;logo=java" alt="Java">&nbsp;
            <img src="https://img.shields.io/badge/-Dart-rgb(0, 115, 150)?style=flat-square&amp;logo=dart&amp;logoColor=ffffff" alt="Dart">&nbsp;
            <img src="https://img.shields.io/badge/-Node.js-rgb(51, 153, 51)?style=flat-square&amp;logo=node.js&amp;logoColor=ffffff" alt="Node.js">&nbsp;
            <img src="https://img.shields.io/badge/-HTML5-%23E44D27?style=flat-square&amp;logo=html5&amp;logoColor=ffffff" alt="HTML5">&nbsp;
            <img src="https://img.shields.io/badge/-CSS3-%231572B6?style=flat-square&amp;logo=css3" alt="CSS3">&nbsp;
            <img src="https://img.shields.io/badge/-JavaScript-%23F7DF1C?style=flat-square&amp;logo=javascript&amp;logoColor=000000&amp;labelColor=%23F7DF1C&amp;color=%23FFCE5A" alt="JavaScript">&nbsp;
            <img src="https://img.shields.io/badge/-Spring Boot-rgb(109, 179, 63)?style=flat-square&amp;logo=spring-boot&amp;logoColor=ffffff" alt="Spring Boot">&nbsp;
            <img src="https://img.shields.io/badge/-Flutter-rgb(2, 86, 155)?style=flat-square&amp;logo=flutter&amp;logoColor=ffffff" alt="Flutter">&nbsp;
            <img src="https://img.shields.io/badge/-Vue.js-%232c3e50?style=flat-square&amp;logo=Vue.js" alt="Vue.js">&nbsp;
            <img src="https://img.shields.io/badge/-MySQL-rgb(68, 121, 161)?style=flat-square&amp;logo=mysql&amp;logoColor=ffffff" alt="mysql">&nbsp;
            <img src="https://img.shields.io/badge/-Docker-rgb(36, 150, 237)?style=flat-square&amp;logo=docker&amp;logoColor=ffffff" alt="Docker">&nbsp;
            <img src="https://img.shields.io/badge/-NGINX-rgb(0, 150, 57)?style=flat-square&amp;logo=nginx&amp;logoColor=ffffff" alt="NGINX">&nbsp;
            <img src="https://img.shields.io/badge/-Webpack-%232C3A42?style=flat-square&amp;logo=webpack" alt="Webpack">&nbsp;
            <img src="https://img.shields.io/badge/-Git-%23F05032?style=flat-square&amp;logo=git&amp;logoColor=%23ffffff" alt="Git">&nbsp;
            <img src="https://img.shields.io/badge/-Sass-%23CC6699?style=flat-square&amp;logo=sass&amp;logoColor=ffffff" alt="Sass">&nbsp;
            <img src="https://img.shields.io/badge/-Stylus-%23333333?style=flat-square&amp;logo=stylus" alt="Stylus">
          </p>
        </div>
      </div>
      <span class="icon-text">
        <span class="icon">
          <i class="fas fa-eye"></i>
        </span>
        <span>{{visitor_count}}</span>
      </span>
      <span>&nbsp;&nbsp;|&nbsp;&nbsp;</span>
      <span>focus me on <a class="amc_router" href="https://github.com/chenkowong">Github</a>.</span>
      <br />
      <br />
      <h1 class="title is-5 has-text-success-dark">联系方式</h1>
      <div class="container">
        <span class="icon-text">
          <span class="icon">
            <i class="fas fa-user"></i>
          </span>
          <span>王晨光</span>
        </span>
      </div>
      <div class="container">
        <span class="icon-text">
          <span class="icon">
            <i class="fas fa-comments"></i>
          </span>
          <span>139-0604-1328</span>
        </span>
      </div>
      <div class="container">
        <span class="icon-text">
          <span class="icon">
            <i class="fas fa-envelope"></i>
          </span>
          <span>wcg@slywtech.com</span>
        </span>
      </div>
      <br />
      <br />
      <h1 class="title is-5 has-text-success-dark">擅长技能</h1>
      <div class="container">
        喝咖啡
        <progress class="progress is-small" value="100" max="100">15%</progress>
        后台管理系统开发
        <progress class="progress is-small is-danger" value="90" max="100">90%</progress>
        企业金蝶插件开发
        <progress class="progress is-small is-info" value="85" max="100">45%</progress>
        APP｜小程序｜公众号
        <progress class="progress is-small is-warning" value="75" max="100">75%</progress>
        Web｜网页开发
        <progress class="progress is-small is-success" value="90" max="100">60%</progress>
      </div>
      <br />
      <br />
      <div class="container markdown-body">
        <p>We are currently in the middle of the <em><strong>seismic shift</strong></em> already. Every single day we hear about <em><strong>one small leap</strong></em> that industry pioneers take in the field of technology.these small shifts, cumulatively in the future will be responsible for the 'eureka' moment in the era of technological revolution.And two most <em><strong>prominent</strong></em> players leading the <em><strong>bandwagon</strong></em> today are Google's Flutter and Fuchsia. They are <em><strong>the hydrogen fuel of renewable energy</strong></em>.</p>
      </div>
      <br />
      <br />
    </div>
  </div>
</template>

<script>
import avatar from '@/assets/images/old.jpeg'
import globalMixin from "@/mixin/global"

export default {
  mixins: [globalMixin],
  data () {
    return {
      avatar: avatar,
      visitor_count: null
    }
  }
}
</script>

<style type="scss">
@import '../assets/style/element-variable.scss';
</style>
