<template>
  <div class="nav flex-column nav-pills mb-5 widget widget_nav_menu">
    <nuxt-link v-for="(item,index) in cardMenu" :to="item.href" :key="index" :class="item.class">
      {{ item.title }}
    </nuxt-link>
  </div>
</template>
<script>
export default {
  name:'CardStyle5',
  props:['cardMenu']
}
</script>