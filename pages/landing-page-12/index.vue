<template>
  <div>
    <Home />
    <div class="main-content">
      <Partner />
      <About />
      <Specialize />
      <Expertize />
      <Overview />
      <Blog />
    </div>
    <Footer />
  </div>
</template>

<script>
import Home from '../../components/LandingPage12/Home'
import Blog from '../../components/LandingPage12/Blog'
import Partner from '../../components/LandingPage12/Partner'
import About from '../../components/LandingPage12/About'
import Specialize from '../../components/LandingPage12/Specialize'
import Expertize from '../../components/LandingPage12/Expertize'
import Overview from '../../components/LandingPage12/Overview'
import Footer from '../../components/LandingPage12/Footer'
import { themes } from '../../assets/app/app'
export default {
  layout: 'LandingPage12',
  components: {
    Home,
    About,
    Partner,
    Specialize,
    Expertize,
    Overview,
    Blog,
    Footer
  },
  mounted () {
    document.cookie = 'layout=LandingPage12'
    setTimeout(function () {
      themes.index()
      themes.initRevSlider12()
    }, 1000)
  }
}
</script>
