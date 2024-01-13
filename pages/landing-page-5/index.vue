<template>
  <div>
    <Home />
    <div class="main-content">
      <AboutUs />
      <Client />
      <GetTipsTricks />
      <Counter />
      <Features />
      <Solutions />
      <Partner />
      <Blog />
    </div>
    <Footer footer-class="footer-one iq-bg-dark iq-over-dark-90" />
  </div>
</template>

<script>
import Home from '../../components/LandingPage5/Home'
import AboutUs from '../../components/LandingPage5/AboutUs'
import Client from '../../components/LandingPage5/Client'
import GetTipsTricks from '../../components/LandingPage5/GetTipsTricks'
import Counter from '../../components/LandingPage5/Counter'
import Features from '../../components/LandingPage5/Features'
import Solutions from '../../components/LandingPage5/Solutions'
import Partner from '../../components/LandingPage5/Partner'
import Blog from '../../components/LandingPage5/Blog'
import Footer from '../../components/FooterStyle2/Footer'
import { themes } from '../../assets/app/app'
export default {
  layout: 'LandingPage5',
  components: {
    Home,
    AboutUs,
    Client,
    GetTipsTricks,
    Counter,
    Features,
    Solutions,
    Partner,
    Blog,
    Footer
  },
  mounted () {
    document.cookie = 'layout=LandingPage5'
    setTimeout(function () {
      themes.index()
      themes.initRevSlider5()
    }, 1000)
  }
}
</script>
