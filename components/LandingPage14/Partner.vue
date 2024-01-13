<template>
  <div class="position-relative overview-block-ptb iq-pb-70">
    <div class="container">
      <div class="row">
        <div class="col-sm-12">
          <div class="title-box wow fadeInUp  text-center">
            <span class="title-design">Partners</span><h2>They are working as Partner</h2><p>Distracted by the readable content of a page when looking at its layout.It is a long established.</p>
          </div>
        </div>
      </div>
      <div class="col-sm-12">
        <div
          class="owl-carousel client-logo iq-padding-lr"
          data-dots="false"
          data-nav="false"
          data-items="4"
          data-items-laptop="3"
          data-items-tab="3"
          data-items-mobile="1"
          data-items-mobile-sm="1"
          data-autoplay="true"
          data-loop="true"
          data-margin="30"
        >
          <div v-for="(partner,index) in partners" :key="index" class="item ">
            <div class="clients-box box-shadow">
              <img class="img-fluid client-img" :src="partner.src" alt="image0">
            </div>
          </div>
        </div>
      </div>
      <div class="col-sm-12 ">
        <div
          class="owl-carousel client-logo "
          data-dots="false"
          data-nav="false"
          data-items="5"
          data-items-laptop="4"
          data-items-tab="3"
          data-items-mobile="1"
          data-items-mobile-sm="1"
          data-autoplay="true"
          data-loop="true"
          data-margin="30"
        >
          <div v-for="(partner,index1) in partners" :key="index1" class="item ">
            <div class="clients-box box-shadow">
              <img class="img-fluid client-img" :src="partner.src" alt="image0">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Partner',
  data () {
    return {
      partners: [
        {
          src: require('../../assets/images/clients/07.png')
        },
        {
          src: require('../../assets/images/clients/08.png')
        },
        {
          src: require('../../assets/images/clients/09.png')
        },
        {
          src: require('../../assets/images/clients/10.png')
        },
        {
          src: require('../../assets/images/clients/11.png')
        },
        {
          src: require('../../assets/images/clients/12.png')
        },
        {
          src: require('../../assets/images/clients/13.png')
        },
        {
          src: require('../../assets/images/clients/14.png')
        },
        {
          src: require('../../assets/images/clients/08.png')
        },
        {
          src: require('../../assets/images/clients/12.png')
        }
      ]
    }
  }
}
</script>
