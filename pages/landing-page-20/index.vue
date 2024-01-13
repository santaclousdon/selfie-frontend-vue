<template>
  <div>
    <Home />
    <div class="main-content">
      <About />
      <Benefits />
      <Whatsinside />
      <Counter />
      <Testimonial />
      <Started />
    </div>
    <Footer />
  </div>
</template>

<script>
import Home from '../../components/LandingPage20/Home'
import About from '../../components/LandingPage20/About'
import Benefits from '../../components/LandingPage20/Benefits'
import Whatsinside from '../../components/LandingPage20/Whatsinside'
import Counter from '../../components/LandingPage20/Counter'
import Testimonial from '../../components/LandingPage20/Testimonial'
import Started from '../../components/LandingPage20/Started'
import Footer from '../../components/LandingPage20/Footer'
import { themes } from '../../assets/app/app'
export default {
  layout: 'LandingPage20',
  components: {
    Home,
    About,
    Benefits,
    Whatsinside,
    Counter,
    Testimonial,
    Started,
    Footer
  },
  mounted () {
    document.cookie = 'layout=LandingPage20'
    setTimeout(function () {
      themes.index()
      themes.initRevSlider20()
    }, 1000)
  }
}
</script>
