<template>
  <div>
    <Home />
    <div class="main-content">
      <About />
      <Specializing1 />
      <Specializing2 />
      <Education />
      <Process />
      <Skills />
      <CaseStudies />
      <Testimonials />
    </div>
    <Footer footer-class="footer-one iq-bg-dark iq-over-dark-90" />
  </div>
</template>

<script>
import Home from '../../components/LandingPage9/Home'
import About from '../../components/LandingPage9/About'
import Specializing1 from '../../components/LandingPage9/Specializing1'
import Specializing2 from '../../components/LandingPage9/Specializing2'
import Education from '../../components/LandingPage9/Education'
import Process from '../../components/LandingPage9/Process'
import Skills from '../../components/LandingPage9/Skills'
import CaseStudies from '../../components/LandingPage9/CaseStudies'
import Testimonials from '../../components/LandingPage9/Testimonials'

import Footer from '../../components/FooterStyle2/Footer'
import { themes } from '../../assets/app/app'
export default {
  layout: 'LandingPage9',
  components: {
    Home,
    About,
    Specializing1,
    Specializing2,
    Education,
    Process,
    Skills,
    CaseStudies,
    Testimonials,
    Footer
  },
  mounted () {
    document.cookie = 'layout=LandingPage9'
    setTimeout(function () {
      themes.index()
      themes.initRevSlider9()
    }, 1000)
  }
}
</script>
