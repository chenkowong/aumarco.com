<template>
  <div>
    <article class="media" v-if="selectedIndex === null">
      <figure class="media-left">
        <p class="image is-64x64">
          <img :src="avator">
        </p>
      </figure>
      <div class="media-content">
        <div class="field">
          <p class="control">
            <textarea class="textarea is-normal" v-model="form.comment" placeholder="说说你的想法吧 .."></textarea>
          </p>
        </div>
        <div class="field is-grouped amc_book_desktop">
          <p class="control is-expanded has-icons-left">
            <input class="input" type="text" v-model="form.name" placeholder="输入你的昵称">
            <span class="icon is-small is-left">
              <i class="fas fa-user"></i>
            </span>
          </p>
          <p class="control is-expanded has-icons-left">
            <input class="input" type="email" v-model="form.email" placeholder="输入你的邮箱地址">
            <span class="icon is-small is-left">
              <i class="fas fa-envelope"></i>
            </span>
          </p>
          <p class="control">
            <button class="button" @click="submitForm">发&nbsp;&nbsp;&nbsp;布</button>
          </p>
        </div>
        <div class="field amc_book_mobile">
          <p class="control is-expanded has-icons-left">
            <input class="input is-small" type="text" v-model="form.name" placeholder="输入你的昵称">
            <span class="icon is-small is-left">
              <i class="fas fa-user"></i>
            </span>
          </p>
        </div>
        <div class="field amc_book_mobile">
          <p class="control is-expanded has-icons-left">
            <input class="input is-small" type="email" v-model="form.email" placeholder="输入你的邮箱地址">
            <span class="icon is-small is-left">
              <i class="fas fa-envelope"></i>
            </span>
          </p>
        </div>
        <div class="field amc_book_mobile">
          <p class="control">
            <button class="button is-small is-fullwidth" @click="submitForm">发&nbsp;&nbsp;&nbsp;布</button>
          </p>
        </div>
      </div>
    </article>
    <article class="media" v-for="(item, index) in comment_list" :key="item.id">
      <figure class="media-left">
        <p class="image is-64x64">
          <img :src="avator">
        </p>
      </figure>
      <div class="media-content">
        <div class="content">
          <p>
            <strong>{{ item.name }}</strong>
            <br>
            <template v-if="item.reply">@{{ item.reply }} </template>{{ item.comment }}
            <br>
            <small>
              <a class="has-text-danger-dark" v-if="selectedIndex === index && selectedIdx === null" @click.stop="handleSelect(null, null)">取消回复</a>
              <a class="has-text-success-dark" v-else @click.stop="handleSelect(index, null)">回复</a> · {{ item.create_time }}
            </small>
          </p>
        </div>
        <article class="media" v-if="selectedIndex === index && selectedIdx === null">
          <figure class="media-left">
            <p class="image is-64x64">
              <img :src="avator">
            </p>
          </figure>
          <div class="media-content">
            <div class="field">
              <p class="control">
                <textarea class="textarea" v-model="form.comment" placeholder="说说你的想法吧 .."></textarea>
              </p>
            </div>
            <div class="field is-grouped amc_book_desktop">
              <p class="control is-expanded has-icons-left">
                <input class="input" type="text" v-model="form.name" placeholder="输入你的昵称">
                <span class="icon is-small is-left">
                  <i class="fas fa-user"></i>
                </span>
                  </p>
                  <p class="control is-expanded has-icons-left">
                    <input class="input" type="email" v-model="form.email" placeholder="输入你的邮箱地址">
                    <span class="icon is-small is-left">
                  <i class="fas fa-envelope"></i>
                </span>
              </p>
              <p class="control">
                <button class="button" @click="submitForm">发&nbsp;&nbsp;&nbsp;布</button>
              </p>
            </div>
            <div class="field amc_book_mobile">
              <p class="control is-expanded has-icons-left">
                <input class="input is-small" type="text" v-model="form.name" placeholder="输入你的昵称">
                <span class="icon is-small is-left">
              <i class="fas fa-user"></i>
            </span>
              </p>
            </div>
            <div class="field amc_book_mobile">
              <p class="control is-expanded has-icons-left">
                <input class="input is-small" type="email" v-model="form.email" placeholder="输入你的邮箱地址">
                <span class="icon is-small is-left">
              <i class="fas fa-envelope"></i>
            </span>
              </p>
            </div>
            <div class="field amc_book_mobile">
              <p class="control">
                <button class="button is-small is-fullwidth" @click="submitForm">发&nbsp;&nbsp;&nbsp;布</button>
              </p>
            </div>
          </div>
        </article>

        <article class="media" v-for="(itm, idx) in item.children" :key="itm.id">
          <figure class="media-left">
            <p class="image is-48x48">
              <img :src="avator">
            </p>
          </figure>
          <div class="media-content">
            <div class="content">
              <p>
                <strong>{{ itm.name }}</strong>
                <br>
                <template v-if="itm.reply">@{{ itm.reply }} </template>{{ itm.comment }}
                <br>
                <small>
                  <a class="has-text-danger-dark" v-if="selectedIndex === index && selectedIdx === idx" @click="handleSelect(null, null)">取消回复</a>
                  <a class="has-text-success-dark" v-else @click="handleSelect(index, idx)">回复</a> · {{ itm.create_time }}
                </small>
              </p>
            </div>
            <article class="media" v-if="selectedIndex === index && selectedIdx === idx">
              <figure class="media-left">
                <p class="image is-64x64">
                  <img :src="avator">
                </p>
              </figure>
              <div class="media-content">
                <div class="field">
                  <p class="control">
                    <textarea class="textarea" v-model="form.comment" placeholder="说说你的想法吧 .."></textarea>
                  </p>
                </div>
                <div class="field is-grouped amc_book_desktop">
                  <p class="control is-expanded has-icons-left">
                    <input class="input" type="text" v-model="form.name" placeholder="输入你的昵称">
                    <span class="icon is-small is-left">
                    <i class="fas fa-user"></i>
                  </span>
                  </p>
                  <p class="control is-expanded has-icons-left">
                    <input class="input" type="email" v-model="form.email" placeholder="输入你的邮箱地址">
                    <span class="icon is-small is-left">
                    <i class="fas fa-envelope"></i>
                  </span>
                  </p>
                  <p class="control">
                    <button class="button" @click="submitForm">发&nbsp;&nbsp;&nbsp;布</button>
                  </p>
                </div>
                <div class="field amc_book_mobile">
                  <p class="control is-expanded has-icons-left">
                    <input class="input is-small" type="text" v-model="form.name" placeholder="输入你的昵称">
                    <span class="icon is-small is-left">
                    <i class="fas fa-user"></i>
                    </span>
                          </p>
                        </div>
                        <div class="field amc_book_mobile">
                          <p class="control is-expanded has-icons-left">
                            <input class="input is-small" type="email" v-model="form.email" placeholder="输入你的邮箱地址">
                            <span class="icon is-small is-left">
                      <i class="fas fa-envelope"></i>
                    </span>
                  </p>
                </div>
                <div class="field amc_book_mobile">
                  <p class="control">
                    <button class="button is-small is-fullwidth" @click="submitForm">发&nbsp;&nbsp;&nbsp;布</button>
                  </p>
                </div>
              </div>
            </article>
          </div>
        </article>
      </div>
    </article>
    <br />
    <button
      v-if="showButton"
      class="button is-small is-fullwidth"
      @click="getMoreComments"
    >加载更多</button>
    <button
      v-else
      class="button is-small is-fullwidth"
      title="Disabled button"
      disabled
    >没有更多评论啦</button>
    <br />
  </div>
</template>

<script>
import avator from '@/assets/images/avator.gif'
import Blog from '@/model/blog'

export default {
  name: "comment.vue",
  props: {
    id: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      avator: avator,
      search_form: {
        page: 0,
        count: 10,
        blogId: '',
        parentId: 0,
        start: '',
        end: ''
      },
      form: {
        blog_id: '',
        name: '',
        email: '',
        website: '',
        comment: '',
        reply: '',
        parent_id: 0
      },
      comment_list: [],
      comment_total: null,
      showButton: true,
      selectedIndex: null,
      selectedIdx: null
    }
  },
  async created() {
    this.search_form.blogId = this.id
    await this._getCommentsByBlogId(0, 10)
  },
  mounted() {
    this.form.blog_id = this.id
  },
  methods: {
    async _getCommentsByBlogId(start, pageCount) {
      this.search_form.page = start
      this.search_form.count = pageCount
      try {
        const res = await Blog.getCommentsByPages(this.search_form)
        this.comment_total = res.total
        if (res.items.length !== 0) {
          res.items.forEach(item => {
            this.comment_list.push(item)
            if (this.comment_list.length === this.comment_total) this.showButton = false
            else this.showButton = true
          })
        } else {
          this.showButton = false
        }
      } catch (e) {
        console.error(e)
      }
    },
    async getMoreComments() {
      const next_page = this.form.page + 1
      await this._getCommentsByBlogId(next_page, 20)
    },
    async handleSelect(index, idx) {
      this.selectedIndex = index
      this.selectedIdx = idx
    },
    async submitForm() {
      if (this.selectedIndex !== null) {
        this.form.parent_id = this.comment_list[this.selectedIndex].id
        if (this.selectedIdx !== null) this.form.reply = this.comment_list[this.selectedIndex].children[this.selectedIdx].name
        else this.form.reply = this.comment_list[this.selectedIndex].name
      }
      try {
        const res = await Blog.createComment(this.form)
        if (res.code < 9998) {
          this.$message.success(`${res.message}`)
          this.comment_list = []
          this.selectedIndex = null
          this.form.name = ''
          this.form.email = ''
          this.form.parent_id = 0
          this.form.comment = ''
          await this._getCommentsByBlogId(0, 10)
        }
      } catch (e) {
        console.error(e)
      }
    }
  }
}
</script>

<style type="scss">
@import '../../assets/style/element-variable.scss';
</style>
