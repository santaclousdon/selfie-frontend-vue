<template>
  <div class="main-content">
    <Accordion />
    <Footer />
  </div>
</template>

<script>
import Accordion from '../../components/PhotoRequire/Accordion'
import Footer from '../../components/Home/Footer'
import { themes } from '../../assets/app/app'
export default {
  layout: 'PhotoRequire',
  components: {
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
