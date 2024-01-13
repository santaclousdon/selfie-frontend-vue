<template>
  <div class="main-content">
    <BreadCrum />
    <Services />
    <About />
    <Client />
    <Footer />
  </div>
</template>

<script>
import BreadCrum from '../../components/Services/BreadCrum'
import Services from '../../components/Services/Services'
import About from '../../components/Services/About'
import Client from '../../components/Services/Client'
import Footer from '../../components/Services/Footer'
import { themes } from '../../assets/app/app'
export default {
  layout: 'Services',
  components: {
    BreadCrum,
    Services,
    About,
    Client,
    Footer
  },
  mounted () {
    setTimeout(function () {
      themes.index()
    }, 1000)
  }
}
</script>
