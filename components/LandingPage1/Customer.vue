<template>
  <section class="xamin-blue-bg">
    <div class="container">
      <div class="row">
        <div class="col-sm-12  wow fadeInUp  animated">
          <div class="title-box wow fadeInUp text-white text-center">
            <span class="title-design sub-title">Customers</span>
            <h2>Discover customer successful stories</h2>
          </div>
          <div class="text-center mb-5 pb-4 "> <a href="#" class="button white-btn button-icon"> <span class="btn-effect"> View Customer Stories</span> </a> </div>
        </div>
      </div>
      <div class="row mb-5">
        <div class="col-md-12 wow fadeInUp">
          <div
            class="owl-carousel client-logo owl-loaded owl-drag"
            data-dots="false"
            data-nav="false"
            data-items="6"
            data-items-laptop="4"
            data-items-tab="3"
            data-items-mobile="2"
            data-items-mobile-sm="1"
            data-autoplay="true"
            data-loop="true"
            data-margin="30"
          >
            <div v-for="(option,index) in images" :key="index" class="item">
              <img class="img-fluid center-block" :src="option.src" alt="client-image">
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'Customer',
  data () {
    return {
      images: [
        { src: require('../../assets/images/partners/white-1.png') },
        { src: require('../../assets/images/partners/white-2.png') },
        { src: require('../../assets/images/partners/white-3.png') },
        { src: require('../../assets/images/partners/white-4.png') },
        { src: require('../../assets/images/partners/white-1.png') },
        { src: require('../../assets/images/partners/white-2.png') }
      ]
    }
  }
}
</script>
