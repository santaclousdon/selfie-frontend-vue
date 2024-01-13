<template>
  <div>
    <Home />
    <div class="main-content">
      <Awards />
      <About />
      <Info />
      <Services />
      <Counter />
      <Partner />
      <Blog />
    </div>
    <Footer />
  </div>
</template>

<script>
import Home from '../../components/LandingPage14/Home'
import Awards from '../../components/LandingPage14/Awards'
import About from '../../components/LandingPage14/About'
import Info from '../../components/LandingPage14/Info'
import Services from '../../components/LandingPage14/Services'
import Counter from '../../components/LandingPage14/Counter'
import Partner from '../../components/LandingPage14/Partner'
import Blog from '../../components/LandingPage14/Blog'
import Footer from '../../components/LandingPage14/Footer'
import { themes } from '../../assets/app/app'
export default {
  layout: 'LandingPage14',
  components: {
    Home,
    Awards,
    About,
    Info,
    Services,
    Counter,
    Partner,
    Blog,
    Footer
  },
  mounted () {
    document.cookie = 'layout=LandingPage14'
    setTimeout(function () {
      themes.index()
      themes.initRevSlider14()
    }, 1000)
  }
}
</script>
