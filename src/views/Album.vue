<template>
  <div class="album">
    <div class="column is-6 is-offset-3">
      <div class="media">
        <div class="media-left">
          <figure class="image is-96x96">
            <img class="is-rounded" src="https://qn.aumarco.com/brian.gif" alt="Placeholder image">
          </figure>
        </div>
        <div class="media-content">
          <p class="title is-4">王博恩 @brianwong</p>
          <p class="subtitle is-6">Mommy and Daddy love you forever :D</p>
        </div>
      </div>
      <br />
      <div class="columns is-gapless is-multiline is-mobile">
        <div class="column is-one-third" v-for="(item, index) in timeline" :key="index">
          <div
            class="image is-square"
            @click="handleOpenImage(item)"
            :style="{
                backgroundImage: 'url(' + item.path + ')',
                backgroundSize: '100%',
                cursor: 'pointer',
                margin: '1.4px'
              }"
          >
          </div>
          <!--            <figure class="image is-128x128">-->
          <!--              <iframe v-if="item.radio" class="has-ratio" :src="item.path" frameborder="0"></iframe>-->
          <!--              <img-->
          <!--                v-else-->
          <!--                v-bind:src="item.path"-->
          <!--                width="100%"-->
          <!--                height="100%"-->
          <!--                @click="handleOpenImage(item.path)"-->
          <!--              >-->
          <!--            </figure>-->
        </div>
      </div>
      <button
        v-if="showButton"
        class="button is-small is-fullwidth"
        @click="getMorePhotos"
      >加载更多</button>
      <button
        v-else
        class="button is-small is-fullwidth"
        title="Disabled button"
        disabled
      >没有更多照片啦</button>
    </div>
    <div class="modal" :class="{ 'is-active': image_modal }">
      <div class="modal-background"></div>
      <div class="modal-card" @click="handleCloseImage">
        <p class="image is-fullheight" style="position:relative;">
          <img :src="review_image" alt="">
        </p>
        <div
          v-if="review_title"
          class="card-content"
          style="position: absolute; bottom: 0; left: 0; right: 0; border-radius: 0px; background: rgba(0,0,0,0.2); color: #ffffff;"
        >
          {{ review_title.date }}&nbsp;&nbsp;&nbsp;{{ review_title.title }}
        </div>
      </div>
      <button class="modal-close is-large" aria-label="close" @click="handleCloseImage"></button>
    </div>
  </div>
</template>

<script>
import Timeline from '@/model/timeline'

export default {
  name: "Timeline",
  data() {
    return {
      form: {
        keyWord: '',
        parentId: 0,
        page: 0,
        count: 20
      },
      timeline: [],
      total: null,
      image_modal: false,
      review_image: null,
      review_title: null,
      showButton: true
    }
  },
  created() {
    this.handleInitTimeline()
  },
  methods: {
    async handleInitTimeline() {
      const res = await Timeline.getTimelineWithoutSort(this.form)
      this.total = res.total
      if (res.items.length !== 0) {
        res.items.forEach(item => {
          this.timeline.push(item)
          if (this.timeline.length === this.total) this.showButton = false
          else this.showButton = true
        })
      } else {
        this.showButton = false
      }
    },
    async getMorePhotos() {
      const next_page = this.form.page + 1
      await this.handleInitTimeline(next_page, 20)
    },
    handleOpenImage(item) {
      this.review_image = item.path
      this.review_title = item
      this.image_modal = true
    },
    handleCloseImage() {
      this.image_modal = false
    }
  }
}
</script>

<style type="scss">
@import '../assets/style/element-variable.scss';
.album {
  user-select: none;
}
</style>
