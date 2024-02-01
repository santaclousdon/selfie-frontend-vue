<template>
  <div :class="cardClass">
    <div  v-for="(item,index) in cardContent" :key="index"  class="col-lg-4 col-md-6 text-center">
      <div class="iq-pricing">
        <div class="priceing-title ">
          <h2>{{ item.price }}$<span>/month</span></h2>
          <p class="mb-0">{{ item.description }}</p>
        </div>
        <div class="priceing-description ">
          <h4 class="title mb-3">{{ item.title }}</h4>
          <h5 class="subtitle mb-3">{{ item.subtitle }}</h5>
          <ul class="pricing-list">
            <li v-for="(list,rindex) in item.features" :key="rindex">{{ list.title }}</li>
          </ul>
          <a class="button blue-btn" href="" role="button">{{ item.buttontext }}</a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'PricingCardStyle1',
  props: ['cardClass', 'cardContent']
}
</script>
