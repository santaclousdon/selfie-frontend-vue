<template>
  <div>
    <section>
      <div class="container">
        <div class="row iq-how-it-works">
          <div class="iq-mb-30 fadeInUp col-sm-12 col-lg-6 col-md-6 wow align-items-center">
            <div class="title-box wow fadeInUp text-left">
              <span class="title-design">About us</span>
              <h2>Human Behaviour, Data Science</h2>
              <p>It is a long established fact that a reader will be distracted by the of readable content of a page when looking at its layout.</p>
            </div>
            <div class="text-left">
              <ul class="iq-list">
                <li> <i class="fa fa-check-square-o" /> <span>Advance Advisory Team</span> </li>
                <li> <i class="fa fa-check-square-o" /> <span>Professional Consulting Services</span> </li>
                <li> <i class="fa fa-check-square-o" /> <span> 24/7 Support Help Center</span> </li>
                <li> <i class="fa fa-check-square-o" /> <span>Customer Service &amp; Operations</span> </li>
              </ul>
            </div>
          </div>
          <div class="fadeInUp col-sm-12 col-lg-6 col-md-6 wow">
            <img alt="aboutus" class="single_image-img attachment-full" height="954" :src="require('../../assets/images/about-us/06.png')" width="1260">
          </div>
        </div>
      </div>
    </section>
    <section class="pt-0">
      <div class="container">
        <div class="row">
          <div v-for="(item, index) in list" :key="index" class="col-lg-4 col-sm-12">
            <div class="xamin-services  mb-0 wow fadeInUp text-left">
              <div class="services-detail">
                <h4 class="mb-1">
                  {{ item.title }}
                </h4>
                <p class="mb-0">
                  {{ item.description }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  name: 'AboutUs',
  data () {
    return {
      list: [
        {
          title: 'Data for all people',
          description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
        },
        {
          title: 'A new breed of AI',
          description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
        },
        {
          title: 'Analytics business',
          description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
        }
      ]
    }
  }
}
</script>
