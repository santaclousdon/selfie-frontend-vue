<template>
  <section>
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="title-box wow fadeInUp text-center">
            <span class="title-design">TRUSTED BY OVER 26,000 FORWARD - THINKING COMPANIES </span>
          </div>
          <div class="row">
            <div class="col-md-12">
              <div class="owl-carousel owl-loaded owl-drag"
                data-dots="false"
                data-nav="false"
                data-items="6"
                data-items-laptop="4"
                data-items-tab="3"
                data-items-mobile="2"
                data-items-mobile-sm="1"
                data-dots-mobile="true"
                data-autoplay="true"
                data-loop="true"
                data-margin="30"
              >
                <div v-for="(item,index) in list" :key="index" class="item">
                  <div class="clients-box">
                    <img class="img-fluid client-img" :src="item.image" alt="image0">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
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
