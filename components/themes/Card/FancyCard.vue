<template>
  <div :class="cardClass">
    <div v-for="(item,index) in cardContent" :key="index" class="col-lg col-md-6">
      <div class="fancybox-userbehavior wow fadeInUp text-left">
        <h6 class="mb-2">{{ item.title }}</h6>
        <div class="analytics-icon"> <i aria-hidden="true" :class="item.class"></i> </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'FancyCard',
  props: [ 'cardClass', 'cardContent']
}
</script>
