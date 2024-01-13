<template>
  <div>
    <Home />
    <div class="main-content">
      <Chart />
      <Services />
      <About />
      <Howithelps />
      <Partner />
      <Contactus />
      <Blog />
    </div>
    <Footer />
  </div>
</template>
<script>
import Home from '../../components/LandingPage15/Home'
import Chart from '../../components/LandingPage15/Chart'
import Services from '../../components/LandingPage15/Services'
import About from '../../components/LandingPage15/About'
import Howithelps from '../../components/LandingPage15/Howithelps'
import Partner from '../../components/LandingPage15/Partner'
import Contactus from '../../components/LandingPage15/Contactus'
import Blog from '../../components/LandingPage15/Blog'
import Footer from '../../components/LandingPage15/Footer'
import { themes } from '../../assets/app/app'
// import { vcRoundChart } from '../../assets/js/plugin/vc_round_chart.min'
export default {
  layout: 'LandingPage15',
  components: {
    Home,
    Chart,
    Services,
    About,
    Howithelps,
    Partner,
    Contactus,
    Blog,
    Footer
  },
  mounted () {
    document.cookie = 'layout=LandingPage15'
    setTimeout(function () {
      themes.index()
      themes.initRevSlider15()
      // vcRoundChart.vcRoundChart()
    }, 1000)
  }
}
</script>
