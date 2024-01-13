<template>
  <section class="position-relative xamin-background iq-pb-70">
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
          <div class="consult-services wow fadeInUp default box-hover-effect default  text-center">
            <div class="client-icon">
              <img :src="service.src" class="img-fluid" alt="fancybox">
            </div>
            <div class="client-detail">
              <h4 class="mb-1">
                {{ service.title }}
              </h4>
              <p class="mb-0">
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
          src: require('../../assets/images/services/03.png'),
          title: 'Availability',
          desc: 'There are many variations of passages of readable content page looking'
        },
        {
          src: require('../../assets/images/services/02.png'),
          title: ' Performance',
          desc: 'There are many variations of passages of readable content page looking'
        },
        {
          src: require('../../assets/images/services/04.png'),
          title: ' Quality',
          desc: 'There are many variations of passages of readable content page looking'
        },
        {
          src: require('../../assets/images/services/20.png'),
          title: ' Maintenance',
          desc: 'There are many variations of passages of readable content page looking'
        },
        {
          src: require('../../assets/images/services/21.png'),
          title: ' Operation',
          desc: 'There are many variations of passages of readable content page looking'
        },
        {
          src: require('../../assets/images/services/22.png'),
          title: 'Safety',
          desc: 'There are many variations of passages of readable content page looking'
        }
      ]
    }
  }
}
</script>>
