<template>
  <div :class="cardClass">
    <div v-for="(item,index) in cardContent" :key="index" class="xamin-analytics wow fadeInUp text-left" >
      <div class="analytics-icon">
        <img :src="item.src" alt="fancybox">
      </div>
      <div class="analytics-detail">
        <h4 class="mb-1">{{ item.title }}</h4>
        <p class="mb-0">{{ item.subtitle }}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'FancyCard3',
  props: [ 'cardClass', 'cardContent']
}
</script>
