<template>
  <div id="back-to-top" style="display: none;">
    <a id="top" href="javascript:void(0)" class="top" @click="scrollTop()"> <i class="ion-ios-arrow-up" /> </a>
  </div>
</template>
<script>
export default {
  name: 'ScrollTop',
  methods: {
    scrollTop () {
      window.jQuery('body,html').animate({
        scrollTop: 0
      }, 800)
    }
  }
}
</script>
