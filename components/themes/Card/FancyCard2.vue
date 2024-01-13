<template>
  <div :class="cardClass">
    <div v-for="(item,index) in cardContent" :key="index"  class="col-md-3 col-sm-6">
      <div class="iq-timer style2 mb-5 mb-md-0 mb-lg-0 text-center">
        <div class="iq-img"> <img :src="item.src" alt="fancybox"> </div>
        <div class="timer-details ">
          <span class="timer dark-timer">
             <count-to :start-val="0" :end-val="item.number" :duration="15000" />
          </span>
          <span class="timer_postfix dark-timer">M+</span><i class="fa fa-percent" aria-hidden="true"></i>
          <p class="dark-timer">{{ item.title }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import countTo from 'vue-count-to'
export default {
  name: 'FancyCard2',
  components: {
    countTo
  },
  props: [ 'cardClass', 'cardContent']
}
</script>
