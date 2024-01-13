<template>
  <section>
    <div class="container">
      <div class="row">
        <div class="col-sm-12">
          <div class="title-box wow fadeInUp  text-center">
            <span class="title-design">Our Services</span>
            <h2>Marketing Analytics Services</h2>
          </div>
        </div>
      </div>
      <div class="row">
        <div v-for="(item , index) in items" :key="index" class="col-md-6">
          <div class="fancy_service style2 wow fadeInUp  text-left">
            <div class="bg_img">
              <img class="bg_img-img" :src="item.bgimage" alt="fancybox">
            </div>
            <div class="fancy_block">
              <div class="fancy-info">
                <h4 class="mt-4 mb-3 title">{{ item.title }}</h4>
                <p>{{ item.subtitle }}</p>
                <a class="button blue-btn" href="#"><span class="btn-effect"> Read More</span></a>
              </div>
              <div class="fancy_img">
                <img :src="item.fancy_img" alt="fancybox">
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
  name: 'Services',
  data() {
    return {
      items: [
        {
          title: 'Google Analytics',
          subtitle: 'There are many variations of passages of Lorem Ipsum available, in',
          bgimage: require('../../assets/images/bg/11-bg.png'),
          fancy_img: require('../../assets/images/fancybox/11-1.png')
        },
        {
          title: 'Marketing Tracking',
          subtitle: 'There are many variations of passages of Lorem Ipsum available, in',
          bgimage: require('../../assets/images/bg/11-bg.png'),
          fancy_img: require('../../assets/images/fancybox/11-2.png')
        },
        {
          title: 'Services and Solutions',
          subtitle: 'There are many variations of passages of Lorem Ipsum available, in',
          bgimage: require('../../assets/images/bg/11-bg.png'),
          fancy_img: require('../../assets/images/fancybox/11-3.png')
        },
        {
          title: 'Conversion Optimization',
          subtitle: 'There are many variations of passages of Lorem Ipsum available, in',
          bgimage: require('../../assets/images/bg/11-bg.png'),
          fancy_img: require('../../assets/images/fancybox/11-4.png')
        }

      ]
    }
  }
}
</script>