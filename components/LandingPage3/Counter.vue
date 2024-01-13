<template>
  <section class="pb-0">
    <div class="container">
      <div class="row">
        <div class="col-md-3 col-sm-6" v-for="(item, index) in list" :key="index">
          <div class="iq-timer style2 mb-5  mb-md-0 mb-lg-0   text-center">
            <div class="iq-icon">  <i aria-hidden="true" :class="item.iconClass"></i> </div>
            <div class="timer-details ">
            <span class="timer dark-timer">
              <count-to :start-val="0" :end-val="item.number" :duration="15000" />
            </span>
            <span class="timer_postfix dark-timer">M</span><i class="fa fa-percent" aria-hidden="true"></i>
            <p class="dark-timer"> {{ item.title }} </p>
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
    },
    data () {
    return {
      list: [
        {
          number: 1520,
          iconClass: 'ion ion-android-sad',
          title: 'Happy Clients'
        },
        {
          number: 2000,
          iconClass: 'far fa-handshake',
          title: 'Completed Projects'
        },
        {
          number: 150,
          iconClass: 'ion ion-ios-contact-outline',
          title: 'Team Members'
        },
        {
          number: 750,
          iconClass: 'ion ion-android-checkmark-circle',
          title: 'Questions Answered'
        }
      ]
    }
  }
}
</script>