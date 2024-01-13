<template>
  <section class="xamin-custom-bg">
    <div class="container">
      <div class="row">
        <div class="col-sm-12 wow fadeInUp">
          <div class="title-box wow fadeInUp text-center">
            <span class="title-design">WORK</span>
            <h2>How it works</h2>
          </div>
        </div>
      </div>
      <div class="row">
        <div v-for="(list,index) in lists" :key="index" class="col-lg-3 col-md-3 col-sm-12">
          <div class="consult-services xamin-square right wow fadeInUp text-left" >
            <div class="arrow_img"> <img class="arrow-img" :src="require('../../assets/images/fancybox/arrow-7.png')" alt="fancybox" /></div>
            <div class="square-effect bg">
              <img :src="list.src" alt="fancybox" />
              <div class="arrowbg_img"> <img :src="list.bgimage" alt="fancybox" /></div>
            </div>
            <h5 class="mb-2">{{ list.title  }}</h5>
            <p class="mb-0">{{ list.subtitle  }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'HowItWorks',
  data() {
    return {
      lists: [
        {
          title: 'Text',
          subtitle: 'It is a long established fact that a fre ader will be distracted by the.',
          bgimage: require('../../assets/images/fancybox/bg-7-1.png'),
          src: require('../../assets/images/fancybox/7-4.png')
        },
        {
          title: 'ML Algorithms',
          subtitle: 'It is a long established fact that a fre ader will be distracted by the.',
          bgimage: require('../../assets/images/fancybox/bg-7-1.png'),
          src: require('../../assets/images/fancybox/7-2.png')
        },
        {
          title: 'Classified Model',
          subtitle: 'It is a long established fact that a fre ader will be distracted by the.',
          bgimage: require('../../assets/images/fancybox/bg-7-1.png'),
          src: require('../../assets/images/fancybox/7-3.png')
        },
        {
          title: 'Prediction',
          subtitle: 'It is a long established fact that a fre ader will be distracted by the.',
          bgimage: require('../../assets/images/fancybox/bg-7-1.png'),
          src: require('../../assets/images/fancybox/7-1.png')
        }
      ]
    }
  }
}
</script>
