<template>
  <div>
    <Home />
    <div class="main-content">
      <AboutUs />
      <Analysis />
      <HowItWorks />
      <Benefits />
      <Priceing />
      <Accordion />
      <Testimonials />
      <Blog />
      <ContactUs />
    </div>
    <Footer footer-class="footer-one iq-bg-dark iq-over-dark-90" />
  </div>
</template>
<script>
import Home from '../../components/LandingPage7/Home'
import AboutUs from '../../components/LandingPage7/AboutUs'
import Analysis from '../../components/LandingPage7/Analysis'
import HowItWorks from '../../components/LandingPage7/HowItWorks'
import Benefits from '../../components/LandingPage7/Benefits'
import Priceing from '../../components/LandingPage7/Priceing'
import Accordion from '../../components/LandingPage7/Accordion'
import Testimonials from '../../components/LandingPage7/Testimonials'
import Blog from '../../components/LandingPage7/Blog'
import ContactUs from '../../components/LandingPage7/ContactUs'
import Footer from '../../components/FooterStyle2/Footer'
import { themes } from '../../assets/app/app'
export default {
  layout: 'LandingPage7',
  components: {
    Home,
    AboutUs,
    Analysis,
    HowItWorks,
    Benefits,
    Priceing,
    Accordion,
    Testimonials,
    Blog,
    ContactUs,
    Footer
  },
  mounted () {
    document.cookie = 'layout=LandingPage7'
    setTimeout(function () {
      themes.index()
      themes.initRevSlider7()
    }, 100)
  }
}
</script>
