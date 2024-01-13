<template>
  <div>
    <Home />
    <div class="main-content">
      <Counter />
      <AboutUs />
      <Services />
      <Analytic />
      <WeProvide />
      <CaseStudies />
      <Partner />
      <Testimonials />
      <Blog />
      <ContactUs />
    </div>
    <Footer footer-class="footer-one iq-bg-dark iq-over-dark-90" />
  </div>
</template>
<script>
import Home from '../../components/LandingPage6/Home'
import Counter from '../../components/LandingPage6/Counter'
import AboutUs from '../../components/LandingPage6/AboutUs'
import Analytic from '../../components/LandingPage6/Analytic'
import Services from '../../components/LandingPage6/Services'
import WeProvide from '../../components/LandingPage6/WeProvide'
import CaseStudies from '../../components/LandingPage6/CaseStudies'
import Partner from '../../components/LandingPage6/Partner'
import Testimonials from '../../components/LandingPage6/Testimonials'
import Blog from '../../components/LandingPage6/Blog'
import ContactUs from '../../components/LandingPage6/ContactUs'
import Footer from '../../components/FooterStyle2/Footer'
import { themes } from '../../assets/app/app'
export default {
  layout: 'LandingPage6',
  components: {
    Home,
    Counter,
    AboutUs,
    Services,
    Analytic,
    WeProvide,
    CaseStudies,
    Partner,
    Testimonials,
    Blog,
    ContactUs,
    Footer
  },
  mounted () {
    document.cookie = 'layout=LandingPage6'
    setTimeout(function () {
      themes.index()
      themes.initRevSlider6()
    }, 1000)
  }
}
</script>
