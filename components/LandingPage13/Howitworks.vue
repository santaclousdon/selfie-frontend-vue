<template>
  <section class="position-relative iq-manufac-work iq-pb-70">
    <div class="container">
      <div class="row mb-5">
        <div class="col-lg-4 pr-3 border-right">
          <div class="title-box wow fadeInUp mb-0 text-left">
            <span class="title-design">HOW IT'S WORK</span>
            <h2>How Does Xamin Works</h2>
          </div>
        </div>
        <div class="col-lg-8 pl-lg-5 align-self-center">
          <p class="mb-0">
            There are many variations of passages fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution.
          </p>
        </div>
      </div>
      <div class="row pt-3">
        <div v-for="(work,index) in works" :key="index" class="col-md-6 col-lg-4 col-sm-6">
          <div class="consult-services position-relative wow fadeInUp default none default  text-left">
            <div class="circle-effect">
              <img :src="work.src" class="img-fluid" alt="fancybox">
            </div><h4 class="mb-2">
              {{ work.title }}
            </h4>
            <p class="mb-0">
              {{ work.desc }}
            </p>
            <span class="number">{{ index+1 }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'Howitworks',
  data () {
    return {
      works: [
        {
          src: require('../../assets/images/services/03.png'),
          title: 'Key capabilities',
          desc: 'It is a long established fact that a reader will be distracted by the of readable content Deploy at scale on the.'
        },
        {
          src: require('../../assets/images/services/04.png'),
          title: 'Connections',
          desc: 'It is a long established fact that a reader will be distracted by the of readable content Deploy at scale on the.'
        },
        {
          src: require('../../assets/images/services/02.png'),
          title: 'Industries served',
          desc: 'It is a long established fact that a reader will be distracted by the of readable content Deploy at scale on the.'
        }
      ]
    }
  }
}
</script>>
