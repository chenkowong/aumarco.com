<template>
  <div class="blog">
    <div style="position: relative;">
      <loading v-if="loading"></loading>
      <div class="card-content">
        <div class="media">
          <div id="result" class="markdown-body media-content">
            <vue-markdown :toc="true" :source="letter"></vue-markdown>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Loading from '@/components/layout/loading'
import globalMixin from "@/mixin/global";
import VueMarkdown from 'vue-markdown'
import { get } from "@/model/axios";

export default {
  name: 'letter',
  components: { VueMarkdown, Loading },
  mixins: [globalMixin],
  data() {
    return {
      // api: 'http://localhost:8081/static/20211010.md',
      api: 'https://www.aumarco.com/static/20211010.md',
      letter: ''
    }
  },
  created() {
    this.initPage()
  },
  watch: {},
  methods: {
    async initPage() {
      this.loading = true
      try {
        const res = await get(this.api)
        this.letter = res
      } catch (e) {
        console.error(e)
      }
      this.loading = false
    }
  }
}
</script>

<style type="scss">
@import '../assets/style/markdown.scss';
@import '../assets/style/element-variable.scss';
</style>
