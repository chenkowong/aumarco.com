<template>
  <div class="about">
    <div>
      <div class="timeline is-centered" v-for="(itm, idx) in timeline" :key="idx">
        <header class="timeline-header">
          <span class="tag is-badge-info" :class="{ 'is-medium': idx === 0 ? true : false }">{{ itm.title }}</span>
        </header>
        <div class="timeline-item is-grey-light" v-for="(item, index) in itm.line" :key="index">
          <div class="timeline-marker is-grey-light"></div>
          <div class="timeline-content">
            <p class="heading">{{item.date}}</p>
            <p>{{item.title}}</p>
            <figure>
              <iframe v-if="item.radio" class="has-ratio" width="100%" height="200" :src="item.path" frameborder="0"></iframe>
              <img
                v-else
                v-bind:src="item.path"
                width="100%"
                height="100%"
                @click="handleOpenImage(item.path)"
                style="border-radius: 8px;"
              >
            </figure>
          </div>
        </div>
      </div>
      <div class="timeline is-centered">
        <header class="timeline-header">
          <span class="tag is-medium is-badge-info">design by your daddy ;)</span>
        </header>
      </div>
    </div>
    <div class="modal" :class="{ 'is-active': image_modal }">
      <div class="modal-background"></div>
      <div class="modal-content">
        <p class="image is-fullheight">
          <img :src="review_image" alt="">
        </p>
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
      image_modal: false,
      review_image: null
    }
  },
  created() {
    this.handleInitTimeline()
  },
  methods: {
    async handleInitTimeline() {
      const res = await Timeline.getTimelineBySort(this.form)
      this.timeline = res.items
    },
    handleOpenImage(path) {
      this.review_image = path
      this.image_modal = true
      console.log('hello')
    },
    handleCloseImage() {
      this.image_modal = false
    }
  }
}
</script>

<style type="scss">
@import '../assets/style/element-variable.scss';
</style>
