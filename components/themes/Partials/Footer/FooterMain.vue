<template>
  <footer id="contact" :class="footerClass">
    <div class="container">
      <slot name="footerContent"></slot>
    </div>
  </footer>
</template>
<script>
export default {
  name: 'FooterMain',
  props: ['footerClass']
}
</script>

<style scoped>
.container {
  color: #222222;
  font-size: 16px;
  font-family: 'Montserrat';
  font-weight: 500;
  line-height: 30px;
  word-wrap: break-word
}
</style>
