<template>
  <section class="iq-bg-over">
    <div class="container">
      <div class="row row-fluid row-has-fill iq-how-it-works">
        <div class="iq-mb-30 fadeInUp wow col-sm-12 col-lg-5 col-md-12 align-items-center">
          <div class="title-box wow fadeInUp text-left">
            <span class="title-design">ABOUT US</span>
            <h2>Human Behaviour, Data Science</h2>
            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.It is a long established fact that a reader will be distracted many desktop.</p>
          </div>
          <div class="services-content wow fadeInUp progress-style text-left">
            <div class="progress-content" v-for="(item,index) of list" :key="index">
              <div class="progress-value">{{ item.percentage }}%</div>
              <div class="progress-title">
                <div class="progress-main">
                  <h6>{{ item.title }}</h6>
                </div>
                <div class="iq-progress-bar">
                  <span class="position-relative" :data-percent="item.percentage"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-sm-12 offset-lg-1 col-lg-6 col-md-12">
          <div class="row">
            <div class="first-tec col-sm-6 col-lg-6">
              <div class="tec_box">
                <div class="tec_icons clerfix">
                  <div class="img_icon_one">
                    <div class="tec_icon"><img :src="require('../../assets/images/services/services-small-1.png')" alt="tecbox"></div>
                  </div>
                  <div class="img_icon_two">
                    <div class="tec_icon"><img :src="require('../../assets/images/services/services-small-2.png')" alt="tecbox"></div>
                  </div>
                </div>
                <div class="img_icon_three">
                  <div class="tec_icon"><img :src="require('../../assets/images/services/services-small-3.png')" alt="tecbox"></div>
                </div>
                <h5>Big Data Services</h5>
              </div>
            </div>
            <div class="col-sm-6 col-lg-6">
              <div class="tec_box">
                <div class="tec_icons clerfix">
                  <div class="img_icon_one">
                    <div class="tec_icon"><img :src="require('../../assets/images/services/services-small-1.png')" alt="tecbox"></div>
                  </div>
                  <div class="img_icon_two">
                    <div class="tec_icon"><img :src="require('../../assets/images/services/services-small-2.png')" alt="tecbox"></div>
                  </div>
                </div>
                <div class="img_icon_three">
                  <div class="tec_icon"><img :src="require('../../assets/images/services/services-small-3.png')" alt="tecbox"></div>
                </div>
                <h5>Business Intelligence</h5>
              </div>
              <div class="tec_box">
                <div class="tec_icons clerfix">
                  <div class="img_icon_one">
                    <div class="tec_icon"><img :src="require('../../assets/images/services/services-small-1.png')" alt="tecbox"></div>
                  </div>
                  <div class="img_icon_two">
                    <div class="tec_icon"><img :src="require('../../assets/images/services/services-small-2.png')" alt="tecbox"></div>
                  </div>
                </div>
                <div class="img_icon_three">
                  <div class="tec_icon"><img :src="require('../../assets/images/services/services-small-3.png')" alt="tecbox"></div>
                </div>
                <h5>Data Visualization</h5>
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
  name: 'About2',
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
