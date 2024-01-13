<template>
  <div>
    <Home />
    <div class="main-content">
      <Counter />
      <Analytic />
      <Services />
      <Visual />
      <GetTipsTricks />
      <DataDazzle />
      <Brands />
      <Blog />
      <RequestDemo />
    </div>
    <Footer footer-class="footer-one iq-bg-dark iq-over-dark-90" />
  </div>
</template>
<script>
import Home from '../../components/LandingPage10/Home'
import Counter from '../../components/LandingPage10/Counter'
import Analytic from '../../components/LandingPage10/Analytic'
import Services from '../../components/LandingPage10/Services'
import Visual from '../../components/LandingPage10/Visual'
import GetTipsTricks from '../../components/LandingPage10/GetTipsTricks'
import DataDazzle from '../../components/LandingPage10/DataDazzle'
import Brands from '../../components/LandingPage10/Brands'
import Blog from '../../components/LandingPage10/Blog'
import RequestDemo from '../../components/LandingPage10/RequestDemo'
import Footer from '../../components/FooterStyle2/Footer'
import { themes } from '../../assets/app/app'
export default {
  layout: 'LandingPage10',
  components: {
    Home,
    Counter,
    Analytic,
    Services,
    Visual,
    GetTipsTricks,
    DataDazzle,
    Brands,
    Blog,
    RequestDemo,
    Footer
  },
  mounted () {
    document.cookie = 'layout=LandingPage10'
    setTimeout(function () {
      themes.index()
      themes.initRevSlider10()
    }, 1000)
  }
}
</script>
