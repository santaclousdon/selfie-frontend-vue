<template>
  <div>
    <Home />
    <div class="main-content">
      <Portfolio />
      <Started />
      <Bluebg />
    </div>
    <Footer />
  </div>
</template>

<script>
import Home from '../../components/LandingPage22/Home'
import Portfolio from '../../components/LandingPage22/Portfolio'
import Started from '../../components/LandingPage22/Started'
import Bluebg from '../../components/LandingPage22/Bluebg'
import Footer from '../../components/LandingPage22/Footer'
import { themes } from '../../assets/app/app'
export default {
  layout: 'LandingPage22',
  components: {
    Home,
    Portfolio,
    Started,
    Bluebg,
    Footer
  },
  mounted () {
    document.cookie = 'layout=LandingPage22'
    setTimeout(function () {
      themes.index()
      themes.initRevSlider22()
    }, 1000)
  }
}
</script>
