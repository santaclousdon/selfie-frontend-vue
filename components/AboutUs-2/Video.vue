<template>
  <section>
    <div class="container">
      <div class="row xamin-bg">
        <div class="col-sm-12 offset-md-1 offset-lg-1 col-md-10 col-lg-10 wow fadeInUp text-center">
          <div>
            <div class="title-box text-center">
              <span class="title-design">our Services</span>
              <h2>We Provide Useful Services</h2>
            </div>
            <div class="scroll-effect">
                <img :src="require('../../assets/images/about-us/09.jpg')" class="img-fluid img-one" alt="#" />
                <div class="main-video">
                  <div class="video-img">
                      <div class="consult-video video-btn">
                        <div class="btn-waves">
                            <div class="waves wave-1"></div>
                            <div class="waves wave-2"></div>
                            <div class="waves wave-3"></div>
                        </div>
                        <a href="http://www.youtube.com/watch?v=0O2aH4XLbto" class="iq-video popup-youtube"><i class="fa fa-play"></i></a>
                      </div>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row mt-5">
        <div v-for="(item,index) in items" :key="index" class="col-lg-4 col-sm-12">
            <div class="service-box mt-5 mb-0 wow fadeInUp  text-left" :data-wow-delay="item.delay">
              <img :src="item.src" alt="fancybox">
              <div class="service-detail align-self-center">
                  <h4 class="mb-2">Data for all people</h4>
                  <p>There are many variations of passages of Lorem Ipsum available.</p>
              </div>
            </div>
        </div>        
      </div>
	  </div>
  </section>
</template>
<script>
export default {
  name: 'Video',
  data () {
    return {
      items: [
        {
          delay: '0.6s',
          title: 'Data for all people',
          subtitle: 'There are many variations of passages of Lorem Ipsum available.',
          src: require('../../assets/images/services/01.png')
        },
        {
          delay: '1s',
          title: 'A new breed of AI',
          subtitle: 'There are many variations of passages of Lorem Ipsum available.',
          src: require('../../assets/images/services/02.png')
        },
        {
          delay: '1.2s',
          title: 'Analytics business',
          subtitle: 'There are many variations of passages of Lorem Ipsum available.',
          src: require('../../assets/images/services/03.png')
        }
      ] 
    }
  }
}
</script>