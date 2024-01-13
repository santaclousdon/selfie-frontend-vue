<template>
  <div>
    <Home />
    <div class="main-content">
      <Client />
      <AboutUs />
      <Services />
      <Video />
      <GetStarted />
      <Testimonial />
      <Awards />
      <Blog />
    </div>
      <Footer footer-class="footer-one iq-bg-dark iq-over-image-bg" />
  </div>
</template>

<script>
import Home from '../../components/LandingPage4/Home'
import Client from '../../components/LandingPage4/Client'
import AboutUs from '../../components/LandingPage4/AboutUs'
import Services from '../../components/LandingPage4/Services'
import Video from '../../components/LandingPage4/Video'
import GetStarted from '../../components/LandingPage4/GetStarted'
import Testimonial from '../../components/LandingPage4/Testimonial'
import Awards from '../../components/LandingPage4/Awards'
import Blog from '../../components/LandingPage4/Blog'
import Footer from '../../components/FooterStyle2/Footer'
import { themes } from '../../assets/app/app'
export default {
 layout: 'LandingPage4',
  components: {
    Home,
    Client,
    AboutUs,
    Services,
    Video,
    GetStarted,
    Testimonial,
    Awards,
    Blog,
    Footer
  },
  mounted () {
    document.cookie = 'layout=LandingPage4'
    setTimeout(function () {
      themes.index()
      themes.initRevSlider4()
    }, 1000)
  }
}
</script>
