<template>
  <div class="footer-logo-mobile">
    <div class="footer-logo"><img :src="sectionImage" style="margin-top: 5px;" width="213" alt="#"></div>
    <div class="menu-footer-menu-container">
      <ul class="menu">
        <li v-for="(list, value) in content1" :key="value" class="menu-item">
          <nuxt-link :to="list.href">{{ list.title }}</nuxt-link>
        </li>
      </ul>
    </div>
    <img :src="line" alt="">
    <div class="menu-footer-menu-container">
      <ul class="menu">
        <li v-for="(list, value) in content2" :key="value" class="menu-item">
          <nuxt-link :to="list.href">{{ list.title }}</nuxt-link>
        </li>
      </ul>
    </div>
    <img :src="line" alt="">
    <div class="menu-footer-menu-container">
      <ul class="menu">
        <li v-for="(list, value) in content3" :key="value" class="menu-item">
          <nuxt-link :to="list.href">{{ list.title }}</nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: 'FooterLogo',
  // eslint-disable-next-line vue/require-prop-types
  props: ['sectionImage', 'sectionText', 'content1', 'content2', 'content3', 'line']
}
</script>
<style scoped>
.menu li a {
  color: #222222;
  font-size: 16px;
  font-family: 'Montserrat';
  font-weight: 500;
  line-height: 30px;
  word-wrap: break-word
}
.footer-logo {
  margin-top: 10px;
  margin-bottom: 50px;
}
</style>