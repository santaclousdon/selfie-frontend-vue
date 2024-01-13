<template>
  <section class="pt-0">
    <div class="container">
        <div class="row">
        <div class="col-sm-12  text-center">
            <div class="title-box wow fadeInUp text-center">
              <span class="title-design">About Xamin</span>
              <h2>Why Choose People Xamin</h2>
            </div>
        </div>
        </div>
        <div class="row">
          <div class="col-sm-12 col-md-6">
            <div class="single_image align_left">
              <div class="box_border_grey">
                <img :src="require('../../assets/images/about-us/01.png')" class="single_image-img" alt="" width="550" height="360">
              </div>
            </div>
          </div>
          <div class="col-sm-12 col-md-6">
            <div class="service-box p-4 my-4 wow fadeInUp  text-center text-md-left ">
              <img :src="require('../../assets/images/services/01.png')" alt="fancybox">
              <div class="service-detail align-self-center">
                <h5 class="mb-2">Perfect Event</h5>
                <p>The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letter.</p>
              </div>
              </div>
              <div class="service-box p-4 my-4 wow fadeInUp  text-center text-md-left ">
                <img :src="require('../../assets/images/services/02.png')" alt="fancybox">
                <div class="service-detail align-self-center">
                  <h5 class="mb-2">Organization</h5>
                  <p>The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letter.</p>
                </div>
            </div>
          </div>
        </div>
    </div>
    </section>
</template>
<script>
export default {
  
}
</script>