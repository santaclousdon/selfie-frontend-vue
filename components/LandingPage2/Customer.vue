<template>
  <div>
    <section class="pt-0">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 wow fadeInUp animated">
            <div class="title-box wow fadeInUp text-center">
              <span class="title-design text-primary sub-title">Trusted</span>
              <h2>Our Customers Get Results
              </h2>
            </div>
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
                <div class="clients-box hover-effct"> 
                  <img class="img-fluid client-img" :src="option.src" alt="client-image">
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
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
                <div class="clients-box hover-effct"> 
                  <img class="img-fluid client-img" :src="option.src" alt="client-image">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  name: 'Customer',
  data () {
    return {
      images: [
        { src: require('../../assets/images/partners/1.png') },
        { src: require('../../assets/images/partners/2.png') },
        { src: require('../../assets/images/partners/3.png') },
        { src: require('../../assets/images/partners/4.png') },
        { src: require('../../assets/images/partners/1.png') },
        { src: require('../../assets/images/partners/2.png') }
      ]
    }
  }
}
</script>
