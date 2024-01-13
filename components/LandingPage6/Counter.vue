<template>
  <section class="pt-0">
    <div class="container">
        <div class="row">
          <div class="col-lg-3 col-md-3 col-sm-6">
            <div class="iq-timer style3 text-left">
              <div class="iq-img"> <img :src="require('../../assets/images/fancybox/4.png')" alt="fancybox"></div>
                <div class="timer-details">
                  <span class="timer dark-text">
                    <count-to :start-val="0" :end-val="455" :duration="15000" />
                  </span>
                  <i class="fa fa-plus" aria-hidden="true"></i>
                  <p class="dark-text"> Managed Analytics as a global business</p>
                </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-3 col-sm-6">
              <div class="iq-timer style3 text-left">
                <div class="iq-img"> <img :src="require('../../assets/images/fancybox/3.png')" alt="fancybox"></div>
                  <div class="timer-details">
                    <span class="timer dark-text">
                      <count-to :start-val="0" :end-val="32" :duration="15000" />
                    </span>
                    <p class="dark-text"> Data Management in the telecoms</p>
                  </div>
              </div>
          </div>
          <div class="col-lg-3 col-md-3 col-sm-6">
              <div class="iq-timer style3 text-left">
                <div class="iq-img"> <img :src="require('../../assets/images/fancybox/2.png')" alt="fancybox"></div>
                <div class="timer-details">
                  <span class="timer dark-text">
                    <count-to :start-val="0" :end-val="1254" :duration="15000" />
                  </span>
                  <i class="fa fa-plus" aria-hidden="true"></i>
                  <p class="dark-text"> Managed Analytics in business</p>
                </div>
              </div>
          </div>
          <div class="col-lg-3 col-md-3 col-sm-6">
            <div class="iq-timer style3    text-left">
              <div class="iq-img"> <img :src="require('../../assets/images/fancybox/1.png')" alt="fancybox"></div>
                <div class="timer-details">
                 <span class="timer dark-text">
                    <count-to :start-val="0" :end-val="563" :duration="15000" />
                  </span>
                  <i class="fa fa-plus" aria-hidden="true"></i>
                  <p class="dark-text"> Project complete in timeline.</p>
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
    name:'Counter',
    components: {
      countTo
    }
}
</script>