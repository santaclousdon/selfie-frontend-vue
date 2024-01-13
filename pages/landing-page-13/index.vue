<template>
  <div>
    <Home />
    <div class="main-content">
      <Howitworks />
      <About />
      <Services />
      <Team />
      <Partner />
      <Blog />
      <Client />
    </div>
    <Footer />
  </div>
</template>

<script>
import Home from '../../components/LandingPage13/Home'
import Howitworks from '../../components/LandingPage13/Howitworks'
import About from '../../components/LandingPage13/About'
import Services from '../../components/LandingPage13/Services'
import Team from '../../components/LandingPage13/Team'
import Partner from '../../components/LandingPage13/Partner'
import Blog from '../../components/LandingPage13/Blog'
import Client from '../../components/LandingPage13/Client'
import Footer from '../../components/LandingPage13/Footer'
import { themes } from '../../assets/app/app'
export default {
  layout: 'LandingPage13',
  components: {
    Home,
    Howitworks,
    About,
    Services,
    Team,
    Partner,
    Blog,
    Client,
    Footer
  },
  mounted () {
    document.cookie = 'layout=LandingPage13'
    setTimeout(function () {
      themes.index()
      themes.initRevSlider13()
    }, 1000)
  }
}
</script>
