<template>
  <section>
    <div class="container">
      <div class="row xamin-bg">
        <div class="col-md-12">
          <div class="title-box wow fadeInUp text-center">
            <span class="title-design">How it’s work</span>
            <h2>How Does Xamin Works</h2>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-12 col-lg-4 col-md-4">
          <div class="consult-services xamin-circle right wow fadeInUp text-center" data-wow-delay="0.6s">
            <div class="circle-effect">
              <img :src="require('../../assets/images/services/01.png')" alt="fancybox">
            </div>
            <h5 class="mb-2">Data for all your people</h5>
            <p class="mb-0">It is a long established fact that a reader will be distracted by the of readable.</p>
          </div>
        </div>
        <div class="col-sm-12 col-lg-4 col-md-4 mt-4 mt-md-0">
          <div class="consult-services xamin-circle right wow fadeInUp text-center" data-wow-delay="1s">
            <div class="circle-effect">
              <img :src="require('../../assets/images/services/02.png')" alt="fancybox">
            </div>
            <h5 class="mb-2">A new breed of AI</h5>
            <p class="mb-0">It is a long established fact that a reader will be distracted by the of readable.</p>
          </div>
        </div>
        <div class="col-sm-12 col-lg-4 col-md-4 mt-4 mt-md-0">
          <div class="consult-services xamin-circle wow fadeInUp  text-center" data-wow-delay="1.4s">
            <div class="circle-effect">
              <img :src="require('../../assets/images/services/03.png')" alt="fancybox">
            </div>
            <h5 class="mb-2">Analytics business</h5>
            <p class="mb-0">It is a long established fact that a reader will be distracted by the of readable.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'HowItWorks'
}
</script>
