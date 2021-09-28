<template>
  <div class="about">
    <div class="column is-6 is-offset-3">
      <a href="https://github.com/chenkowong" class="github-corner amc_book_desktop" aria-label="View source on GitHub"><svg width="80" height="80" viewBox="0 0 250 250" style="fill:#151513; color:#fff; position: absolute; top: 0; border: 0; right: 0;" aria-hidden="true"><path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"></path><path d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2" fill="currentColor" style="transform-origin: 130px 106px;" class="octo-arm"></path><path d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z" fill="currentColor" class="octo-body"></path></svg></a>
      <figure>
        <img src="https://qn.aumarco.com/8a9962ed903a445ea137e5c74056c03c.jpg" width="100%" height="100%">
      </figure>
      <div class="card-content">
        <div class="media">
          <div class="media-left">
            <figure class="image is-96x96">
              <img v-bind:src="avatar" width="100%" height="100%">
            </figure>
          </div>
          <div class="media-content">
            <p class="title is-4">王晨光</p>
            <p class="subtitle is-6">@chenkowong</p>
            <p class="subtitle is-6">
              <span class="icon-text">
                <span class="icon"><i class="far fa-eye"></i></span>
                <span>{{visitor_count}}</span>
              </span>
              <span>&nbsp;&nbsp;·&nbsp;&nbsp;</span>
              <span class="icon-text">
                <a href="https://weibo.com/u/6772537580">
                  <span class="icon"><i class="fab fa-weibo"></i></span>
                </a>
              </span>
              <span>&nbsp;&nbsp;·&nbsp;&nbsp;</span>
              <span class="icon-text">
                <a href="https://github.com/chenkowong">
                  <span class="icon"><i class="fab fa-github"></i></span>
                </a>
              </span>
            </p>
          </div>
        </div>
        <div class="is-divider"></div>
        <p class="subtitle is-6">
        全栈开发工程师，独立工作者，擅长后台管理系统开发、企业金蝶插件开发、APP、小程序、公众号、网页设计开发。
        </p>
<!--        <p class="subtitle is-6">-->
<!--          <span>focus me on <a class="amc_router" href="https://github.com/chenkowong">Github</a>.</span>-->
<!--        </p>-->
      </div>
      <br />
      <br />
      <h1 class="title is-5 has-text-success-dark"># 擅长技能</h1>
      <div class="card-content">
        <div class="columns is-mobile">
          <div class="column is-6">后台管理系统</div>
          <div class="column is-6" style="text-align: right;">
              <span class="icon has-text-success">
                <i class="fas fa-star"></i>
              </span>
            <span class="icon has-text-success">
                <i class="fas fa-star"></i>
              </span>
            <span class="icon has-text-success">
                <i class="fas fa-star"></i>
              </span>
            <span class="icon has-text-success">
                <i class="fas fa-star"></i>
              </span>
            <span class="icon has-text-success">
                <i class="far fa-star"></i>
              </span>
          </div>
        </div>
        <div class="columns is-mobile">
          <div class="column is-6">企业金蝶插件</div>
          <div class="column is-6" style="text-align: right;">
              <span class="icon has-text-success">
                <i class="fas fa-star"></i>
              </span>
            <span class="icon has-text-success">
                <i class="fas fa-star"></i>
              </span>
            <span class="icon has-text-success">
                <i class="fas fa-star"></i>
              </span>
            <span class="icon has-text-success">
                <i class="fas fa-star"></i>
              </span>
            <span class="icon has-text-success">
                <i class="far fa-star"></i>
              </span>
          </div>
        </div>
        <div class="columns is-mobile">
          <div class="column is-6">移动端 · 小程序</div>
          <div class="column is-6" style="text-align: right;">
              <span class="icon has-text-success">
                <i class="fas fa-star"></i>
              </span>
            <span class="icon has-text-success">
                <i class="fas fa-star"></i>
              </span>
            <span class="icon has-text-success">
                <i class="fas fa-star"></i>
              </span>
            <span class="icon has-text-success">
                <i class="fas fa-star"></i>
              </span>
            <span class="icon has-text-success">
                <i class="far fa-star"></i>
              </span>
          </div>
        </div>
        <div class="columns is-mobile">
          <div class="column is-6">网站设计和搭建</div>
          <div class="column is-6" style="text-align: right;">
              <span class="icon has-text-success">
                <i class="fas fa-star"></i>
              </span>
            <span class="icon has-text-success">
                <i class="fas fa-star"></i>
              </span>
            <span class="icon has-text-success">
                <i class="fas fa-star"></i>
              </span>
            <span class="icon has-text-success">
                <i class="fas fa-star"></i>
              </span>
            <span class="icon has-text-success">
                <i class="far fa-star"></i>
              </span>
          </div>
        </div>
        <div class="columns is-mobile">
          <div class="column is-6">喝咖啡</div>
          <div class="column is-6" style="text-align: right;">
              <span class="icon has-text-success">
                <i class="fas fa-star"></i>
              </span>
            <span class="icon has-text-success">
                <i class="fas fa-star"></i>
              </span>
            <span class="icon has-text-success">
                <i class="fas fa-star"></i>
              </span>
            <span class="icon has-text-success">
                <i class="fas fa-star"></i>
              </span>
            <span class="icon has-text-success">
                <i class="fas fa-star"></i>
              </span>
          </div>
        </div>
      </div>
      <div class="columns card-content" v-if="false">
        <div class="column">
          <div class="columns is-mobile">
            <div class="column is-4">JAVA</div>
            <div class="column is-8" style="text-align: right;">
              <span class="icon has-text-success">
                <i class="fas fa-star"></i>
              </span>
              <span class="icon has-text-success">
                <i class="fas fa-star"></i>
              </span>
              <span class="icon has-text-success">
                <i class="fas fa-star"></i>
              </span>
              <span class="icon has-text-success">
                <i class="fas fa-star"></i>
              </span>
              <span class="icon has-text-success">
                <i class="far fa-star"></i>
              </span>
            </div>
          </div>
          <div class="columns is-mobile">
            <div class="column is-4">Dart</div>
            <div class="column is-8" style="text-align: right;">
              <span class="icon has-text-success">
                <i class="fas fa-star"></i>
              </span>
              <span class="icon has-text-success">
                <i class="fas fa-star"></i>
              </span>
              <span class="icon has-text-success">
                <i class="fas fa-star"></i>
              </span>
              <span class="icon has-text-success">
                <i class="far fa-star"></i>
              </span>
              <span class="icon has-text-success">
                <i class="far fa-star"></i>
              </span>
            </div>
          </div>
          <div class="columns is-mobile">
            <div class="column is-4">Nodejs</div>
            <div class="column is-8" style="text-align: right;">
              <span class="icon has-text-success">
                <i class="fas fa-star"></i>
              </span>
              <span class="icon has-text-success">
                <i class="fas fa-star"></i>
              </span>
              <span class="icon has-text-success">
                <i class="fas fa-star"></i>
              </span>
              <span class="icon has-text-success">
                <i class="fas fa-star"></i>
              </span>
              <span class="icon has-text-success">
                <i class="far fa-star"></i>
              </span>
            </div>
          </div>
          <div class="columns is-mobile">
            <div class="column is-4">JavaScript</div>
            <div class="column is-8" style="text-align: right;">
              <span class="icon has-text-success">
                <i class="fas fa-star"></i>
              </span>
              <span class="icon has-text-success">
                <i class="fas fa-star"></i>
              </span>
              <span class="icon has-text-success">
                <i class="fas fa-star"></i>
              </span>
              <span class="icon has-text-success">
                <i class="fas fa-star"></i>
              </span>
              <span class="icon has-text-success">
                <i class="far fa-star"></i>
              </span>
            </div>
          </div>
          <div class="columns is-mobile">
            <div class="column is-4">HTML5</div>
            <div class="column is-8" style="text-align: right;">
              <span class="icon has-text-success">
                <i class="fas fa-star"></i>
              </span>
              <span class="icon has-text-success">
                <i class="fas fa-star"></i>
              </span>
              <span class="icon has-text-success">
                <i class="fas fa-star"></i>
              </span>
              <span class="icon has-text-success">
                <i class="fas fa-star"></i>
              </span>
              <span class="icon has-text-success">
                <i class="fas fa-star"></i>
              </span>
            </div>
          </div>
          <div class="columns is-mobile">
            <div class="column is-4">MySQL</div>
            <div class="column is-8" style="text-align: right;">
              <span class="icon has-text-success">
                <i class="fas fa-star"></i>
              </span>
              <span class="icon has-text-success">
                <i class="fas fa-star"></i>
              </span>
              <span class="icon has-text-success">
                <i class="fas fa-star"></i>
              </span>
              <span class="icon has-text-success">
                <i class="fas fa-star"></i>
              </span>
              <span class="icon has-text-success">
                <i class="far fa-star"></i>
              </span>
            </div>
          </div>
          <div class="columns is-mobile">
            <div class="column is-4">NGINX</div>
            <div class="column is-8" style="text-align: right;">
              <span class="icon has-text-success">
                <i class="fas fa-star"></i>
              </span>
              <span class="icon has-text-success">
                <i class="fas fa-star"></i>
              </span>
              <span class="icon has-text-success">
                <i class="fas fa-star"></i>
              </span>
              <span class="icon has-text-success">
                <i class="far fa-star"></i>
              </span>
              <span class="icon has-text-success">
                <i class="far fa-star"></i>
              </span>
            </div>
          </div>
          <div class="columns is-mobile">
            <div class="column is-4">Stylus</div>
            <div class="column is-8" style="text-align: right;">
              <span class="icon has-text-success">
                <i class="fas fa-star"></i>
              </span>
              <span class="icon has-text-success">
                <i class="fas fa-star"></i>
              </span>
              <span class="icon has-text-success">
                <i class="fas fa-star"></i>
              </span>
              <span class="icon has-text-success">
                <i class="fas fa-star"></i>
              </span>
              <span class="icon has-text-success">
                <i class="fas fa-star"></i>
              </span>
            </div>
          </div>
        </div>
        <div class="column">
          <div class="columns is-mobile">
            <div class="column is-4">Springboot</div>
            <div class="column is-8" style="text-align: right;">
              <span class="icon has-text-success">
                <i class="fas fa-star"></i>
              </span>
              <span class="icon has-text-success">
                <i class="fas fa-star"></i>
              </span>
              <span class="icon has-text-success">
                <i class="fas fa-star"></i>
              </span>
              <span class="icon has-text-success">
                <i class="far fa-star"></i>
              </span>
              <span class="icon has-text-success">
                <i class="far fa-star"></i>
              </span>
            </div>
          </div>
          <div class="columns is-mobile">
            <div class="column is-4">Flutter</div>
            <div class="column is-8" style="text-align: right;">
              <span class="icon has-text-success">
                <i class="fas fa-star"></i>
              </span>
              <span class="icon has-text-success">
                <i class="fas fa-star"></i>
              </span>
              <span class="icon has-text-success">
                <i class="fas fa-star"></i>
              </span>
              <span class="icon has-text-success">
                <i class="far fa-star"></i>
              </span>
              <span class="icon has-text-success">
                <i class="far fa-star"></i>
              </span>
            </div>
          </div>
          <div class="columns is-mobile">
            <div class="column is-4">Vue.js</div>
            <div class="column is-8" style="text-align: right;">
              <span class="icon has-text-success">
                <i class="fas fa-star"></i>
              </span>
              <span class="icon has-text-success">
                <i class="fas fa-star"></i>
              </span>
              <span class="icon has-text-success">
                <i class="fas fa-star"></i>
              </span>
              <span class="icon has-text-success">
                <i class="fas fa-star"></i>
              </span>
              <span class="icon has-text-success">
                <i class="fas fa-star"></i>
              </span>
            </div>
          </div>
          <div class="columns is-mobile">
            <div class="column is-4">Webpack</div>
            <div class="column is-8" style="text-align: right;">
              <span class="icon has-text-success">
                <i class="fas fa-star"></i>
              </span>
              <span class="icon has-text-success">
                <i class="fas fa-star"></i>
              </span>
              <span class="icon has-text-success">
                <i class="fas fa-star"></i>
              </span>
              <span class="icon has-text-success">
                <i class="far fa-star"></i>
              </span>
              <span class="icon has-text-success">
                <i class="far fa-star"></i>
              </span>
            </div>
          </div>
          <div class="columns is-mobile">
            <div class="column is-4">CSS3</div>
            <div class="column is-8" style="text-align: right;">
              <span class="icon has-text-success">
                <i class="fas fa-star"></i>
              </span>
              <span class="icon has-text-success">
                <i class="fas fa-star"></i>
              </span>
              <span class="icon has-text-success">
                <i class="fas fa-star"></i>
              </span>
              <span class="icon has-text-success">
                <i class="fas fa-star"></i>
              </span>
              <span class="icon has-text-success">
                <i class="fas fa-star"></i>
              </span>
            </div>
          </div>
          <div class="columns is-mobile">
            <div class="column is-5">SQL Server</div>
            <div class="column is-7" style="text-align: right;">
              <span class="icon has-text-success">
                <i class="fas fa-star"></i>
              </span>
              <span class="icon has-text-success">
                <i class="fas fa-star"></i>
              </span>
              <span class="icon has-text-success">
                <i class="fas fa-star"></i>
              </span>
              <span class="icon has-text-success">
                <i class="far fa-star"></i>
              </span>
              <span class="icon has-text-success">
                <i class="far fa-star"></i>
              </span>
            </div>
          </div>
          <div class="columns is-mobile">
            <div class="column is-4">Git</div>
            <div class="column is-8" style="text-align: right;">
              <span class="icon has-text-success">
                <i class="fas fa-star"></i>
              </span>
              <span class="icon has-text-success">
                <i class="fas fa-star"></i>
              </span>
              <span class="icon has-text-success">
                <i class="fas fa-star"></i>
              </span>
              <span class="icon has-text-success">
                <i class="far fa-star"></i>
              </span>
              <span class="icon has-text-success">
                <i class="far fa-star"></i>
              </span>
            </div>
          </div>
          <div class="columns is-mobile">
            <div class="column is-4">Sass</div>
            <div class="column is-8" style="text-align: right;">
              <span class="icon has-text-success">
                <i class="fas fa-star"></i>
              </span>
              <span class="icon has-text-success">
                <i class="fas fa-star"></i>
              </span>
              <span class="icon has-text-success">
                <i class="fas fa-star"></i>
              </span>
              <span class="icon has-text-success">
                <i class="fas fa-star"></i>
              </span>
              <span class="icon has-text-success">
                <i class="fas fa-star"></i>
              </span>
            </div>
          </div>
        </div>
      </div>
      <h1 class="title is-5 has-text-success-dark" v-if="false"># 开发工具</h1>
      <div class="columns card-content" v-if="false">
        <div class="column">
          <div class="columns is-mobile">
            <div class="column is-4">IDEA</div>
            <div class="column is-8" style="text-align: right;">
              <span class="icon has-text-success">
                <i class="fas fa-star"></i>
              </span>
              <span class="icon has-text-success">
                <i class="fas fa-star"></i>
              </span>
              <span class="icon has-text-success">
                <i class="fas fa-star"></i>
              </span>
              <span class="icon has-text-success">
                <i class="fas fa-star"></i>
              </span>
              <span class="icon has-text-success">
                <i class="far fa-star"></i>
              </span>
            </div>
          </div>
        </div>
        <div class="column">
          <div class="columns is-mobile">
            <div class="column is-4">VStudio</div>
            <div class="column is-8" style="text-align: right;">
                <span class="icon has-text-success">
                  <i class="fas fa-star"></i>
                </span>
              <span class="icon has-text-success">
                  <i class="fas fa-star"></i>
                </span>
              <span class="icon has-text-success">
                  <i class="fas fa-star"></i>
                </span>
              <span class="icon has-text-success">
                  <i class="fas fa-star"></i>
                </span>
              <span class="icon has-text-success">
                  <i class="far fa-star"></i>
                </span>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <h1 class="title is-5 has-text-success-dark"># 联系方式</h1>
      <div class="card-content">
        <span class="icon-text">
          <span class="icon">
            <i class="far fa-envelope"></i>
          </span>
          <span><a class="amc_router" href="mailto: wcg@slywtech.com">wcg@slywtech.com</a></span>
        </span>
      </div>
      <div class="columns" v-if="false">
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
      <div class="is-divider"></div>
      <comment-info :id="'1'"></comment-info>
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
import CommentInfo from "@/components/layout/comment";
import Loading from "@/components/layout/loading";

export default {
  components: { CommentInfo, Loading },
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
