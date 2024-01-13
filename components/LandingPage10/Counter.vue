<template>
  <section class="pt-5">
    <div class="container">
      <div class="row">
        <div v-for="(item, index) of items" :key="index" class="col-md-3 col-sm-6">
          <div class="iq-timer style1 text-center">
            <i aria-hidden="true" :class="item.icon"></i>
            <div class="timer-details">
              <span class="timer text-dark">
                <count-to :start-val="0" :end-val="item.number" :duration="15000" />
              </span>
              <i class="fa fa-plus text-dark" aria-hidden="true"></i>
              <p class="text-dark">{{ item.title }}</p>
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
  name: 'Counter',
  components: {
    countTo
  },
  data () {
    return {
      items: [
        {
          number: 50,
          icon: 'flaticon flaticon-cost',
          title: 'Trading Volume(USD)'
        },
        {
          number: 20,
          icon: 'flaticon flaticon-planning',
          title: 'Data Transactions'
        },
        {
          number: 10,
          icon: 'flaticon flaticon-customer',
          title: 'Our Happy Users'
        },
        {
          number: 200,
          icon: 'flaticon flaticon-cost',
          title: 'Custom Portfolios Created'
        }
      ]
    }
  }
}
</script>
