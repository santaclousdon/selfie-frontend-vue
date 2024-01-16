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
import About from '../../components/Home/About'
import HowWeWorks from '../../components/Home/HowWeWorks'
import HowItWorks from '../../components/Home/HowItWorks'
import Services from '../../components/LandingPage1/Services'
import Customer from '../../components/Home/Customer'
import WhyPay from '../../components/Home/WhyPay'
import Project from '../../components/Home/Project'
import Client from '../../components/Home/Client'
import Awards from '../../components/Home/Awards'
import Blog from '../../components/Home/Blog'
import Footer from '../../components/Home/Footer'
import { themes } from '../../assets/app/app'
export default {
  layout: 'Home',
  components: {
    Hero,
    About,
    WhyPay,
    HowWeWorks,
    HowItWorks,
    Services,
    Customer,
    Project,
    Client,
    Awards,
    Blog,
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