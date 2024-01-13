<template>
  <section class="position-relative overview-block-pb iq-pb-70">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 mb-5 mb-lg-0 wow fadeInUp  ">
          <div class="title-box wow fadeInUp  text-left">
            <span class="title-design">our Services</span><h2>How it helps you succeed</h2><p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
          </div>

          <ul class="iq-list">
            <li><i class="fa fa-check-square-o" /><span>Advance Advisory Team</span></li><li><i class="fa fa-check-square-o" /><span>Professional Consulting Services</span></li><li><i class="fa fa-check-square-o" /><span>24/7 Support Help Center</span></li><li>
              <i class="fa fa-check-square-o" /><span>Customer Service &amp; Operations
              </span>
            </li>
          </ul>

          <div class=" text-left mt-4 ">
            <a class="button blue-btn button-icon" href="/landing-page-15"><span class="btn-effect"> View Details</span></a>
          </div>
        </div>
        <div class="col-lg-6 ml-lg-0 ml-3">
          <div class="row">
            <div v-for="(work,index) in works" :key="index" class="col-lg-6 col-md-6 ">
              <div class="consult-services wow fadeInUp margintop none default  text-left">
                <div class="circle-effect">
                  <img :src="work.src" class="img-fluid" alt="fancybox">
                </div><h5 class="mb-2">
                  {{ work.title }}
                </h5><p class="mb-0">
                  {{ work.desc }}
                </p>
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
  name: 'Howithelps',
  data () {
    return {
      works: [
        {
          src: require('../../assets/images/services/23.png'),
          title: 'Identify Process behavior',
          desc: ' It is a long established fact that a reader will be'
        },
        {
          src: require('../../assets/images/services/24.png'),
          title: 'Zero-trust Model',
          desc: ' It is a long established fact that a reader will be'
        },
        {
          src: require('../../assets/images/services/25.png'),
          title: 'Automated Whitelisting',
          desc: ' It is a long established fact that a reader will be'
        },
        {
          src: require('../../assets/images/services/26.png'),
          title: ' Detect Vulnerabilities',
          desc: ' It is a long established fact that a reader will be'
        }
      ]
    }
  }
}
</script>
