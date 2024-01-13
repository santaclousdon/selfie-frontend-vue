<template>
  <div class="iq-ptb-100">
    <div class="container">
      <div class="row">
        <div class="col-md-12 wow fadeInUp">
          <div class="owl-carousel client-logo owl-loaded owl-drag" data-dots="false" data-nav="false" data-items="6" data-items-laptop="4" data-items-tab="3" data-items-mobile="2" data-items-mobile-sm="1" data-autoplay="true" data-loop="true" data-margin="30">
            <div v-for="(item,index) in list" :key="index" class="item">
              <div class="clients-box hover-effct"> <img class="img-fluid client-img" :src="item.src" alt="client-image" /> </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name:'Client',
  data(){
    return{
      list : [
        {
          src: require('../../assets/images/partners/1.png')
        },
        {
          src: require('../../assets/images/partners/2.png')
        },
        {
          src: require('../../assets/images/partners/3.png')
        },
        {
          src: require('../../assets/images/partners/4.png')
        },
        {
          src: require('../../assets/images/partners/5.png')
        }
      ]
    }
  }
}
</script>
