<template>
  <div>
    <Loader />
    <HeaderStyle1 :logo-img="logo" :nav-item-list="navItems" class-name="style-one" :styled-logo="styleLogo"/>
    <nuxt />
    <ScrollTop />
  </div>
</template>
<script>
import { menu, services, pages, landing1About, ourCases , blog } from '../config/constant.js'
import logoImg from '../assets/images/logo.png'
export default {
  name: 'Pages',
  data () {
    return {
      styleLogo: false,
      logo: logoImg,
      navItems: [
        { href: '/home#howitworks',
          title: 'How does this works?',
          children: true,
          child: [],
          classname: ''
        },
        { href: '/our-rates', title: 'Our rates', children: true, child: [], classname: ' ' },
        { href: '/photo-require', title: 'Photo requirements', children: true, child: [], classname: ' ' }
      ]
    }
  },
  mounted () {
  }
}
</script>
<style>
  @import url('../assets/css/style.css');
  @import url('../assets/css/responsive.css');
  @import url('../assets/css/all.min.css');
</style>
