<template>
  <div class="main-content">
    <Hero />
    <HowItWorks />
    <Customer />
    <WhyPay />
    <Footer />
  </div>
</template>

<script>
import Hero from '../../components/Home/Hero'
import HowItWorks from '../../components/Home/HowItWorks'
import Customer from '../../components/Home/Customer'
import WhyPay from '../../components/Home/WhyPay'
import Footer from '../../components/Home/Footer'
import { themes } from '../../assets/app/app'
export default {
  middleware: 'redirect',
  layout: 'Pages',
  components: {
    Hero,
    WhyPay,
    HowItWorks,
    Customer,
    Footer
  },
  mounted() {
    setTimeout(function () {
      themes.index()
      themes.initRevSlider1()
    }, 500)
  }
}
</script>