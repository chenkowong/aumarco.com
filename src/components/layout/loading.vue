<template>
  <div class="loading_page" :style="{ height: screenheight, lineHeight: screenheight }">
    <div class="loading_content">
      <div class="control is-large is-loading" style="width:32px; height:32px;"></div>
    </div>
  </div>
</template>

<script>
import globalMixin from "@/mixin/global";
export default {
  name: "Loading",
  mixins: [globalMixin],
}
</script>

<style type="scss" scoped>
.loading_page {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.6);
  text-align: center;
}
.loading_content {
  display: inline-block;
}
</style>
