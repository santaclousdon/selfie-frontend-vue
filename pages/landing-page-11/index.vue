<template>
  <div>
    <Home />
    <div class="main-content">
      <Process />
      <About />
      <Services />
      <Project />
      <Client />
      <Blog />
    </div>
    <Footer footer-class="footer-one iq-bg-dark iq-over-dark-90" />
  </div>
</template>

<script>
import Home from '../../components/LandingPage11/Home'
import Process from '../../components/LandingPage11/Process'
import About from '../../components/LandingPage11/About'
import Services from '../../components/LandingPage11/Services'
import Project from '../../components/LandingPage11/Project'
import Client from '../../components/LandingPage11/Client'
import Blog from '../../components/LandingPage11/Blog'
import Footer from '../../components/FooterStyle2/Footer'
import { themes } from '../../assets/app/app'
export default {
  layout: 'LandingPage11',
  components: {
    Home,
    Process,
    About,
    Services,
    Project,
    Client,
    Blog,
    Footer
  },
  mounted () {
    document.cookie = 'layout=LandingPage11'
    setTimeout(function () {
      themes.index()
      themes.initRevSlider11()
    }, 1000)
  }
}
</script>
