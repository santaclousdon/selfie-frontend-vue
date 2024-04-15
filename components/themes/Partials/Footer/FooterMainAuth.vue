<template>
  <footer id="contact" :class="footerClass">
    <div class="container-fluid container-mobile">
      <slot name="footerContent"></slot>
    </div>
  </footer>
</template>
<script>
export default {
  name: 'FooterMainAuth',
  props: ['footerClass']
}
</script>

<style scoped>
.container-fluid {
  color: #222222;
  font-size: 16px;
  font-family: 'Montserrat';
  font-weight: 500;
  line-height: 30px;
  word-wrap: break-word
}
</style>
