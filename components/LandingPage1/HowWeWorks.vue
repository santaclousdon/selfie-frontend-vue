<template>
  <section id="how-it-works" class="iq-bg-over">
    <div class="container">
      <div class="row iq-how-it-works">
          <div class="col-md-12 col-lg-5 mb-0 mb-lg-30 fadeInUp wow align-items-center">
            <div class="title-box wow fadeInUp text-left">
              <span class="title-design">How We Work</span>
              <h2>See Xamin In Action</h2>
              <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.It is a long established fact.</p>
            </div>
            <div class="iq-services-box wow fadeInUp text-left">
              <div class="services-content" v-for="(item,index) of list" :key="index">
                <h6>{{ item.title }}</h6>
                <span class="progress-value">{{ item.percentage }}%</span>
                <div class="iq-progress-bar"> <span class="position-relative" :data-percent="item.percentage"></span> </div>
              </div>
            </div>
          </div>
          <div class="fadeInUp col-md-12 col-lg-7 animated">
              <img width="1260" height="954" :src="require('../../assets/images/about-us/06.png')" class="single_image-img attachment-full" alt="" >
          </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'HowWeWorks',
  data () {
    return {
      list: [
        {
          title: 'Big Data Services',
          percentage: '70'
        },
        {
          title: 'Data Science Consulting',
          percentage: '50'
        },
        {
          title: 'Data Analytics Consulting',
          percentage: '80'
        }
      ]
    }
  }
}
</script>
