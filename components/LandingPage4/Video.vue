<template>
  <section class="bg-img">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 col-md-6   wow fadeInUp align-self-center">
          <div class="iq-video-relative">
            <div class="scroll-effect  ">
              <div class="main-video">
                <div class="video-img">
                  <div class="consult-video video-btn">
                    <div class="btn-waves">
                      <div class="waves wave-1"></div>
                      <div class="waves wave-2"></div>
                      <div class="waves wave-3"></div>
                    </div>
                    <a href="https://www.youtube.com/watch?v=0O2aH4XLbto" class="iq-video popup-youtube"><i class="fa fa-play"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="title-box wow fadeInUp text-white text-left">
            <span class="title-design"></span>
            <h2>Transform Your Business Faster Using Data Science and Analysis</h2>
            <p>we keep on working till to make customer satisfaction.</p>
          </div>
          <div class="iq-timer style1text-left float-left text-left">
            <div class="timer-details">
              <span class="timer">
               <count-to :start-val="0" :end-val="50" :duration="15000" />
              </span>
              <i class="fa fa-plus" aria-hidden="true" style="color: #c0bbb7;"></i>
              <p> customer Buildwe love to developed as you think for business.</p>
            </div>
          </div>
          <div class="iq-timer style1text-left float-left text-left">
            <div class="timer-details">
              <span class="timer">
               <count-to :start-val="0" :end-val="10" :duration="15000" />
              </span>
              <i class="fa fa-percent" aria-hidden="true" style="color: #c0bbb7;"></i>
              <p> customer Satisfaction<br>
                we believe as you believe in your business
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import countTo from 'vue-count-to'
export default {
  name: 'Video',
  components: {
    countTo
  }
}
</script>
