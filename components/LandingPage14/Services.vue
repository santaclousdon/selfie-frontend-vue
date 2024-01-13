<template>
  <section class="position-relative iq-pb-30 overview-block-pb">
    <div class="container">
      <div class="row">
        <div class="col-sm-12">
          <div class="title-box wow fadeInUp  text-center">
            <span class="title-design">Our Services</span>
            <h2>How it helps you succeed</h2>
          </div>
        </div>
      </div>
      <div class="row">
        <div v-for="(service,index) in services" :key="index" class="col-md-6 col-lg-4 col-sm-6">
          <div class="iq-service-box wow fadeInUp  text-center" data-wow-delay="0.4s">
            <div class="fancy-info">
              <div class="fancy_img">
                <img :src="service.src" class="img-fluid" alt="fancybox">
              </div>
              <h4 class="mt-4 mb-3 title">
                {{ service.title }}
              </h4><p class="">
                {{ service.desc }}
              </p>
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
  data () {
    return {
      services: [
        {
          src: require('../../assets/images/security/01.png'),
          title: ' PIC Compliance',
          desc: ' Variations of passages of available, but the majority have suffered.'
        },
        {
          src: require('../../assets/images/security/02.png'),
          title: ' Privacy Compliance',
          desc: ' Variations of passages of available, but the majority have suffered.'
        },
        {
          src: require('../../assets/images/security/03.png'),
          title: ' Payment Solutions',
          desc: ' Variations of passages of available, but the majority have suffered.'
        },
        {
          src: require('../../assets/images/security/04.png'),
          title: '  Call Centers',
          desc: ' Variations of passages of available, but the majority have suffered.'
        },
        {
          src: require('../../assets/images/security/05.png'),
          title: ' Powerful Risk Reduction',
          desc: ' Variations of passages of available, but the majority have suffered.'
        },
        {
          src: require('../../assets/images/security/06.png'),
          title: ' Data Security',
          desc: ' Variations of passages of available, but the majority have suffered.'
        }
      ]
    }
  }
}
</script>
