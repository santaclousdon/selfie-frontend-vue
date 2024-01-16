<template>
  <div class="main-content">
    <Accordion />
    <Footer />
  </div>
</template>

<script>
import BreadCrum from '../../components/Careers/BreadCrum'
import Accordion from '../../components/Careers/Accordion'
import Footer from '../../components/LandingPage1/Footer'
import { themes } from '../../assets/app/app'
export default {
  layout: 'Pages',
  components: {
    BreadCrum,
    Accordion,
    Footer
  },
  mounted () {
    setTimeout(function () {
      themes.index()
    }, 1000)
  }
}
</script>
