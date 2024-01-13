<template>
  <section class="pt-0">
    <div class="container">
      <div class="row">
        <div class="col-md-12 wow fadeInUp title-box text-center">
          <span class="title-design">Awards</span>
          <h2>Awards &amp; Accreditations</h2>
          <p class="mb-0">It is a long established fact that a reader will be distracted by the readable</p>
        </div>
      </div>
      <div class="row wow fadeInUp mb-5">
        <div v-for="(option,index) in images1" :key="index" class="col-md-3">
          <div class="xamin-award wow fadeInUp  text-center">
            <div class="award-img"> <img :src="option.src" alt="fancybox"> </div>
            <h5 class="mt-3">{{ option.title }}</h5>
          </div>
        </div>
      </div>
      <div class="row wow fadeInUp offset-lg-2">
        <div v-for="(option,index) in images2" :key="index" class="col-lg-3 col-md-4">
          <div class="xamin-award wow fadeInUp text-center">
            <div class="award-img"> <img :src="option.src" alt="fancybox"> </div>
            <h5 class="mt-3">{{ option.title }}</h5>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'Awards',
  data () {
    return {
      images1: [
        {
          title: 'Microsoft Partner of the Year Award',
          src: require('../../assets/images/awards/1.png')
        },
        {
          title: 'Gold Winner of 2013 Horizon Awards',
          src: require('../../assets/images/awards/2.png')
        },
        {
          title: 'Global Sourcing Awards 2018 Finalist',
          src: require('../../assets/images/awards/3.png')
        },
        {
          title: 'European Software Testing Awards Finalist',
          src: require('../../assets/images/awards/4.png')
        }
      ],
      images2: [
        {
          title: 'Microsoft Partner of the Year Award',
          src: require('../../assets/images/awards/1.png')
        },
        {
          title: 'Gold Winner of 2013 Horizon Awards',
          src: require('../../assets/images/awards/2.png')
        },
        {
          title: 'Global Sourcing Awards 2018 Finalist',
          src: require('../../assets/images/awards/3.png')
        }
      ]
    }
  }
}
</script>
