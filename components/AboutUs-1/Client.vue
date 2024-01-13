<template>
  <div class="row mt-5">
    <div class="col-md-12 wow fadeInUp">
      <div class="owl-carousel mt-4 client-logo owl-loaded owl-drag" data-dots="false" data-nav="false" data-items="6" data-items-laptop="4" data-items-tab="3" data-items-mobile="2" data-items-mobile-sm="1" data-autoplay="true" data-loop="true" data-margin="30">
        <div class="item" v-for="(item, index) in list" :key="index" >
          <div class="clients-box hover-effct"> <img class="img-fluid client-img" :src="item.image" alt="client-image"> </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Client',
  data(){
    return{
      list:[
        {
           image : require('../../assets/images/partners/1.png')
        },
        {
           image : require('../../assets/images/partners/2.png')
        },
        {
           image : require('../../assets/images/partners/3.png')
        },
        {
           image : require('../../assets/images/partners/4.png')
        },
        {
           image : require('../../assets/images/partners/5.png')
        },
        {
           image : require('../../assets/images/partners/1.png')
        }
      ]
    }
  }
}
</script>