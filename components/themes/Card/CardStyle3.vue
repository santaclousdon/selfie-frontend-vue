<template>
  <div :class="cardClass" data-dots="true" data-nav="false" data-autoplay="true" data-loop="true" data-items="1" data-items-laptop="1" data-items-tab="1" data-items-mobile="1" data-items-mobile-sm="1" data-margin="30">
    <div v-for="(item,index) in cardContent" :key="index" class="item">
      <div class="testimonial-info">
        <div slot="cardBody">
          <p>{{ item.description }}</p>
        </div>
        <div class="post-img">
          <div slot="cardMedia">
            <img :src="item.src" class="img-fluid rounded-circle" alt="#" width="150" height="150">
          </div>
          <div slot="cardHeader" class="testimonial-name">
            <h5>{{ item.title }}</h5>
            <span class="sub-title">{{ item.subtitle }}</span>
          </div>
        </div>
      </div>
    </div> 
  </div> 
</template>
<script>
export default {
  name:'CardStyle3',
  props:['cardContent', 'cardClass']
}
</script>
